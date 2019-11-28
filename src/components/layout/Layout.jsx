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
import { throwStatement } from "@babel/types";
import { setTimeout } from "timers";

export default class Layout extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            onlineUsers: [],
            userSelected: null,
            selectedUserId: 0,
            conversations: [],
            messages: [],
            socket: null,
            messageText: '',
            searchInput: '',
            ready: false
        }
    }

    messagesEndRef = React.createRef()

    componentDidMount = async () => {

        const userId = localStorage.getItem("@auth-user")

        const socket = io('http://localhost:4000', { query: "id="+userId });

        const user = await api.get('/users/'+userId)

        this.updateConversations(userId)

        this.setState({
            user: user.data,
            socket: socket,
        })

        socket.on('clients_update', async (data) => {

            console.log('chegou')

            let users = []

            try {
                data.map(async (u) => {

                    let newuser = await api.get('/users/'+u.id)

                    if(await newuser.data.id !== this.state.user.id) {
                        users.push({
                            user: newuser.data,
                            socket: u.socket
                        })
                    }

                    this.setState({
                        onlineUsers: users
                    })
        
                })

                this.setState({
                    ready: true
                })

            } catch(err) {
                console.log(err)
            }

        })

        socket.on('new-message', (message) => {

            if(message.sendFrom == this.state.selectedUserId || message.sendFrom == this.state.user.id) {

                let messages = this.state.messages

                messages.push(message)

                this.setState({messages})

                this.scrollToBottom()
            
            }

            this.updateConversations(this.state.user.id)

        })

    }

    updateConversations = async (userId) => {
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

            setTimeout(() => {
                this.setState({
                    conversations: usersConversations
                })
            }, 1000);

        })

       
      
    }

    selectUser = async (item) => {

        this.setState({
            userSelected: item.user,
            selectedUserId: item.user.id,
            messages: []
        })

        let conversationId = ''

        if(item.conversationId) {
            conversationId = item.conversationId
        } else {
            let conversation = this.state.conversations.find(conv => conv.user.id == item.user.id)

            if(conversation) {
                conversationId = conversation.conversationId
            }

        }

        if(conversationId) {
            const messages = await api.get('messages/'+conversationId)

            this.setState({
                messages: messages.data
            })
        }

        this.scrollToBottom()
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
            await api.post('/messages/', {
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

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
      
    render(){
        return(
            <div className="box">
                {this.state.ready &&  
                    <div className="col-md-10 p-0">
                        <div className="content w-100 d-flex">
                            <div className="all-chat d-flex flex-column">

                                <div className="all-chat-head d-flex align-items-center">
                                    <Photo name={this.state.user.name}/>
                                    <Name name={this.state.user.name}/>
                                </div>
                                <div className="search-box d-flex align-items-center justify-content-center">
                                    <div>
                                        <input type="text" className="input-search" placeholder="Procurar ou começar uma nova conversa"/>
                                    </div>
                                    
                                </div>

                                
                                <div class="tab-content" id="nav-tabContent">
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <span class="col-md-6 cursor-pointer nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Minhas conversas</span>
                                        <span class="col-md-6 cursor-pointer nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Online</span>
                                    </div>
                                </nav>
                                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                                        <div class="d-flex bd-highlight cursor-pointer">
                                            <div className="conversations flex-column flex-grow-1">
                                                {this.state.conversations.map(item => {
                                                
                                                    return (
                                                        <div className={"user-chat d-flex flex-row align-items-center "+( item.user.id == this.state.selectedUserId && "selected")} onClick={() => this.selectUser(item)}>
                                                        <Photo name={item.user.name}/>
                                                        <Name name={item.user.name}/>
                                                        
                                                    </div>
                                                    )
                                                })} 
                                                                    
                                            </div>
                                        </div>

                                    </div>
                                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                                        <div class="d-flex bd-highlight cursor-pointer">
                                            <div className="conversations flex-column flex-grow-1">
                                                {this.state.onlineUsers.map(item => {
                                                
                                                    return (
                                                        <div className={"user-chat d-flex flex-row align-items-center "+( item.user.id == this.state.selectedUserId && "selected")} onClick={() => this.selectUser(item)}>
                                                        <Photo name={item.user.name}/>
                                                        <Name name={item.user.name}/>
                                                    </div>
                                                    )
                                                })}                          
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                
                        
                            </div>
                            
                            <div className="chat d-flex flex-grow-1 flex-column">
                                <div class="chat-head d-flex flex-row align-items-center">
                                    <Photo name={this.state.userSelected ? this.state.userSelected.name : ''}/>
                                    <Name name={this.state.userSelected ? this.state.userSelected.name : ''}/>
                                </div>
                                
                                    <div className="box-message flex-grow-1 bd-highlight">
                                        {this.state.messages.map(message => {
                                            return (
                                                <Message
                                                    text={message.text}
                                                    data={message.createdAt} 
                                                    userId={message.sendFrom}
                                                    side={
                                                        message.sendFrom === this.state.user.id ? 'right' : 'left'
                                                    }
                                                />
                                            )
                                        })}
                                        <div style={{ float:"left", clear: "both" }}
                                            ref={(el) => { this.messagesEnd = el; }}>
                                        </div>      
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