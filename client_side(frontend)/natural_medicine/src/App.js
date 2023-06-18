import React from 'react';
import './App.css';
import Home from './Components/Home';<br></br>
// import Signup from './Components/Signup';<br></br>
// import Login from './Components/Login';<br></br>
// import Forgot from './Components/Forgot';<br></br>
// import About from './Components/About';<br></br>
import PlantResource from './Components/PlantResouce';


function App() {
  return (
    <div className="App">
      <Home/><br></br>
      {/* <Signup/><br></br>
      <Login/><br></br>
      .<Forgot/><br></br> */}
      {/* <About/> */}

      <PlantResource/>
    </div>
  );
}

export default App;
