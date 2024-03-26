import NbaLogo from "../assets/nba-logo.png";
import "../App.css"

const Header = ({ text, handleSearchChange }) => {
  return (
    <div className="Header">
      <img src={NbaLogo} alt="logo" />
      <h1>{text}</h1>
      <input 
        type="search" 
        placeholder="Search for a legend..." 
        onChange={handleSearchChange} 
      />
    </div>
  );
};

export default Header;





// import React, { useState } from 'react';
// import { data } from '../helper/data';
// import NbaLogo from "../assets/nba-logo.png"
// import "../App.css"

// const Header = ({text}) => {
//   return (
//     <div className= "Header">
//         <img src={NbaLogo} alt="logo" />
//         <h1>{text}</h1>
//         <input type="search" placeholder='Search Player...'/>
//     </div>
//   )
// }

// export default Header