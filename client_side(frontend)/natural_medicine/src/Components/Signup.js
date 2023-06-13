import React from "react";
import './Signup.css';


function Signup(){
    return(
        <div id = "container">
            <div id = "leftBox">
                <h2>Uncover, Unlock, Empower:<br/> Nature's Wisdom.</h2>
            </div>
            <div>
            <p>Already have Account ?<button id = "loginbutton">LOGIN</button></p>
            <h1 id = "heading">Connnect with us</h1>
            <div id = "main">
                <input type = "text" placeholder = "Name"  id = "name"/>
                <input type = "text" placeholder = "Username"  id = "user"/>
                <input type = "email" placeholder = "Email id"  id = "mail"/><br/>
                <input type = "password" placeholder = "Password"  id = "password"/><br/>
                <input type = "number" placeholder = "Phonenumber"  id = "number"/><br/>
                <button id = "button">SIGN UP</button>
            </div>
            </div>
        </div>
    )
}
export default Signup;
