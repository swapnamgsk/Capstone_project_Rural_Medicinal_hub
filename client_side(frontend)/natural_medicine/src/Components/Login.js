import React from "react";
import './Login.css';
function Login(){
    return(
        <div id = "container">
            <div id = "Main">
                <h1>Login Page</h1>
                <input type = "text" placeholder = "Username"  id = "Name"/><br/>
                <input type = "password" placeholder = "Password"  id = "Password"/><br/>
                <button id = "button">Login</button>
                <p>Don't have Account please SIGN UP</p>
                <p>Forget password</p>
            </div>
        </div>
    )
}

export default Login;