import React from 'react'
import { useRef } from 'react'
function App() {
    const refff=useRef();
    const handel=()=>{

        refff.current.focus();
        refff.current.style.color="red"
        refff.current.value="123"
    }
    const togglehand=()=>{
       
        if( refff.current.style.display!="none"){
             refff.current.style.display="none"
        }else{
             refff.current.style.display="inline"
        }
    }
  return (
    <div>
      <h1>useRef</h1>
      <button onClick={togglehand}>Toggel</button>
      <input type="text"placeholder='enter your name' ref={refff}/>
      <button onClick={handel}>focus</button>
    </div>
  )
}

export default App
