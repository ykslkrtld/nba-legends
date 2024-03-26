import React, { useState } from "react";
import { data } from "./helper/data";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [searchLegend, setSearchLegend] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchLegend(searchValue);

    const filtered = data.filter((legend) =>
      legend.name.toLowerCase().includes(searchValue)
    );

    setFilteredData(filtered);
  };

  return (
    <div className="App">
      <Header text="NBA Legends" onSearchChange={handleSearchChange} />
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
