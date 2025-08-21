import React from 'react'

const Map = ({ user }) => {
  return (
    <div>
      <h3>name: {user.name}</h3>
      <h3>age: {user.age}</h3>
    </div>
  )
}

export default Map
