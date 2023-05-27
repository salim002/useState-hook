import './App.css';
import {useState} from "react";


function App() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(JSON.stringify(input));
  }

  return (

    <div className="App"> 

      <form onSubmit={handleSubmit}>
        <input value={input.name} type="text" placeholder="Enter your name" name="name" id=""
         onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}/>
        <input value={input.email} type="text" placeholder="Enter your email" name="email" id=""
         onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}/>
        <input value={input.password} type="password" placeholder="Enter your password" name="password" id=""
         onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}/>
        <input type="submit" value="Submit" />
      </form>

    </div>

  );
} 

export default App;
