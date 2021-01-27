import React, { useState } from 'react'

const LoginForm=({Login,error})=> {

    const[details,setdetails]=useState({name:"",email:"",password:""})

    const submitHandler=(e)=>{
               e.preventDefault();
               Login(details);
    }
    return (
      
        <div className="form-container">
        <form onSubmit={submitHandler}>
            <h2>Login Form</h2>
            {(error!="")?(<div>{error}</div>):""}
            <div className="form-input">
         <label for="name"> Name: </label>
        <input type="name" id="name" name="name" required="true" onChange={e=>setdetails({...details,name:e.target.value})} value={details.name}/><br></br>
        </div>
        <div className="form-input">
        <label for="email"> Email:  </label>
        <input type="email" id="email" name="email" onChange={e=>setdetails({...details,email:e.target.value})} value={details.email}/><br></br>
        </div>
        <div className="form-input">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" onChange={e=>setdetails({...details,password:e.target.value})} value={details.password}/>
        
        </div>
        <div className="form-submit">
        <button type="submit" value="LOGIN" >Login</button>
        </div>
      </form>
      </div>
    
    )
}

export default LoginForm
