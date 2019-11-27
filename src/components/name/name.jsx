import React from "react"
import { Link } from 'react-router-dom'
import { getAuthUser } from "../../services/auth"

export default class Photo extends React.Component {
    
    super(props){
        this.state = {
            
        }
    }
    render(){
        return(
            <div className="person-name">
                {this.props.name}
            </div>
        );
    }
}