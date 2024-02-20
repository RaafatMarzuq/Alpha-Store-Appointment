import './Pass.css';
// import { Route ,Routes } from 'react-router-dom'
// import React, {  useState } from "react";
import  { useState, useEffect } from 'react'
import axios from 'axios'

import Input from '../../components/InputBox/Input';
import Button from '../../components/Button/Button';
// import AStore from './AStore';
const Pass = ({logo })=> {
  
  const [admins, setAdmin] = useState([])
 
  useEffect( ()=> {
      axios.get('https://appointment-api1-0ec8b494fd57.herokuapp.com/admins')
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

   
      <body className="App-header"> 
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
           
       <div className='input-container2' >
        <Input id='name'  type="text"  title="name" text="שם משתמש"/>
        <Input id='password'  type="password"  title="password" text="סיסמה"/>
        <Button id="pass" buttonName='כניסה' onClick={onClick} />
        </div> 
         </div>
      </body>
      
         
        
  );
}

export default Pass;
