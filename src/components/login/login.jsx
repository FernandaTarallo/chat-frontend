import React from 'react'
import Logo from '../../icon.png'
import BackImage from '../../background-image.jpg'
import api from '../../services/api'
import { setToken, setAuthUser } from '../../services/auth'
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2'

export default class Login extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            register: false,
            animation: false,
            email: '',
            username: '',
            password: '',
            classForm: "",
            selectedFile: '',
            redirect: false
        }
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    register = async(event) => {

        event.preventDefault()

        try{
            const register = await api.post('/users', {
                email: this.state.email,
                name: this.state.username,
                password: this.state.password,
            }) 
          
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

    switchMode = async () => {
        this.setState({
            animation: true,
            register: !this.state.register,
            email: '',
            password: '',
            username: '',
        })

        setTimeout(() => {
            this.setState({
                animation: false
            })
        },500)
        
    }

    login = async(event) => {

        event.preventDefault()

        try{
            const login = await api.post('/users/auth', {
                email: this.state.email,
                password: this.state.password
            })
            
            setToken(login.data.token)
            setAuthUser(login.data.user.id)

            this.setRedirect()
            
            
        }catch(err){
            console.log(JSON.stringify(err));
        }
       
    }

    render(){

        return(
            <div className="box">
                {this.renderRedirect()}
                <div className="container d-flex justify-content-center p-5">
                        <div className={"form-box col-md-4 "+(this.state.animation && "transition")}>
                            <div className="justify-content-center d-flex mb-5">
                                <i className="material-icons text-white user-big-icon">person_outline</i>
                            </div>
                            <form onSubmit={this.register} method="POST" enctype="multipart/form-data">
                                {this.state.register && 
                                    <div>
                                        <div className="form-group mb-4">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="material-icons gray">person_outline</i>
                                                    </span>
                                                </div>
                                                <input onChange={this.changeHandler} name="username" type="text" className="form-control form-control-lg" value={this.state.username} placeholder="Digite seu username"/>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="form-group mb-4">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="material-icons gray">mail_outline</i>
                                            </span>
                                        </div>
                                        <input onChange={this.changeHandler} name="email" type="email" className="form-control form-control-lg" value={this.state.email} placeholder="Digite seu email"/>
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="material-icons gray">lock_outline</i>
                                            </span>
                                        </div>
                                        <input onChange={this.changeHandler} name="password" type="password" className="form-control form-control-lg" value={this.state.password} placeholder="Senha"/>
                                    </div>
                                </div>
                                <div className="text-center d-flex flex-column justify-content-center">
                                    <button onClick={this.state.register ? this.register : this.login} className="btn btn-lg btn-register btn-block">{this.state.register ? 'Resgistrar' : 'Logar'}</button>
                                    {this.state.register
                                        ? <p className="mt-3">Clique aqui para efetuar o <span className="link" onClick={this.switchMode}>login.</span></p>
                                        : <p className="mt-3">Não possui uma conta? <span className="link" onClick={this.switchMode}>Cadastre-se!</span></p>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        );
        
    }
        
} 