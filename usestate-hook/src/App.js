import './App.css';
import {useState} from "react";


function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App"> 
      <div>{counter}</div>
      <div><button onClick={()=>setCounter(counter+1)}> + </button></div>
      <div><button onClick={()=>setCounter(counter-1)}> - </button></div>
      <div><button onClick={()=>setCounter(0)}>Reset</button></div>

    </div>

  );
} 

export default App;
