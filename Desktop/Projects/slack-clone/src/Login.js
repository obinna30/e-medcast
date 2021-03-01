import React from "react";
import "./Login.css";
import {Button} from '@material-ui/core'
import { auth, provider } from "./firebase";

function Login() {
    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithPopup(provider).catch((error)=>alert(error.message))

    }
    const guestSignIn = (e) => {
        e.preventDefault()

        auth.signInAnonymously().catch((error)=>alert(error.message))

    }
  return (
    <div className="login">
      <div className="login_inner">
        <img
          src="https://images.vexels.com/media/users/3/136168/isolated/preview/870245359fd482ecc414477b878b8f16-health-care-logo-by-vexels.png"
          alt=""
        />
        <h1>Sign In to E-medCast</h1>
        <p>E-medcast.com</p>
        <Button onClick={signIn} >Sign In with Google</Button><br/>
        <Button onClick={guestSignIn} >Guest Users</Button>
      </div>
    </div>
  );
}

export default Login;
