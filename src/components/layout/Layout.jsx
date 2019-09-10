    
import React from "react"
import NavBar from './NavBar'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    render(){
        return(
            <div>
                <NavBar/>
            </div>
        );
    }
}