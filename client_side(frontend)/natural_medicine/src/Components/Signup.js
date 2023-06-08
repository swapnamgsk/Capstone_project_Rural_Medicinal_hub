import React from "react";
import './Signup.css';


function Signup(){
    return(
        <div id = "container">
            <div id = "main">
                <h1>Signup Page</h1>
                <input type = "text" placeholder = "Name"  id = "name"/><br/>
                <input type = "text" placeholder = "Username"  id = "user"/><br/>
                <input type = "email" placeholder = "Email id"  id = "mail"/><br/>
                <input type = "password" placeholder = "Password"  id = "password"/><br/>
                <input type = "number" placeholder = "Phonenumber"  id = "number"/><br/>
                <button id = "button">SIGN UP</button>
                <p>Already have Account LOGIN</p    >
            </div>
        </div>
    )
}
export default Signup;