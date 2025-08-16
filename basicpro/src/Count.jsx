import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
      <h1>counting {count}</h1>
    </div>
  )
}

export default Count
