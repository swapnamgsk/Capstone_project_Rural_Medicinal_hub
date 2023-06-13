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
            <div className = "aboutus">
                <div className="text">
                    <p id = "heading">About us</p>
                    <p className="subheading">Welcome to the Rural Medicinal Hub</p>
                    <p>Rural Medicinal Hub is a passion project dedicated to raising awareness about <br></br>the incredible healing properties of medicinal plants found in rural areas. Our mission is to connect<br></br> individuals with the wisdom of traditional herbal remedies and promote the sustainable <br></br>use of local flora for better health and well-being.</p>
                    <p className="subheading">Our Purpose</p>
                    <p>Rural Medicinal Hub was founded with the belief that nature has provided us with<br></br> a vast pharmacy of healing plants. We aim to shed light on the medicinal plants that grow abundantly <br></br>in rural areas, often overlooked by modern medicine. By sharing knowledge and fostering an appreciation for these<br></br> natural remedies, we hope to empower individuals to take charge of their own health.</p>
                    <p className="subheading">Why Rural Herbology?</p>
                    <p>Rural Herbology was born out of a deep love for nature and a desire to revive ancient <br></br>healing traditions. With a focus on rural areas, we aim to preserve the local wisdom passed down through generations,<br></br> while also highlighting the importance of sustainable practices and ecological preservation.</p>
                    
                </div>
                <div className = "boyimage"></div>
            </div>
            <div id = "aboutus">
                <div className = "image"></div>
                <div  className="text">
                    <p className="subheading">Our Approach</p>
                    <p>As a solo endeavor, Rural Herbology is driven by a passionate individual committed to exploring,<br></br> researching, and sharing the knowledge of rural medicinal plants. Through extensive research, personal experiences,<br></br> and collaborations with local experts, we strive to provide reliable and accurate information about the identification, <br></br>properties, and traditional uses of various plants.</p>
                    <p className="subheading">Join the Community</p>
                    <p>We invite you to become a part of the Rural Herbology community and embark on a journey of discovering<br></br> the hidden treasures of rural medicinal plants. By joining our newsletter, you'll receive regular updates on new plant<br></br> profiles, herbal remedies, educational resources, and community initiatives. Together, we can learn, share, and grow in our<br></br> understanding and appreciation of nature's remedies.</p>
                    <p className="subheading">Contact Us</p>
                    <p>Your feedback and inquiries are essential to us. If you have any questions,<br></br> suggestions, or would like to share your own experiences with rural medicinal plants, please feel free to reach out. You can <br></br>contact us at [email protected], and we will do our best to respond promptly.</p>

                    <h3>Thank you for joining us on this exciting exploration of rural herbology!</h3>
                </div>
            </div>
        </div>
    )
}
export default About;