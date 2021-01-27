import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'

function App() {
  const adminUser={
    email:"ankit012@admin",
    password:"Ankit@123"
  }

  const [user,setUser]=useState({name:'',email:""})
  const [error,setError]=useState("")

  const Login=(details)=>{
    // console.log(details)
     if(details.email==adminUser.email && details.password==adminUser.password){
       console.log("Loggd In Successfully");
       setUser({
         name:details.name,
         email:details.email
       })
     }
     else{
       console.log("OOPS, details not matching");
       setError("OOPS, details not matching")
     }
  }

  const Logout=()=>{
    setUser({
      name:"",
      email:""
    })
    //console.log("logout")
  }

  return(
    <div className="App">
    {(user.email!="") ? (
      <div>
       <h1>Welcome, <span>{user.name}</span></h1>
       <button onClick={Logout}>Logout</button>
       </div>):
       (<LoginForm Login={Login} error={error}/>)
}
    </div>
  );
}

export default App;
