import React from "react"
import { Link } from 'react-router-dom';
import SearchBox from '../search/SearchBox'
import Chat from '../chat/Chat'
import api from '../../services/api'
import { removeToken, removeAuthUser } from "../../services/auth";
import Message from '../message/message'
import Button from '../button/button'
import Photo from '../photo/photo'
import Name from '../name/name'
import * as io from 'socket.io-client'

export default class Layout extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            usersList: [],
            userSelected: null,
            conversations: [],
            messages: [],
            socket: null,
            messageText: '',
            ready: false
        }
    }

    componentDidMount = async () => {

        const userId = localStorage.getItem("@auth-user")

        const socket = io('http://localhost:4000', { query: "id="+userId });

        const user = await api.get('/users/'+userId)

        const conversations = await api.get('/conversations')

        const usersConversations = []

        await conversations.data.map(async(conversation) => {

            let id = ''

            if(conversation.idUserOne != userId) {
                id = conversation.idUserOne
            } else {
                id = conversation.idUserTwo
            }

            let convUser = await api.get('/users/'+id)

            usersConversations.push({
                conversationId: conversation.id,
                user: convUser.data
            })

            this.setState({
                conversations: usersConversations
            })

        })

        this.setState({
            user: user.data,
            socket: socket,
        })

        

        socket.on('clients_update', async (data) => {

            let users = []

            data.map(async (u) => {
                let newuser = await api.get('/users/'+u.id)

                console.log(newuser.data)

                newuser.data.password = undefined

                users.push({
                    user: newuser.data,
                    socket: u.socket
                })

                this.setState({
                    usersList: users
                })
    
            })

        })

        socket.on('new-message', (message) => {

            let messages = this.state.messages

            messages.push(message)

            this.setState({messages})

        })

        this.setState({
            ready: true
        })

    }

    selectUser = async (item) => {

        this.setState({
            userSelected: item.user
        })

        const messages = await api.get('messages/'+item.conversationId)

        this.setState({
            messages: messages.data
        })
    }

    changeHandler = event => {

        const name = event.target.name
        
        this.setState({
            
            [name]: event.target.value
            
        })
    }

    sendMessage = async() => {

        console.log('teste')
        
        try{
            const message = await api.post('/messages/', {
                idUserOne: this.state.user.id,
                idUserTwo: this.state.userSelected.id,
                sendFrom: this.state.user.id,
                text: this.state.messageText
            })

            this.setState({
                messageText: '',
            })
        }catch(err){
            console.log(JSON.stringify(err));
        }

    }

    

    render(){
        return(
            <div className="box">
                {this.state.ready &&  
                    <div className="col-md-10 p-0">
                        <div className="content w-100 d-flex">
                            <div className="all-chat d-flex flex-column">

                                <div className="all-chat-head d-flex align-items-center">
                                    <Photo/>
                                    <Name name={this.state.user.name}/>
                                </div>
                                <div className="search-box d-flex align-items-center justify-content-center">
                                    <SearchBox/>
                                    
                                </div>
                                <div class="d-flex bd-highlight">
                                    <div className="conversations flex-column flex-grow-1">
                                        {this.state.conversations.map(item => {
                                         
                                            return (
                                                <div className="user-chat d-flex flex-row align-items-center" onClick={() => this.selectUser(item)}>
                                                <Photo/>
                                                <Name name={item.user.name}/>
                                            </div>
                                            )
                                        })}

                                                                    
                                    </div>
                                </div>
                        
                            </div>
                            
                            <div className="chat d-flex flex-grow-1 flex-column">
                                <div class="chat-head d-flex flex-row align-items-center">
                                    <Photo/>
                                    <Name name={this.state.userSelected ? this.state.userSelected.name : ''}/>
                                </div>
                                
                                    <div className="box-message flex-grow-1 bd-highlight">
                                        {this.state.messages.map(message => {
                                            return (
                                                <Message
                                                    text={message.text} 
                                                    side={
                                                        message.sendFrom === this.state.user.id ? 'right' : 'left'
                                                    }
                                                />
                                            )
                                        })}
                                    </div>
                                
                                <div className="input-message-box d-flex align-items-center justify-content-between">
                                    <input onChange={this.changeHandler} name="messageText" value={this.state.messageText} type="text" className="input-message" placeholder="Digite uma mensagem"/>
                                    <Button sendMessage={this.sendMessage}/>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}