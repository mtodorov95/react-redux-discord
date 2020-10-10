import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Message.css"

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>Username 
                    <span className="message__timestamp">
                        time
                    </span>
                    </h4>
                    <p>This is the message</p>
            </div>
        </div>
    )
}

export default Message
