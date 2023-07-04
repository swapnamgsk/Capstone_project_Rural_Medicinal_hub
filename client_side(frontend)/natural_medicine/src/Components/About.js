import React from "react";
import './About.css';

function About()
{
    return(
        <div>
            <div id = "navbar">
                <div id = "logo"></div>
                <p id = "home">Home</p>
                <p id = "about">About</p>
                <p id = "resource">Plant collections</p>
                <p id = "signup">Signup</p>
            </div>




            <div id = "Footer">
                <div id = "Homepart">
                    <h2 id = "Heading2">Home</h2>
                    <p className="TEXT">About</p>
                    <p className="TEXT">Collections</p>
                    <p className="TEXT">Plant resources</p>
                    <p className="TEXT">Services</p>
                </div>
                <div id = "Contact">
                    <h2 className="Heading3">Contact us</h2>
                    <div id = "Email-address">
                         <h3>Email Adress :  </h3>
                         <p className="TEXT">mgswappna1911@gmail.com</p>
                    </div>
                    <div id = "Mobilenumber">
                        <h3>Mobile number : </h3>
                        <p className="TEXT">9177939170</p>
                    </div>
                    <div id = "ADDRESS">
                        <h3>Adress : </h3>
                        <p className="TEXT">2-20/Jeedimakulapalli,gangavaram<br/>Chittor,AP</p>
                    </div>
                </div>
                <div id = "Socialmedialinks">
                    <h2 id = "Socialmedia">Social media</h2>
                    <div id = "Facebook">
                        <div id = "Facebookimage"></div>
                        <h3 id = "Facebooklink">Facebook</h3>
                    </div>
                    <div id = "Twitter">
                        <div id = "Twitterimage"></div>
                        <h3 id = "Twitterlink">Twitter</h3>
                    </div>
                    <div id = "Instagram">
                        <div   id = "Instagramimage"></div>
                        <h3 id = "Instagramlink">Intsagram</h3>
                    </div>
                    <div id = "Linkedin">
                        <div id = "Linkedinimage"></div>
                        <h3 id = "Linkedinlink">linkedin</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;