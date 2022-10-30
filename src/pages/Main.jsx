import { render } from '@testing-library/react';
import {React,useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useCookies } from 'react-cookie';

function Main() {

  const[IsLogin,setIsLogin]=useState('false');
  const navigate = useNavigate();
  console.log('IsLogin: '+IsLogin);

  
  if(IsLogin===false){
    return (
      
      <div>
      <h1>Main Page</h1>
      <button onClick={()=>{
       alert('로그아웃....');
       
      }}>로그아웃</button>

        </div>

    );
  }else{
    return(
      <div>
      <h1>Main Page</h1>
        <button onClick={()=>{
          navigate('/login');
        }}>Login</button>
      </div>
    );
  }
    
  
    
  
}

export default Main;