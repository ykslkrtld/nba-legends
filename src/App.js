import React, { useState } from 'react';
import './App.css';
import { data } from './helper/data'; 
import CardContainer from './components/CardContainer';
import Header from './components/Header';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = data.filter(legend =>
      legend.name.toLowerCase().includes(searchValue)
    );

    setFilteredData(filtered);
  };

  return (
    <div className="App">
      <Header text="NBA Legends" onSearchChange={handleSearchChange}/>
      <CardContainer data={filteredData} />
    </div>
  );
}

export default App;




// import './App.css';
// import { data } from './helper/data'; 
// import CardContainer from './components/CardContainer';
// import Header from './components/Header';

// function App() {
//   return (
//     <div className="App">
//       <Header text= "NBA Legends"/>
//       <CardContainer data={data} />
//     </div>
//   );
// }

// export default App;
