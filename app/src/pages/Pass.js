import './App.css';
// import { Route ,Routes } from 'react-router-dom'
// import React, {  useState } from "react";
import Input from '../components/InputBox/Input';
import Button from '../components/Button/Button';
// import AStore from './AStore';
const Pass = ({logo })=> {
  
  const onClick = async ()=> { 
    // alert(" gfdgdgdg")

    alert( " gfdgdgdg")
    // var name=  document.getElementById("name").value;
    // var password=  document.getElementById("password").value;
    
    // (name === admins.name && password === admins.password) 
    // ?  (window.location.href=`/admin`)  
    // : alert("שם משתמש או סיסמה שגויים")  ;
   
}

   
    
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
           
       <div className='input-container' >

        <Input id='name'  type="text"  title="name" text="שם משתמש"/>
        <Input id='password'  type="password"  title="password" text="סיסמה"/>
        <Button id="pass" href="/admin" buttonName='כניה' onClick={onClick} />
        </div>
      </header>
      
         
          </div>
  );
}

export default Pass;
