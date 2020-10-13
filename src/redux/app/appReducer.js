import { SET_CHANNEL_INFO } from "./appTypes";

const initialState = {
    channelId: null,
    channelName: null
  }
  
  
  const appReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CHANNEL_INFO:
            return {
                ...state,
                channelId: action.payload.id,
                channelName: action.payload.channelName
            }
      default:
        return state;
    }
  }
  
  
  export default appReducer;