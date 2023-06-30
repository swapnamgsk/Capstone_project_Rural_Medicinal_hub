// import React from 'react';
import './PlantResource.css';
import {useState,useEffect} from 'react';



const PlantResource = () =>{
    const [data,setData] = useState([]);
    const [inputValue, setInputValue] = useState('');
  

  useEffect(()=>{
        fetchData();
    },[])
    const fetchData = () =>{
        fetch("http://localhost:5500/data").then((res) =>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
    }



    const searchPlant = () =>{
        fetch(`http://localhost:5500/search/${inputValue}`).then((res) =>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
    }
    
    const handleInputChange = (event) =>{
        setInputValue(event.target.value);

    }
   


    return(
        <div>
            <div id = "navbar">
                <div id = "logo"></div>
                <p id = "home">Home</p>
                <p id = "about">About</p>
                <p id = "resource">Plant collections</p>
                <p id = "signup">Signup</p>
            </div>

            <div className='searchPart'>
                <h2 className='phytohead'>Adopt Healthy lifestyle By <span>PhytoMedicals</span></h2>
                <input type = "text" placeholder= "Search Here" className= "name" onChange ={handleInputChange} value = {inputValue} />
                <button className= "Searchbutton" onClick ={searchPlant}>Click</button>
                <h4 onClick = {fetchData}>Clear search</h4>
            </div>
            <div className='DisplayFlex'>
                <div className='plant'></div>
                <div className='plant'></div>
                <div className='plant'></div>
                <div className='plant'></div>
                <div className='plant'></div>
            </div>

            
            <div className='database'>{
                <div>
                <h1 id = "heading">Welcome to the Plants Hub</h1>
                <div id = "AllPlantsDiv">
                {
                    data?.map(({Plant_id,Plant_Name,Plant_image,Plant_Details,Plant_video}) =>
                    (Plant_Name !== "Great Burdock") ?
                        <div className='Plants'>
                            <div className='padding'>
                            <h3 className='plantName'>{Plant_Name}</h3>
                                <div className="imageDiv">
                                    <img  src={Plant_image} alt="" width={"250px"} height={"250px"} />
                                </div>
                                <div className= "Details">{Plant_Details}</div>
                            </div>
                        </div> : null)}
                    </div>
                
            </div>
            }

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


 
