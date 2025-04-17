import React from 'react'
import { ThemeProvider } from "next-themes";
import {Routes,Route} from 'react-router-dom'
import Dashboard from '../src/pages/notLogged/Dashboard'
import Login from '../src/pages/notLogged/Login'
import Singup from '../src/pages/notLogged/Signup'
import Home from '../src/pages/logged/Home'
import CodeEditor from "../src/pages/editor/comp/CodeEditor";
import Contact from "../src/pages/notLogged/Contact"
import About from "../src/pages/notLogged/About"

function App() {
  return (
    <ThemeProvider attribute="class"  >
    <div className="w-screen h-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/singup" element={<Singup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="codeeditor" element={<CodeEditor/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
    </ThemeProvider>
  )
}

export default App

