// Header.js
import NbaLogo from "../assets/nba-logo.png";
import "../App.css";
import { data } from '../helper/data';

const Header = ({ text, setSearchLegend, setFilteredData }) => {
  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchLegend(searchValue);

    const filtered = data.filter((legend) =>
      legend.name.toLowerCase().includes(searchValue)
    );

    setFilteredData(filtered);
  };

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