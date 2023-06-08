import React from "react";
import './Forgot.css'

function Forgot()
{
    return(
        <div id = "bigconatiner">
            <div id = "container">
                <div id = "box1">
                    <h1>Forgot Password</h1>
                    <p>No worries, Reset password</p>
                    <input type = "text" placeholder = "Username"  id = "user"/><br/>
                    <input type = "password" placeholder = "NewPassword"  id = "newpassword"/><br/>
                    <input type = "password" placeholder = "ConfirmPassword"  id = "confirmpassword"/><br/>
                    <button id = "button">Reset</button>
                </div>
                <div id = "box2"></div>
            </div>
        </div>
    )
}
export default Forgot;