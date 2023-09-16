import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div className='flex gap-3'>
        <Courses></Courses>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App
