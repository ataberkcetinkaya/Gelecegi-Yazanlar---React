import React from 'react'

export default function Counter() {
    const [count, setCount] = React.useState(0);
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
