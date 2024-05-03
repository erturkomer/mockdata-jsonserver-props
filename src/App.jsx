import { useState } from 'react'
import './App.css'
import Background from '../components/background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background/>
    </>
  )
}

export default App
