import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./app/appReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer
})

export default rootReducer;