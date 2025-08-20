import React from 'react'
import { useState } from 'react';

function Radio() {
    const[gender,setgender]=useState('');
    const[city,setcity]=useState("")
  return (
    <div>
      <h1>handel radio and dropdown</h1>
      <h4>select Gender</h4>
       <input type="radio" onChange={(event)=>setgender(event.target.value)} name='gender' value={"male"} id='male'/>
      <label htmlFor="male">male</label>
      <input type="radio" onChange={(event)=>setgender(event.target.value)} name='gender' value={"female"} id='femail'/>
      <label htmlFor="femail">femail</label>
      <h2>select gender  : {gender}</h2>
      <br/><br/>
      <h4>select city</h4>
      <select onChange={(event)=>setcity(event.target.value)} defaultValue={"delhi"}>
      <option value="noida">noida</option>
      <option value="delhi">delhi</option>
      <option value="usa">usa</option>
      </select>
      <h2>select city : {city}</h2>
    </div>
  )
}

export default Radio;
