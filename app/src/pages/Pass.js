import './App.css';
// import { Route ,Routes } from 'react-router-dom'
// import React, {  useState } from "react";
import  { useState, useEffect } from 'react'
import axios from 'axios'

import Input from '../components/InputBox/Input';
import Button from '../components/Button/Button';
// import AStore from './AStore';
const Pass = ({logo })=> {
  
  const [admins, setAdmin] = useState([])
 
  useEffect( ()=> {
      axios.get('https://appointment-api1.herokuapp.com/admins')
      .then(res => {
       
      setAdmin(...res.data) 
     

      }).catch( err => {
          console.log(err)
      })
  } , [])
  const onClick = async ()=> { 
    

    var name=  document.getElementById("name").value;
    var password=  document.getElementById("password").value;
    
    (name === admins.name && password === admins.password) 
    ?  (window.location.href=`/admin`)  
    : alert("שם משתמש או סיסמה שגויים")  ;
   
}

   
    
  return (

    <div className="App">
      <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
           
       <div className='input-container' >

        <Input id='name'  type="text"  title="name" text="שם משתמש"/>
        <Input id='password'  type="password"  title="password" text="סיסמה"/>
        <Button id="pass" buttonName='כניה' onClick={onClick} />
        </div>
      </body>
      
         
          </div>
  );
}

export default Pass;
