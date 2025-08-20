import React, { useState } from 'react'

function Skills() {
    const [skill, setskill] = useState([]);
    const handlSkills=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setskill([...skill,event.target.value])
        }
        else{
            setskill([...skill.filter((item)=>item!=event.target.value)])
        }

    }
    return (
        <div>
            <h3>select your skills</h3>
            <input onChange={handlSkills} type="checkbox" id='php' value="php" />
            <label htmlFor="php">php</label>
            <br />
            <br />
            <input onChange={handlSkills} type="checkbox" id='java' value="java" />
            <label htmlFor="java">java</label>
            <br />
            <br />
            <input onChange={handlSkills} type="checkbox" id='MERN' value="MERN" />
            <label htmlFor="MERN">MERN</label>
            <h1>{skill.toString()}</h1>
        </div>
    )
}

export default Skills
