import React from 'react'
import './Sidebar.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';

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
        </div>
    )
}

export default Sidebar
