import React from "react"
import { Link } from 'react-router-dom'

export default class Message extends React.Component {
    
    super(props){
        this.state = {
            
        }
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="avatar">
                        <img className="person-message" src={require('../../batman.png')}/>
                    </div>
                    <div className="txt">Lorem ipsum dolor sit amet.</div>
                </div>
                <div className="container">
                    <div className="avatar">
                        <img className="person-message" src={require('../../batman.png')}/>
                    </div>
                    <div className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste ratione impedit facere quibusdam odit, iusto consequuntur error alias praesentium.</div>
                </div>
                <div className="container-right">
                    <div className="avatar-right">
                        <img className="person-message-right" src={require('../../batman.png')}/>
                    </div>
                    <div className="txt-right">Lorem ipsum dolor sit amet.</div>
                </div>
                <div className="container">
                    <div className="avatar">
                        <img className="person-message" src={require('../../batman.png')}/>
                    </div>
                    <div className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste ratione impedit facere quibusdam odit, iusto consequuntur error alias praesentium.</div>
                </div>
            </div>
        );
    }
}