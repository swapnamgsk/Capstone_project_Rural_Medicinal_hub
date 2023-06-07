import React from "react";

function Forgot()
{
    return
    (
        <div id = "container">
            <div id = "main">
                <h1>Forgot Password</h1>
                <p>No worries, Reset password</p>
                <input type = "text" placeholder = "Username"  id = "user"/><br/>
                <input type = "password" placeholder = "NewPassword"  id = "new"/><br/>
                <input type = "password" placeholder = "ConfirmPassword"  id = "confirm"/><br/>
            </div>
        </div>
    )
}
export default Forgot;