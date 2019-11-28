import React from "react"
import { Link } from 'react-router-dom'

export default class Photo extends React.Component {
    
    super(props){
        this.state = {
            
        }
    }
    render(){
        return(
            <div className="">
                <img className="person-photo mt-3 ml-2" src={require('../../user.jpg')}/>
            </div>
        );
    }
}