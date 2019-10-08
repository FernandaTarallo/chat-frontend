    
import React from "react"
import { Link } from 'react-router-dom';

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    render(){
        return(
            <div className="box">
                <div className="col-md-10 p-0">
                    <div className="content w-100 d-flex">
                        <div className="all-chat d-flex flex-column">
                            <div class="all-chat-head p-2 d-flex align-items-center">Chat</div>
                            <div class="d-flex bd-highlight">
                                <div className="conversations flex-column flex-grow-1">
                                    <div className="user-chat">Conversa 1</div>
                                    <div className="user-chat">Conversa 2</div>
                                    <div className="user-chat">Conversa 3</div>
                                    <div className="user-chat">Conversa 1</div>
                                    <div className="user-chat">Conversa 1</div>
                                    <div className="user-chat">Conversa 2</div>
                                    <div className="user-chat">Conversa 3</div>
                                    <div className="user-chat">Conversa 1</div>
                                    <div className="user-chat">Conversa 2</div>
                                    <div className="user-chat">Conversa 3</div>
                                    <div className="user-chat">Conversa 1</div>
                                    <div className="user-chat">Conversa 2</div>
                                    <div className="user-chat">Conversa 3</div>     
                                    <div className="user-chat">Conversa 1</div>
                                    <div className="user-chat">Conversa 2</div>
                                    <div className="user-chat">Conversa 3</div>
                                    <div className="user-chat">Conversa 1</div>
                                    <div className="user-chat">Conversa 1</div>
                                    <div className="user-chat">Conversa 2</div>
                                    <div className="user-chat">Conversa 3</div>
                                    <div className="user-chat">Conversa 1</div>
                                    <div className="user-chat">Conversa 2</div>
                                    <div className="user-chat">Conversa 3</div>
                                    <div className="user-chat">Conversa 1</div>
                                    <div className="user-chat">Conversa 2</div>
                                    <div className="user-chat">Conversa 3</div>                                  
                                </div>
                            </div>
                        </div>
                        
                        <div className="chat d-flex flex-grow-1 flex-column">
                            <div class="chat-head bd-highlight">Flex item</div>
                            <div class="flex-grow-1 bd-highlight">Flex item</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}