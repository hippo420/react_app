import { React,useState,useEffect} from 'react';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter, Route,Routes,Switch} from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Layouts/Header/Header';
import Layout from './Layouts/Layout';
import Main from './pages/Main';
import Footer from './Layouts/Footer/Footer';
//const ip = require('./config').serverInfo.ip;
//console.log(ip);

function App() {
  
  
  //const [id,setId]={useState};
  //const [pwd,setPwd]={useState};
  //const [nick,setNick]={useState};

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path= '/main' element={<Main/>} />
      </Routes>
    </BrowserRouter>
    

  
    );

  }

export default App;
