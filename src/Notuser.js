import React from 'react';
import {useNavigate} from 'react-router-dom';

const Notuser = () => {
    const navigate = useNavigate()
  return (
      <>
    <h1>You are not a user.</h1>
    <button onClick={()=>navigate("/")}>Signup now</button>
    </>
  )
}

export default Notuser