import React from 'react'
import { useDispatch } from 'react-redux'
import {setChannelInfo} from '../redux/app/appActions'
import "./SidebarChannel.css"

function SidebarChannel({id, channel}) {
    const dispatch = useDispatch();

    return (
        <div className="sidebarChannel" onClick={() => dispatch(setChannelInfo({id:id, channelName:channel}))}>
            <h4>
                <span className="sidebarChannel__hash">
                    #
                </span>
                {channel.channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
