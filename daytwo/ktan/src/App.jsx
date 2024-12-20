import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './COMPONENTS/Login'
import Signup from './COMPONENTS/Signup'
import Navbar from './COMPONENTS/Navbar'
import { Route, Routes } from  'react-router-dom'
import StateBasics from './COMPONENTS/StateBasics'
import UpDown from './COMPONENTS/UpDown'
import Naming from './COMPONENTS/Naming'
import Api from './COMPONENTS/Api'
import Pokemon from './COMPONENTS/Pokemon'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/StateBasics" element={<StateBasics />} />
        <Route path="/UpDown" element={<UpDown />} />
        <Route path="/Naming" element={<Naming />} />
        <Route path="/Api" element={<Api />} />
        <Route path="/P" element={<Pokemon /> } />
      </Routes>
      
   
      
    </>
  )
}

export default App
