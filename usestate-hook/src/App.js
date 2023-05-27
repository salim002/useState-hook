import './App.css';
import {useState} from "react";


function App() {
  // const [user, setUser] = useState([1, 2, 3]);
  const [user, setUser] = useState({
    no: 1,
    name: "Md Salim"
  })
  return (
    <div className="App"> 
      Home Page
      Home page No: {user.no} <br/>
      Name : {user.name}
      <div>
        <button onClick={()=>setUser({...user, no: 2, name: "codewithviju"})} >Change Value</button>
      </div>
    </div>

  );
} 

export default App;
