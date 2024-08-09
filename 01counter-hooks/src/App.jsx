import { useState } from 'react'
import './App.css'
function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    setCounter(counter +1)
    console.log("Value Added")
  
  }
  
  const removeValue = () =>{
    console.log("Value removed")
    if (counter <= 0) {
      setCounter(counter)
    }
    else{
      setCounter(counter -1)
    }
    
  }

  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter App</h2>
      <button onClick={addValue}>+</button>
      <br></br>
      <button onClick={removeValue}>-</button>
      <h2>Counter Value is: {counter}</h2>
    </>
  )
}

export default App
