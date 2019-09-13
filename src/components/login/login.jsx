import React from 'react'
import Logo from '../../icon.png'
import BackImage from '../../background-image.jpg'
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            register: false,
            classForm: "",
        }
    }

    render(){
        return(
            <div className="box">
                <div className="container d-flex justify-content-center">
                    
                        <div className="form-box bg-transparent col-md-4">
                            <div className="justify-content-center d-flex mb-5">
                                <i className="material-icons text-white user-big-icon">person_outline</i>
                            </div>
                            <form>
                                <div className="form-group mb-4">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-transparent">
                                                <i class="material-icons text-white">person_outline</i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="userHelp" placeholder="Enter username"/>
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-transparent">
                                                <i class="material-icons text-white">mail_outline</i>
                                            </span>
                                        </div>
                                        <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-transparent">
                                                <i class="material-icons text-white">lock_outline</i>
                                            </span>
                                        </div>
                                        <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-lg btn-register btn-block">Registrar</button>
                                </div>
                                <hr className="white-line"/>
                            </form>
                        </div>
                   
                </div>
            </div>
        );
        
    }
        
} 