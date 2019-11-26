import React from "react"
import { Link } from 'react-router-dom';
import SearchBox from '../search/SearchBox'
import Chat from '../chat/Chat'
import api from '../../services/api'
import { removeToken, removeAuthUser } from "../../services/auth";

export default class Layout extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            conversations:[],
            user: null
        }
    }

    componentDidMount = async () => {

    //    removeToken()
    //    removeAuthUser()

        this.setState({
            user: localStorage.getItem("@auth-user")
        })

        console.log(this.state.user)
    }

    render(){
        return(
            <div className="box">
                <div className="col-md-10 p-0">
                    <div className="content w-100 d-flex">
                        <div className="all-chat d-flex flex-column">
                            <div class="all-chat-head p-2 d-flex align-items-center">
                                <div className="text-left ml-3 mt-2 form-inline">
                                    <img className="img-post-icon" src={require('../../batman.png')} /> 
                                    <p><h3></h3></p>
                                </div>
                            </div>
                                <SearchBox/>
                            <div class="d-flex bd-highlight">
                                <div className="conversations flex-column flex-grow-1">
                                    <div className="user-chat">
                                        <div className="text-left ml-3 mt-2 form-inline">
                                            <img className="img-post-icon" src={require('../../batman.png')} />
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                        
                        <div className="chat d-flex flex-grow-1 flex-column">
                            <div class="chat-head bd-highlight">
                            <div className="text-left ml-3 mt-2 form-inline">
                                <img className="img-post-icon" src={require('../../batman.png')} /> 
                            </div>
                            </div>
                            <div class="flex-grow-1 bd-highlight">
                                <Chat/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}