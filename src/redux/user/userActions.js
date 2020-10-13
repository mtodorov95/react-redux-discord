import { auth, provider } from "../../config/firebase"
import { USER_LOGIN, USER_LOGOUT } from "./userTypes"

export const userLogin = (user) => {
    return {
        type: USER_LOGIN,
        payload: {
            displayName :user.displayName,
            photoUrl: user.photoURL,
            uid: user.uid
        }
    }
}

export const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
}

export const signInUser = () => {
    return (dispatch) => {
        auth.signInWithPopup(provider)
        .then(res => {
            dispatch(userLogin(res.user));
        })
        .catch(error => {
            alert(error.message)
        });
    }
}