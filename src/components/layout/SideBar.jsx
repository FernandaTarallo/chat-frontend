import React from 'react'

export default class SideBar extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
            <div>
                <div className="side-box d-flex align-items-center flex-column">
                    <div className="d-flex mb-5">
                        <i className="material-icons text-white chat-big-icon">chat_bubble_outline</i>
                    </div>

                    <div className="d-flex mb-3">
                        <i className="material-icons text-white chat-icons">person</i>
                    </div>

                    <div className="d-flex mb-3">
                        <i className="material-icons text-white chat-icons">message</i>
                    </div>

                    <div className="d-flex mb-3">
                        <i className="material-icons text-white chat-icons">people</i>
                    </div>

                    <div className="d-flex mb-3">
                        <i className="material-icons text-white chat-icons">settings</i>
                    </div>

                    <div className="mt-auto d-flex">
                        <i className="material-icons text-white chat-icons">power_settings_new</i>
                    </div>
                    
                </div>
            </div>
        )
    }
}
