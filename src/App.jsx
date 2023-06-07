import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  function click() {
    setCount(count + 1)
  }
  return (
      <div className="container">
        <div>{ count }</div>
        <button onClick={click}>CLICK</button>
      </div>
  )
}

export default App
