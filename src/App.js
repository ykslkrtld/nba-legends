import React, { useState } from "react";
import { data } from "./helper/data";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [searchLegend, setSearchLegend] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className="App">
      <Header 
        text="NBA Legends" 
        setSearchLegend={setSearchLegend} 
        setFilteredData={setFilteredData} 
      />
      <CardContainer filteredData={filteredData} />
    </div>
  );
}

export default App;
