import React, {useState} from "react";
import {Link} from "react-router-dom";


const Signup = () => {
  const[name,setname]=useState();
  const[email,setemail]=useState();
  const[password,setpassword]=useState();
    
  
  const onSubmit= async(e)=>{
    e.preventDefault()
    try{
      const sendSign = await fetch(`http://localhost:3000/user/signup`,{
        method:"POST",
        headers:{
          'content-Type':"application/json"
        },
        body:JSON.stringify({name,email,password})
      })
      const response = await sendSign.json();
      if(sendSign.ok){
        alert("Registration successful");
      }else{
        alert("Registration failed");
      }
    }catch(error){
      console.log(error);

    }
  }
  return (
    <div>
      <div>
      <h1>signup</h1>
      <div>
        <input type ="text" name="name" id="" placeholder="name" onChange={(e)=>setname(e.target.value)}/>
        <input type ="text" name="email" id="" placeholder="email" onChange={(e)=>setemail(e.target.value)}/>
        <input type ="text" name="password" id="" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick = {onSubmit}>Submit</button>

      </div> 
      <div>
        <p>already a member?<Link to="/">Login</Link></p>
      </div>
    </div>
    </div>
  )
};
export default Signup;