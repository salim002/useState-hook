import './App.css';
import {useState} from "react";


function App() {
  const [user, setUser] = useState([1, 2, 3]);
  return (
    <div className="App"> 
      Home Page
      {user.map((item)=>{
        return <div>{item}</div>;
      })}
    
    </div>

  );
} 

export default App;
