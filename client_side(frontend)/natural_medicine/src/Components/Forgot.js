import React from "react";
import './Forgot.css'

function Forgot()
{
    return(
        <div id = "bigconatiner">
            <div id = "leftcontainer"></div>
            <div id = "rightcontainer">
                <h1>Forgot Password</h1>
                <p>No worries, Reset password</p>
                <input type = "text" placeholder = "Username"  id = "username"/><br/>
                <input type = "password" placeholder = "NewPassword"  id = "newpassword"/><br/>
                <input type = "password" placeholder = "ConfirmPassword"  id = "confirmpassword"/><br/>
                <button id = "reset">Reset</button>
                <p>Back to Loginpage</p>
            </div>
        </div>
    )
}
export default Forgot;