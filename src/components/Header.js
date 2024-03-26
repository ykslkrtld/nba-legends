const Header = ({ text, onSearchChange }) => {
  return (
    <div className="Header">
      <h1>{text}</h1>
      <input 
        type="text" 
        placeholder="Search for a legend..." 
        onChange={onSearchChange} 
      />
    </div>
  );
};

export default Header;



// import React, { useState } from 'react';
// import { data } from '../helper/data';
// import NbaLogo from "../assets/nba-logo.png";
// import "../App.css";

// const Header = ({ text }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredPlayers, setFilteredPlayers] = useState([]);

//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);

//     const filtered = data.filter(player =>
//       player.name.toLowerCase().includes(value)
//     );

//     setFilteredPlayers(filtered);
//   };

//   return (
//     <div className="Header">
//       <img src={NbaLogo} alt="NBA Logo" />
//       <h1>{text}</h1>
//       <input 
//         type="search" 
//         placeholder='Search Player...'
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <div>
//         {filteredPlayers.map((player, index) => (
//           <div className='container'>
//           <div className='card' key={index}>
//             <img className="card-img" src={player.img} alt={player.name}/>
//             <p>{player.name}</p>
//           </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Header;



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