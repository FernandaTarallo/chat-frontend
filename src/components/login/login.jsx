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
            <div className="div-content">
                <div className="row">
                    <div className="login-content col-lg-5"></div>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="userHelp" placeholder="Enter username"/>
                            </div>

                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>

                            <div className="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                        
                            <button type="submit" class="btn btn-primary">Logar</button>

                        </form>
                    </div>
            </div>
        );
        
    }
        
} 