import { SET_CHANNEL_NAME, SET_CHANNEL_ID } from "./appTypes";

export const setChannelId = (id) => {
    return {
        type: SET_CHANNEL_ID,
        payload: id
    }
}

export const setChannelName = (name) => {
    return {
        type: SET_CHANNEL_NAME,
        payload: name
    }
}