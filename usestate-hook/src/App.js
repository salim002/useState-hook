import './App.css';
import {useState} from "react";


function App() {
  const [user, setUser] = useState([1, 2, 3]);
  return (
    <div className="App"> 
      Home Page
      {user.map((item, index)=>{
        return <div key={index}>{item}</div>;
      })}
      <div>
        <button onClick={()=>setUser([...user, 6])} >Change Value</button>
      </div>
    </div>

  );
} 

export default App;
