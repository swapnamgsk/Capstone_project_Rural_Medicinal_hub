import React from "react";
import './Login.css';
function Login(){
    return(
        <div id = "container">
            <div id = "firstbox"></div>
            <div>
            <p>Don't have Account please  ?<button id = "loginbutton">LOGIN</button></p>
            <div id = "Main">
            <h1 id = "heading">Login page</h1>
                <input type = "text" placeholder = "Username"  id = "Name"/>
                <input type = "password" placeholder = "Password"  id = "Password"/><br/>
                <button id = "button">Login</button>
                <p className="forgot">Forget password</p>
            </div>
            </div>
        </div>
    )
}

export default Login;