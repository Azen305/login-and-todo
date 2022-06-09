import React ,{useState} from 'react';
import {useNavigate} from 'react-router-dom';


const Login = ({userList}) => {
const navigate = useNavigate()
    const [name,setName]  =  useState("");
    const [pass,setPass]  =  useState("");

    function onLogInValidation(){
        
        for(let i of userList)
        {
            if(i.Name===name && i.Password===pass)
            {
                console.log("ok");
                navigate("/todo");

            }
            else{
                console.log("not ok");
                navigate("/notuser");
            }
        }
        
    }

  return (
    <div>
        <div className="container">
            <label>Name : </label>
            <input type="text" placeholder="Enter your name" value={name} id="name" onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="container">
            <label>Password : </label>
            <input type="password" placeholder="Enter your password" value={pass} id="pass" onChange={(e)=>{setPass(e.target.value)}}/>
        </div>
        <div className="container">
        <button onClick={()=>onLogInValidation()}>click</button>
        </div>
    </div>
  )
}

export default Login