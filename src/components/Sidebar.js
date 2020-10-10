import React from 'react'
import './Sidebar.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';
import CallIcon from '@material-ui/icons/Call';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import SidebarChannel from './SidebarChannel';
import { InfoOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Discord room</h3>
                <KeyboardArrowDownIcon />
            </div>
                <div className="sidebar__channels">
                    <div className="sidebar__channelsHeader">
                        <div className="sidebar__header">
                        <KeyboardArrowDownIcon />
                        <h4>Text Channels</h4>
                        </div>
                    <AddIcon className="sidebar__addChannel"/>
                    </div>
                    <div className="sidebar__channelsList">
                        <SidebarChannel />
                        <SidebarChannel />
                        <SidebarChannel />
                    </div>
                </div>
                <div className="sidebar__voice">
                    <SignalCellularAltIcon 
                    fontSize="large" 
                    className="sidebar__voiceIcon"/>
                    <div className="sidebar__voiceInfo">
                        <h3>Voice Connected</h3>
                        <p>Stream</p>
                    </div>
                    <div className="sidebar__voiceIcons">
                        <InfoOutlined />
                        <CallIcon />
                    </div>
                </div>
                <div className="sidebar__profile">
                    <Avatar />
                    <div className="sidebar__profileInfo">
                        <h3>Username</h3>
                        <p>#userId</p>
                    </div>
                    <div className="sidebar__profileIcons">
                        <MicIcon />
                        <HeadsetIcon />
                        <SettingsIcon />
                    </div>
                </div>
        </div>
    )
}

export default Sidebar
