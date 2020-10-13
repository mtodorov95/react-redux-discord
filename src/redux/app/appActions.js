import { SET_CHANNEL_INFO } from "./appTypes";


export const setChannelInfo = (info) => {
    return {
        type: SET_CHANNEL_INFO,
        payload: info
    }
}