// import logo from './logo.svg';
import './App.css';
import {useState} from "react";

// let value = 10;


function App() {
  const [value, setvalue] = useState(10);
  return (
    <div className="App"> 
      Home Page {value}
      <div>
        <button onClick={()=>{
          if(value<15){
            setvalue(value+1);
          }
          else{
            setvalue(10);
          }
          // console.log(value);
        }}>Change Value</button>
      </div>
    
    </div>

  );
} 

export default App;
