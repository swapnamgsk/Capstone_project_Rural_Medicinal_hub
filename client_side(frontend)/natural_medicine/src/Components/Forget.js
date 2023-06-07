import React from "react";
import './Forget.css'

function Forget()
{
    return(
        <div id = "main">
            <div id = "first">
                <h1>Forgot Password</h1>
                <p>No worries, Reset password</p>
                 <input type = "text" placeholder="Username" id = "username"></input><br/>
                 <input type = "text" placeholder="Newpassword" id = "new"></input><br/>
                 <input type = "text" placeholder="Confirmpassword" id = "confirm"></input><br/>
                 <button id = "button">Reset Password</button>
            </div>
            <div id = "second"></div>
        </div>
    )
}
export default Forget;