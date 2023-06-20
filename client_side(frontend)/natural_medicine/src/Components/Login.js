import React from "react";
import './Login.css';
function Login(){
    return(
        <div id = "CONTAINER">
            <div id = "firstbox"></div>
            <div>
                <p>Don't have Account please  ?<button id = "loginbutton">LOGIN</button></p>
                <h1 id = "HEADING">Login page</h1>
                <div id = "Main">
                    <input type = "text" placeholder = "Username"  id = "Name"/>
                    <input type = "password" placeholder = "Password"  id = "Password"/><br/>
                    <button id = "LOGIN">Login</button>
                    <p className="forgot">Forget password</p>
                </div>
            </div>
        </div>
    )
}

export default Login;