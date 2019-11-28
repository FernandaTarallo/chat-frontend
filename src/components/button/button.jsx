import React from "react"
import { Link } from 'react-router-dom'

export default class Button extends React.Component {
    
    super(props){
        this.state = {
            
        }
    }
    render(){
        return(
           <div>
               <button onClick={this.props.sendMessage} type="button" className="btn btn-sm btn-1">Enviar</button>
           </div>
        );
    }
}