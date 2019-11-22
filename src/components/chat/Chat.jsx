import React from 'react'

export default class AllChat extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
            <div classname="box">
                <div classname="chat-box d-flex flex-column">
                    <div classname="chat-messages d-flex">
                        Conversa da pessoa
                    </div>
                </div>
            </div>
        )
    }
}
