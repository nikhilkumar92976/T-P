import React from 'react'
import { ThemeProvider } from "next-themes";
import {Routes,Route} from 'react-router-dom'
import Dashboard from '../src/pages/notLogged/Dashboard'
import Login from '../src/pages/notLogged/Login'
import Singup from '../src/pages/notLogged/Signup'

function App() {
  return (
    <ThemeProvider attribute="class"  >
    <div className="w-screen h-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/singup" element={<Singup/>}/>
        </Routes>
    </div>
    </ThemeProvider>
  )
}

export default App

