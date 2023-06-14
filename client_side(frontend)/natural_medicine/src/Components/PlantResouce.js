import React from 'react';
import './PlantResource.css';

function PlantResource()
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
            <h1>Plant Resources</h1>
            <div className = "firstbox">
                <div className = "subbox">
                    <div className= "card milkplant"></div>
                    <div className= "card coronaplant"></div>
                    <div className= "card aloevera"></div>
                    <div className= "card munaga"></div>
                </div>
                <div className = "subbox">
                    <div className= "card"></div>
                    <div className= "card"></div>
                    <div className= "card"></div>
                    <div className= "card"></div>
                </div>
                <div className = "subbox">
                    <div className= "card"></div>
                    <div className= "card"></div>
                    <div className= "card"></div>
                    <div className= "card"></div>
                </div>
                <div className = "subbox">
                    <div className= "card"></div>
                    <div className= "card"></div>
                    <div className= "card"></div>
                    <div className= "card"></div>
                </div>
            </div>
        </div>
    )
}
export default PlantResource;