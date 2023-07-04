import React, { useState, useEffect } from "react";
import './CategoriesFrontend.css';

const Categories = () => {
  const [data, setData] = useState([]);
  const getInitialState = () => {
    const value = "";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("test",value);
  };


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3001/data")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  };


  const handleDisplay = () => {
    setDisplayData(true); // Set the state variable to true to display data
  };
  return (
    <div>
      <div id="navbar">
        <div id="logo"></div>
        <p id="home">Home</p>
        <p id="about">About</p>
        <select id="resource" value={value}>
          <option value={"Plant collections"} id="Collections">Plant collections</option>
          <option value={"Plant useful For Heart Health"} className="Heart" onClick={handleDisplay}></option>
          <option value={"Plant useful For Kidney Health"}>Plant useful <br></br>For Kidney Health</option>
          <option value={"Plant useful For Brain and nevous system Health"}>Plant useful For<br></br> Brain and nevous<br></br> system Health</option>
        </select>
        <p id="signup">Signup</p>
      </div>
       
      {/* <div className='database'>
        {
              <div>
                <h1 id = "heading">Welcome to the Plants Hub</h1>
                <div id = "AllPlantsDiv">
                {
                    data?.map(({plantId,plantName,plantImage,plantUse}) =>
                        <div className='Plants'>
                            <div className='padding'>
                            <h3 className='plantName'>{plantName}</h3>
                                <div className="imageDiv">
                                    <img  src={plantImage} alt="" width={"250px"} height={"250px"} />
                                </div>
                                <div className= "Details">{plantUse}</div>
                            </div>
                        </div>)}
                    </div>
              </div>
          }
      </div>



 */}



      <div className="database">
        {handleDisplay && ( // Only display the data if displayData is true
          
          <div>
          <h1 id = "heading">Welcome to the Plants Hub</h1>
          <div id = "AllPlantsDiv">
          {
              data?.map(({plantId,plantName,plantImage,plantUse}) =>
                  <div className='Plants'>
                      <div className='padding'>
                      <h3 className='plantName'>{plantName}</h3>
                          <div className="imageDiv">
                              <img  src={plantImage} alt="" width={"250px"} height={"250px"} />
                          </div>
                          <div className= "Details">{plantUse}</div>
                      </div>
                  </div>)}
              </div>
        </div>
          )}
      </div>






    </div>
  );
};

export default Categories;