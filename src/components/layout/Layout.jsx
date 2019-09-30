    
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
            <div class="body d-flex">
                <div className="side-box d-flex align-items-center flex-column">
                    <div className="d-flex mb-5">
                        <i className="material-icons text-white chat-big-icon">chat_bubble_outline</i>
                    </div>

                    <div className="d-flex mb-3">
                        <i className="material-icons text-white chat-icons">person</i>
                    </div>

                    <div className="d-flex mb-3">
                        <i className="material-icons text-white chat-icons">message</i>
                    </div>

                    <div className="d-flex mb-3">
                        <i className="material-icons text-white chat-icons">people</i>
                    </div>

                    <div className="d-flex mb-3">
                        <i className="material-icons text-white chat-icons">settings</i>
                    </div>

                    <div className="mt-auto d-flex">
                        <i className="material-icons text-white chat-icons">power_settings_new</i>
                    </div>
                </div>
                <div class="w-100 d-flex flex-column">
                    <div className="nav-box d-flex p-2 bd-highlight">
                        Navbar
                    </div>
                    <div className="content d-flex bd-highlight">
                        <div className="all-chat d-flex flex-column">
                            <div class="all-chat-head bd-highlight">Flex item</div>
                            <div class="flex-grow-1 bd-highlight">Flex item</div>
                        </div>
                        <div className="chat d-flex flex-grow-1 flex-column">
                            <div class="chat-head bd-highlight">Flex item</div>
                            <div class="flex-grow-1 bd-highlight">Flex item</div>
                        </div>
                        <div className="active-chat d-flex flex-column">
                            <div class="active-head bd-highlight">Flex item</div>
                            <div class="flex-grow-1 bd-highlight">Flex item</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}