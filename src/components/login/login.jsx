import React from 'react'
import Logo from '../../icon.png'
import BackImage from '../../background-image.jpg'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2'


export default class Login extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            register: false,
            email: '',
            username: '',
            password: '',
            classForm: "",
        }
    }

    register = async(event) => {

        event.preventDefault()

        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        
        try{
            const register = await axios.post('http://localhost:4000/users', {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            });
            
            this.switchMode()

            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000
              })
              
              Toast.fire({
                type: 'success',
                title: 'Cadastro efetuado com sucesso.'
              })
            console.log("Certou"+JSON.stringify(register.data));
        }catch(err){
            console.log(JSON.stringify(err));
        }
    }

    changeHandler = event => {

        const name = event.target.name
        
        this.setState({
            
            [name]: event.target.value
            
        })
    }

    switchMode = () => {
        this.setState({
            register: !this.state.register,
            email: '',
            password: '',
            username: ''
        })
    }

    login = async(event) => {

        event.preventDefault()

        console.log('Foi');
        return <Redirect to='/'/>
       
    }

    render(){
        return(
            <div className="box">

                <div className="container d-flex justify-content-center">
                        <div className="form-box bg-transparent col-md-4">
                            <div className="justify-content-center d-flex mb-5">
                                <i className="material-icons text-white user-big-icon">person_outline</i>
                            </div>
                            <form onSubmit={this.register} method="POST">
                                {this.state.register && 
                                    <div className="form-group mb-4">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-transparent">
                                                    <i className="material-icons text-white">person_outline</i>
                                                </span>
                                            </div>
                                            <input onChange={this.changeHandler} name="username" type="text" className="form-control form-control-lg" value={this.state.username} placeholder="Enter username"/>
                                        </div>
                                    </div>
                                }
                                <div className="form-group mb-4">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-transparent">
                                                <i className="material-icons text-white">mail_outline</i>
                                            </span>
                                        </div>
                                        <input onChange={this.changeHandler} name="email" type="email" className="form-control form-control-lg" value={this.state.email} placeholder="Enter email"/>
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-transparent">
                                                <i className="material-icons text-white">lock_outline</i>
                                            </span>
                                        </div>
                                        <input onChange={this.changeHandler} name="password" type="password" className="form-control form-control-lg" value={this.state.password} placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button onClick={this.state.register ? this.register : this.login} className="btn btn-lg btn-register btn-block">{this.state.register ? 'Registrar' : 'Logar'}</button>
                                    {this.state.register
                                        ? <p onClick={this.switchMode}>Clique aqui para efetuar o login.</p>
                                        : <p onClick={this.switchMode}>Não possui uma conta? Cadastre-se!</p>
                                    }
                                </div>
                                <hr className="white-line"/>
                            </form>
                        </div>
                   
                </div>
            </div>
        );
        
    }
        
} 