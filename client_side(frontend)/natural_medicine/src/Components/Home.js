import React from 'react';
import './Home.css'
function Home()
{
    return( 
        <div>
            <div id = "nav">
                <img src = "photo.jpg" alt = "" id = "one"></img>
                <h1 id = "head">Rural Medicinal Hub</h1>
                <h2 id = "home">Home</h2>
                <h2 id = "about">About</h2>
                <h2 id = "main">Plant Resource</h2>
                <h2 id = "signup">Signup</h2>
            </div>
            <div id = "box1">
                <h1>A Journey into Rural Medicinal Plant Knowledge</h1>
            </div>
            <img src = "circles.png" id = "two"></img>
            <div id = "box2"></div>
            <div id = "box3">
                <div id = "circle"></div>
                <div id = "small">
                    <p>Historically plants have played an important role in medicine. Through observation and experimentation, human beings have learnt that plants promote health and well-being. The use of these herbal remedies is not only cost effective but also safe and almost free from serious side effects. The village elders, farmers and tribal have tremendous knowledge about for health reasons started thousands of years ago and is still part of medical practices by folks of various regions of Indian sub-continents as well as several other countries including China middle East, Africa Egypt, South America and other developing countries of world. This review article shade a small beam of light on conservational strategies of medicinal plants as well as their marketing price in past and near future scenario.</p>
                </div>
            </div>
        </div>
    )
}
export default Home;