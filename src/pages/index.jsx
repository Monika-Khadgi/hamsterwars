import React from "react";
import './index.css';

import hampster_home_single from '../images/cute_hamster_many_top.png';
import hampster_home_many from '../images/cute_hamster_many.png';

// import {Navbar} from "../Navbar"
// import {Navbar} from '../components/Navbar';
var find = require('list-files');


const MainPage =() => {
  return (
    <div className="index-wrapper">
    <div className="index-img">
     
     <div className='section'><img className='hampster_home_single' src={hampster_home_single} /></div>
     <div className='text-box'><h1>Welcome to Hamsterwar</h1>
     <p>This is a place for the hamster lovers. There are two photographs of adorable hamsters
       side by side and viewer can  vote for the one they think is the cutest. The "Battles" are randomly
       selected. </p> </div>
     <div className='text-box'><h1>May the cutest hamster win!!</h1> 
     <p>Click to compitetion for the BATTLE.</p></div>
     <div className='section'><img className='hampster_home_many' src={hampster_home_many} /></div>
     </div>
     

    </div>
  );
};

export default MainPage;
