import React from "react";
import './SignupPage.css';
// import { useState } from "react";


function Signup(){
    return(
        <div id = "cont">
            <div id = "main">
                <input type = "text" placeholder = "Name"  id = "name"/><br/>
                <input type = "text" placeholder = "Username"  id = "user"/><br/>
                <input type = "email" placeholder = "Email id"  id = "mail"/><br/>
                <input type = "password" placeholder = "Password"  id = "password"/><br/>
                <input type = "number" placeholder = "Phonenumber"  id = "number"/><br/>
                <button id = "btn">SIGN UP</button>
                <p>Already have Account LOGIN</p    >
            </div>
            <div id= "second">
                <img src = "plants.png" id = "plants"></img>
                
            </div>
        </div>
    )
}
export default Signup;