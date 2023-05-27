// import logo from './logo.svg';
import './App.css';
import {useState} from "react";

// let value = 10;


function App() {
  const [value, setvalue] = useState(10);
  const changeValue = ()=>{
    if(value<15){
      setvalue(value+1);
    }
    else{
      setvalue(10);
    }
  }
  return (
    <div className="App"> 
      Home Page {value}
      <div>
        <button onClick={()=>setvalue((state)=>state+1)} >Change Value</button>
      </div>
    
    </div>

  );
} 

export default App;
