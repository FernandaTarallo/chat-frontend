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
               <button type="button" className="btn btn-sm">Enviar</button>
           </div>
        );
    }
}