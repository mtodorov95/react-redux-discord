import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { connect} from 'react-redux'
import { signInUser } from '../redux/user/userActions'

function Login(props) {

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png" alt="discord logo"/>
            </div>

            <Button onClick={props.signInUser}>Sign In</Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInUser: () => dispatch(signInUser())
      };
}

export default connect(null, mapDispatchToProps)(Login)
