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

export default class Layout extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            conversations:[],
            user: null,
            ready: false
        }
    }

    componentDidMount = async () => {

        const userId = localStorage.getItem("@auth-user")

        const user = await api.get('/users/'+userId)

        console.log(user.data)

        this.setState({
            user: user.data,
            ready: true
        })

    }

    render(){
        return(
            <div className="box">
                {this.state.ready &&
                    <div className="col-md-10 p-0">
                        <div className="content w-100 d-flex">
                            <div className="all-chat d-flex flex-column">

                                <div class="all-chat-head d-flex align-items-center">
                                    <Photo/>
                                    <Name name={this.state.user.name}/>
                                </div>
                                <div className="search-box d-flex align-items-center justify-content-center">
                                    <SearchBox/>
                                </div>
                                <div class="d-flex bd-highlight">
                                    <div className="conversations flex-column flex-grow-1">
                                        <div className="user-chat flex-row align-items-center">
                                            <Photo/>
                                            <Name name={this.state.user.name}/>
                                        </div>                                
                                    </div>
                                </div>
                        
                            </div>
                            
                            <div className="chat d-flex flex-grow-1 flex-column">
                                <div class="chat-head d-flex flex-row align-items-center">
                                    <Photo/>
                                    <Name name={this.state.user.name}/>
                                </div>
                                <div className="box-message flex-grow-1 bd-highlight">
                                    <Message/>
                                </div>
                                <div className="input-message-box d-flex align-items-center justify-content-between">
                                    <input type="text" className="input-message" placeholder="Digite uma mensagem"/>
                                    <Button/>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}