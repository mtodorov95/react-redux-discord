import { SET_CHANNEL_NAME, SET_CHANNEL_ID } from "./appTypes";

const initialState = {
    channelId: null,
    channelName: null
  }
  
  
  const appReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CHANNEL_ID:
            return {
                ...state,
                channelId: action.payload
            }
            case SET_CHANNEL_NAME:
            return {
                ...state,
                channelName: action.payload
            }
      default:
        return state;
    }
  }
  
  
  export default appReducer;