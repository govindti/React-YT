import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-100 rounded-xl mb-5 flex-shrink'>Hello Tailwind</h1>
    <Card username = "Govind Tiwari" btnText = "Touch me "/>
    <Card username = "Tiwari Jee" btnText = "Visit me "/>
    
    </>
  )
}

export default App
