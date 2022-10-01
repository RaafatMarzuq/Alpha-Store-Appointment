import React from "react";
import './style.css'

const Input = ( {id , type , title, text}) => {
    return (
        <div >
            <label>{text}</label>
            <input className="inputBox" id={id} type={type} title ={title}  required />
            
        </div>
    )
}

export default Input;