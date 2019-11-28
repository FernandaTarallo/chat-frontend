import React from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Photo extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            image: null,
            ready: false
        }
    }

    githubRequest = async () => {
        const request = await axios.get('https://api.github.com/users/'+this.props.name)

        this.setState({
            image: request.data.avatar_url
        })
    }

    componentDidMount = async() => {
        await this.githubRequest()

        this.setState({
            ready: true
        })
    }

    render(){
        return(
            <div className="">
                {this.state.ready &&
                    <img className="person-photo mt-3 ml-2" src={this.state.image}/>
                }
            </div>
        );
    }
}