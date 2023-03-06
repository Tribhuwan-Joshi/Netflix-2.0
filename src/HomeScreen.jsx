import React from 'react';
import Nav from "./Nav"
import "./HomeScreen.css"
function HomeScreen() {
  return (
    <div className='homeScreen'>

       <Nav/>
    {/*  <Banner/>
      <Row/> */}
      <div style={{height:'2000px' , width:'500px' , backgroundColor:'gray'}} ></div>
    </div>
  );
}

export default HomeScreen;