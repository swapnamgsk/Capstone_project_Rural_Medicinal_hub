import React from 'react';
import './Home.css'
function Home()
{
    return( 
        <div>
            <div id = "navbar">
                <div id = "logo"></div>
                <p id = "home">Home</p>
                <p id = "about">About</p>
                <p id = "resource">Plant Resource</p>
                <p id = "signup">Signup</p>
            </div>
            <div id = "box1">
                {/* <h1 id = "h1">A Journey into Rural Medicinal Plant Knowledge</h1> */}
                <div id = "Leftbox"></div>
                <div id = "rightbox"></div>
            </div>
            <div id = "box2">
                <img src = "round.png" className = "circle" />
                <img src = "round.png" className = "circle" />
                <img src = "round.png" className = "circle" />
            </div>
            <div id = "box3">
                <div id = "circlestructure"></div>
                <div id = "content">
                    <h2>Rediscovering Rural Medicinal Plants</h2>
                    <p>Historically plants have played an important role in medicine. Through observation and experimentation, human beings have learnt that plants promote health and well-being. The use of these herbal remedies is not only cost effective but also safe and almost free from serious side effects. The village elders, farmers and tribal have tremendous knowledge about for health reasons started thousands of years ago and is still part of medical practices by folks of various regions of Indian sub-continents as well as several other countries including China middle East, Africa Egypt, South America and other developing countries of world. This review article shade a small beam of light on conservational strategies of medicinal plants as well as their marketing price in past and near future scenario.</p>
                </div>
            </div>
            <div id = "box4">
                <div id = "image1"></div>
                <div id = "image2"></div>
                <div id = "image3"></div>
                <div id = "image4"></div>
            </div>
            <div id = "lastcontent"></div>
            <div id = "footer">
                <div id = "homepart">
                    <h2 id = "heading2">Home</h2>
                    <p>About</p>
                    <p>Collections</p>
                    <p>Plant resources</p>
                    <p>Services</p>
                </div>
                <div id = "contact">
                    <h2>Contact us</h2>
                    <div id = "email-address">
                         <h3>Email Adress :  </h3>
                         <p>mgswappna1911@gmail.com</p>
                    </div>
                    <div id = "mobilenumber">
                        <h3>Mobile number : </h3>
                        <p>9177939170</p>
                    </div>
                    <div id = "Address">
                        <h3>Adress : </h3>
                        <p>2-20/Jeedimakulapalli,gangavaram<br/>Chittor,AP</p>
                    </div>
                </div>
                <div id = "socialmedialinks">
                    <h2 id = "socialmedia">Social media</h2>
                    <div id = "facebook">
                        <div id = "facebookimage"></div>
                        <h3 id = "facebooklink">Facebook</h3>
                    </div>
                    <div id = "twitter">
                        <div id = "twitterimage"></div>
                        <h3 id = "twitterlink">Twitter</h3>
                    </div>
                    <div id = "instagram">
                        <div   id = "instagramimage"></div>
                        <h3 id = "instagramlink">Intsagram</h3>
                    </div>
                    <div id = "linkedin">
                        <div id = "linkedinimage"></div>
                        <h3 id = "linkedinlink">linkedin</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;