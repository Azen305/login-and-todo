import React ,{useState}from 'react'
import {Link} from 'react-router-dom'



const Signup = ({userList}) => {

    

    const [name,setName]  =  useState("");
    const [pass,setPass]  =  useState("");
    const [email,setEmail]  =  useState("");
    const [phone,setPhone]  =  useState("");

    function onSignUpClick(){
        
        
        userList.push({Name:name,Password:pass,Email:email,Phone:phone});
        console.log(userList);

    }

  return (
    <div className="container">
        <h1>Sign Up</h1>
        <div className="container">
            <label>Name : </label>
            <input type="text" placeholder="Enter your name" value={name} id="name" onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="container">
            <label>Password : </label>
            <input type="password" placeholder="Enter your password" value={pass} id="pass" onChange={(e)=>{setPass(e.target.value)}}/>
        </div>
        <div className="container">
            <label>Email : </label>
            <input type="email" placeholder="Enter your Email" value={email} id="mail" onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="container">
            <label>Number : </label>
            <input type="number" placeholder="Enter your number" value={phone} id="number" onChange={(e)=>{setPhone(e.target.value)}}/>
        </div>
        <div className="container">
            
            <Link to="/login" onClick={()=>onSignUpClick()}>Click</Link>
        </div>
    </div>
  )
}

export default Signup