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
                <p id = "resource">Plant collections</p>
                <p id = "signup">Signup</p>
            </div>
            <div className= "background">
                <div id = "firstdiv">
                    <h2>Search Here</h2>
                    <div className = "inputpart">
                        <div className= "searchpart">
                            <input type = "type" placeholder = "Search by Plant image" className= "input"/>
                            <div className= "image"></div>
                        </div>
                        <div className= "outputimage"></div>
                    </div>
                </div>
                <div id = "seconddiv"></div>
            </div>


            <h1>Medicinal Plant Hub</h1>
            <div className= "largecard">
                <div className= "smallcard1">
                    <div className= "card thotakura"></div>
                    <h4>Amaramthus(Thotakura)</h4>
                    <p>atherosclerosis, stomach ulcers, tuberculosis, as well as antiseptic, antifungal, and anti-inflammatory preparations</p>
                </div>
                <div className= "smallcard">
                    <div className= "card kapparillaku"></div>
                    <h4>Ajwain(kapparillaku)</h4>
                    <p> has antifungal and antibacterial properties,Cure Cold And Cough</p>
                </div>
                <div className= "smallcard">
                    <div className= "card medicinal"></div>
                    <h4>Moringa(munagaku)</h4>
                    <p>beneficial against digestive disorders.Treating edema,Preventing rheumatoid arthritis,kidney stones</p>
                </div>
            </div>


            <div className= "largecard">
                <div className= "smallcard1">
                    <div className= "card tridax"></div>
                    <h4>Tridax(Balapaku)</h4>
                    <p>treat bronchial catarrh, diarrhea, dysentery and liver diseases.used to treat typhoid fever, cough, epilepsy, asthma, anemia, colds, inflammation</p>
                </div>
                <div className= "smallcard">
                    <div className= "card aloevera"></div>
                    <h4>Aloe vera(kalabanda)</h4>
                    <p>treat skin injuries (burns, cuts, insect bites, and eczemas) and digestive problems,Lowers Blood Sugar.</p>
                </div>
                <div className= "smallcard">
                    <div className= "card tulasi"></div>
                    <h4>Ocimum tenuiflorum(Tulasi)</h4>
                    <p>Reduces Cold, Cough & Other Respiratory Disorders and Stress & Blood Pressure,has Anti-cancer Properties Useful in Kidney Stones & Gouty Arthritis</p>
                </div>
            </div>


            <div className= "largecard">
                    <div className= "smallcard1">
                    <div className= "card jilledu"></div>
                    <h4>Calotropis(Jilledu)</h4>
                    <p> an antidote for snake bite, sinus fistula, rheumatism, mumps, burn injuries, and body pain.</p>
                </div>
                <div className= "smallcard">
                    <div className= "card usiri"></div>
                    <h4>Phyllanthus acidus(usiri)</h4>
                    <p> inflammatory, rheumatism, bronchitis, asthma, respiratory disorder, hepatic diseases and diabetes</p>
                </div>
                <div className= "smallcard">
                    <div className= "card aswagandha"></div>
                    <h4>Withania somnifera(aswagandha)</h4>
                    <p>It enhances the function of the brain and nervous system and improves the memory</p>
                </div>
            </div>
            <div className= "bottomdiv">
                <h2>The true art of healing lies in unlocking the potential of medicinal plants</h2>
                <p id = "bottomtext">Medicinal plants are invaluable natural resources with profound health benefits. They provide holistic remedies and traditional treatments,<br></br> reducing the reliance on synthetic drugs and their potential side effects. With their bioactive compounds, these plants promote disease prevention and overall well-being,<br></br> while minimizing the occurrence of adverse reactions. Incorporating medicinal plants into healthcare practices preserves <br></br>cultural heritage, promotes sustainability, and supports biodiversity conservation efforts.</p>
            </div>




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
export default PlantResource;


        