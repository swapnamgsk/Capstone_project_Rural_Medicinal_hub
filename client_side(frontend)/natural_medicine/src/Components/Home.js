import React from 'react';
import './Home.css'
{/* <h1 id = "h1">A Journey into Rural Medicinal Plant Knowledge</h1> */}
function Home()
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

            <div className= "main">
                <div className= "box1">
                <button id = "anchorbutton"><a href = "https://www.youtube.com/watch?v=-a-Pu5fi6wo" className= "anchor"> Watch a small over view on Rural medicinal hub</a></button>
                    <h1>Rural medicinal hub</h1>
                    <h2>A Journey into Rural Medicinal Plant Knowledge</h2>
                    <p className = "para">Nature is the master of healing, and </p> 
                    <p id = "para">medicinal plants are its greatest gift to humanity.</p>
                    <p className= "lastLine">Every plant is a pharmacy, waiting to be discovered</p>
                </div>
                <div className= "image-animation"></div>
            </div>






            <div className= "middlePart">
                <div className = "container">
                    <div id = "imageDiv">
                        <div className="round1 skin"></div>
                        <div className= "round"></div>
                        <div className= "round"></div>
                        <div className= "round"></div>
                    </div>
                    <div id = "textdiv">
                        <div className= "textDiv1">
                            <h3>Skin diseases</h3>
                            <p>Aloevera</p>
                        </div>
                        <div className= "textDiv"></div>
                        <div className= "textDiv"></div>
                        <div className= "textDiv"></div>
                    </div>
                </div> 


                <div className = "container">
                    <div id = "imageDiv">
                        <div className="round1"></div>
                        <div className= "round"></div>
                        <div className= "round"></div>
                        <div className= "round"></div>
                    </div>
                    <div id = "textdiv">
                        <div className= "textDiv1"></div>
                        <div className= "textDiv"></div>
                        <div className= "textDiv"></div>
                        <div className= "textDiv"></div>
                    </div>
                </div>
            </div> 


            <div className= "horizontalDiv"></div>

            <div className= "largeDiv"></div>
            <div className= "lastHorizontal"></div>


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



{/* <p className= "Content">Historically plants have played an important role in medicine. Through observation and experimentation, human beings have learnt that plants promote health and well-being. The use of these herbal remedies is not only cost effective but also safe and almost free from serious side effects. The village elders, farmers and tribal have tremendous knowledge about for health reasons started thousands of years ago and is still part of medical practices by folks of various regions of Indian sub-continents as well as several other countries including China middle East, Africa Egypt, South America and other developing countries of world. This review article shade a small beam of light on conservational strategies of medicinal plants as well as their marketing price in past and near future scenario.</p> */}
