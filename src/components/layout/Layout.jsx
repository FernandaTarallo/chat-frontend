import React from "react"
import { Link } from 'react-router-dom';
import SearchBox from '../search/SearchBox'
import Chat from '../chat/Chat'
import Message from '../message/message'
import Button from '../button/button'
import Photo from '../photo/photo'
import Name from '../name/name'
import axios from 'axios'

export default class Layout extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            conversations:[],
            id:"",
            nome: "",
            email: "",
            tipo: "",
        }
        axios.get('http://localhost:3001/usuarios')
        .then(res => {
            console.log(res.data.usuarios);
            this.setState({
              usuarios : res.data.usuarios,
            })
            console.log(this.state);
        }).catch((e)=>{
            console.log(e);
        })
    }

    render(){
        return(
            <div className="box">
                <div className="col-md-10 p-0">
                    <div className="content w-100 d-flex">
                        <div className="all-chat d-flex flex-column">
                            <div class="all-chat-head d-flex align-items-center">
                                <Photo/>
                                <Name/>
                            </div>
                            <div className="search-box d-flex align-items-center justify-content-center">
                                <SearchBox/>
                            </div>
                            <div class="d-flex bd-highlight">
                                <div className="conversations flex-column flex-grow-1">
                                    <div className="user-chat">
                                        <Photo/>
                                        <Name/>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                        
                        <div className="chat d-flex flex-grow-1 flex-column">
                            <div class="chat-head d-flex flex-row align-items-center">
                                <Photo/>
                                <Name/>
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
            </div>
        );
    }
}