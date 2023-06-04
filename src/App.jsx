import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Status from './components/Status/Status'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
        <Header></Header>
        <Status></Status>
    </div>
  )
}

export default App
