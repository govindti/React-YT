import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    <div className='w-full h-screen duration-1000' style={{backgroundColor: color}}>
      <div className='fixed inset-0 flex items-end justify-center p-0'>
        <div className='flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full 
          test-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 text-white 
          rounded-full test-white shadow-lg' style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full 
          test-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full 
          test-white shadow-lg' style={{backgroundColor: "yellow"}}>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
