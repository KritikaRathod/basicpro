
import { useState } from 'react'

function Count() {
    const [display, setdisplay] = useState(false)
  return (
    <div>
      <h1>{
        display?"hello":"by"
      }</h1>
      <button onClick={()=>setdisplay(!display)}>toggel</button>
    </div>
  )
}

export default Count
