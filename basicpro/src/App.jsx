import React, { useState } from 'react'

function App() {
  const [display, setdisplay] = useState(false)
  return (
    <div>
            <button onClick={()=>setdisplay(!display)}>toggle</button>
      {
        display?<h1>anil sidhu</h1>:null
      }

   
    </div>

  )
}

export default App
