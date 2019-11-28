import React from "react"
import moment from "moment"
import axios from 'axios'
import api from '../../services/api'
import { Link } from 'react-router-dom'

export default class Message extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            image: null,
            ready: false
        }
    }

    githubRequest = async () => {

        const user = await api.get('/users/'+this.props.userId)

        const request = await axios.get('https://api.github.com/users/'+user.data.name)
        
        this.setState({
            image: request.data.avatar_url
        })
    }

    // componentDidMount = async() => {
    //     await this.githubRequest()

    //     this.setState({
    //         ready: true
    //     })
    // }

    render(){
        return(
            
            <div className={this.props.side == 'right' ? 'container-right' : 'container'}>
                <div className={this.props.side == 'right' ? 'avatar-right' : 'avatar'}>
                    <img className={this.props.side == 'right' ? 'person-message-right' : 'person-message'} src={require("../../user.jpg")}/>
                </div>
                <div className={this.props.side == 'right' ? 'txt-right' : 'txt'}>
                    {this.props.text}<br/><br/>
                    <span className="small">{moment(this.props.data).format('DD/MM/YYYY HH:mm:ss')}</span>
                </div>
            </div>

            // <div className="container-right">
            // <div className="avatar-right">
            //     <img className="person-message-right" src={require('../../batman.png')}/>
            // </div>
            // <div className="txt-right">Lorem ipsum dolor sit amet.</div>
            // </div>
           
        );
    }
}