import React from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Login from './Login';

function Main() {

  const navigate = useNavigate();
    return (
      
      <div>
      <h1>Main Page</h1>
      <button onClick={()=>{
        navigate('/login');
      }}>Login</button>
      </div>
      
    )
  
}

export default Main;