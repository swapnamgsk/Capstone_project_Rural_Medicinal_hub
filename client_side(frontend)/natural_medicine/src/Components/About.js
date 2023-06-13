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
                <p id = "resource">Plant Resource</p>
                <p id = "signup">Signup</p>
            </div>




            <h1>In a nutshell about us</h1>
            <div className = "aboutus">
                <div className = "flowerimage"></div>
                <div className="text">
                    <p className="subheading">Welcome to the Rural Medicinal Hub</p>
                    <p className="paragraph">Rural Medicinal Hub is a passion project dedicated to raising awareness about the incredible healing properties of medicinal plants found in rural areas. Our mission is to connect individuals with the wisdom of traditional herbal remedies and promote the sustainable use of local flora for better health and well-being.</p>
                </div>   
            </div>
            <div className = "purpose">
                    <p className="subheading">Our Purpose</p>
                    <div className = "div">
                        <div>
                            <div className="one">1</div>
                            <p className="paragraph">Rural Medicinal Hub was founded with the belief that nature has provided us with a vast pharmacy of healing plants.</p>
                        </div>

                        <div id = "middiv">
                            <div className="two">2</div>
                            <p className="paragraph"> We aim to shed light on the medicinal plants that grow abundantly in rural areas, often overlooked by modern medicine.</p> 
                        </div>

                        <div>
                            <div className="three">3</div>
                            <p className="paragraph">By sharing knowledge and fostering an appreciation for these natural remedies, we hope to empower individuals to take charge of their own health.</p>
                         </div>
                    </div>
            </div>
           
            {/* <div id = "imagesdiv">
                <div className="image1"></div>
                <div className="image2"></div>
                <div className="image3"></div>
                <div className="image4"></div>
            </div> */}


            <div id="purpose2">
                <div id = "lefttwobox">
                    <div className = "box1">
                        <div className = "picture"></div>
                        <div className="text">
                            <p className="subheading">Why Rural Herbology?</p>
                            <p className="paragraph">Rural Medicinal HUb was born out of a deep love for nature and a desire to revive ancient healing traditions. With a focus on rural areas, we aim to preserve the local wisdom passed down through generations, while also highlighting the importance of sustainable practices and ecological preservation.</p> 
                        </div>
                    </div>  

                    <div className = "box1">
                        <div className = "greenleaf"></div> 
                        <div className="text">
                            <p className="subheading">Our Approach</p>
                            <p className="paragraph">As a solo endeavor, Rural Medicinal Hub is driven by a passionate individual committed to exploring, researching, and sharing the knowledge of rural medicinal plants. Through extensive research, personal experiences, and collaborations with local experts, we strive to provide reliable and accurate information about the identification, properties, and traditional uses of various plants.</p>
                        </div>
                    </div>
                </div>

                <div id = "singlebox">
                    <div className = "box">
                        <div className = "nalleruimage"></div>    
                        <div>
                            <p className="subheading">Join the Community</p>
                            <p className="paragraph">We invite you to become a part of the Rural Medicinal Hub community and embark on a journey of discovering the hidden treasures of rural medicinal plants. By joining our newsletter, you'll receive regular updates on new plant profiles, herbal remedies, educational resources, and community initiatives. Together, we can learn, share, and grow in our understanding and appreciation of nature's remedies.</p>  
                        </div> 
                    </div> 
                </div>
            </div>


            <div className = "contact">
                <div className="text">
                    <p className="subheading">Contact Us</p>
                    <p className="paragraph">Your feedback and inquiries are essential to us. If you have any questions, suggestions, or would like to share your own experiences with rural medicinal plants, please feel free to reach out. You can contact us at [email protected], and we will do our best to respond promptly.</p>
                </div>
             </div> 
             <h3>Thank you for joining us on this exciting exploration of rural Medicinal Hub!</h3>   
          




             <div id = "footerpart">
                <div id = "homepart1">
                    <h2 id = "heading3">Home</h2>
                    <p>About</p>
                    <p>Collections</p>
                    <p>Plant resources</p>
                    <p>Services</p>
                </div>
                <div id = "Contact">
                    <h2>Contact us</h2>
                    <div id = "emailaddress">
                         <h3>Email Adress :  </h3>
                         <p>mgswappna1911@gmail.com</p>
                    </div>
                    <div id = "mobileNumber">
                        <h3>Mobile number : </h3>
                        <p>9177939170</p>
                    </div>
                    <div id = "address">
                        <h3>Adress : </h3>
                        <p>2-20/Jeedimakulapalli,gangavaram<br/>Chittor,AP</p>
                    </div>
                </div>
                <div id = "socialmedialinks1">
                    <h2 id = "socialmedia1">Social media</h2>
                    <div id = "facebook1">
                        <div id = "facebookimage1"></div>
                        <h3 id = "facebooklink1">Facebook</h3>
                    </div>
                    <div id = "twitter1">
                        <div id = "twitterimage1"></div>
                        <h3 id = "twitterlink1">Twitter</h3>
                    </div>
                    <div id = "instagram1">
                        <div   id = "instagramimage1"></div>
                        <h3 id = "instagramlink1">Intsagram</h3>
                    </div>
                    <div id = "linkedin1">
                        <div id = "linkedinimage1"></div>
                        <h3 id = "linkedinlink1">linkedin</h3>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default About;