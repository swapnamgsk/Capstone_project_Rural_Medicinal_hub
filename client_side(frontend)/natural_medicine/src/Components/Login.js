import React from "react";
import './Login.css';
function Login(){
    return(
        <div>
            <div id = "Main">
                {/* <img src = "login.jpeg" id = "login"></img> */}
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