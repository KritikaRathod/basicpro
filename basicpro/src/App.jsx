import React from 'react'
import Radio from './radio'
import Map from './Map'

function App() {
  const useData = [
    { name: "kritika", age: "20", id: 1 },
    { name: "jaya", age: "22", id: 2 }
  ]

  return (
    <div>
      <h1>reuse component in loop</h1>
      {useData.map((user) => (
        <Map key={user.id} user={user} />
      ))}
    </div>
  )
}

export default App
