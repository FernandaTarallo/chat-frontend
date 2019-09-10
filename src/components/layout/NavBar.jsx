import React from 'react'
import Logo from '../../icon.png'
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="ml-5" href="/">
                    <img src={Logo} className="logo-navbar"></img>
                </a>
            </nav>
        );
    }
}

