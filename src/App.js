import './App.css';
import { data } from './helper/data'; 
import CardContainer from './components/CardContainer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header text= "NBA Legends"/>
      <CardContainer data={data} />
    </div>
  );
}

export default App;
