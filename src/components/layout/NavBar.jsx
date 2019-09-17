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
            <nav className="nav-box fixed-top d-flex flex-row justify-content-end align-items-center">
                <label className="sr-only" for="">Username</label>
                <div className="input-group col-md-4 position-relative align-items-center">
                    <i className="material-icons search">search</i>
                    <input type="text" className="form-control" id="" placeholder="Username"/>
                </div>
            </nav>
        );
    }
}

