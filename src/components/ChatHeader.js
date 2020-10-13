import React from 'react'
import "./ChatHeader.css"
import NotificationsIcon from '@material-ui/icons/Notifications';
import { EditLocationRounded, HelpRounded, PeopleRounded, SearchRounded, SendRounded } from '@material-ui/icons';


function ChatHeader({channelName}) {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3><span className="chatHeader__hash">#</span>
                {channelName}</h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsIcon />
                <EditLocationRounded />
                <PeopleRounded />
                <div className="chatHeader__search">
                    <input type="text" placeholder="Search"/>
                    <SearchRounded />
                </div>
                <SendRounded />
                <HelpRounded />
            </div>
        </div>
    )
}

export default ChatHeader
