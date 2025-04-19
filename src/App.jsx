import React from 'react'
import { ThemeProvider } from "next-themes";
import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/notLogged/LandingPage'
import Login from '../src/pages/notLogged/Login'
import Singup from '../src/pages/notLogged/Signup'
import Home from './pages/logged/Dashboard'
import CodeEditor from "./pages/logged/editor/comp/CodeEditor";
import Contact from "../src/pages/notLogged/Contact"
import About from "../src/pages/notLogged/About"
import LandingPage from './pages/notLogged/LandingPage';

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
        <LandingPage/>
    </div>
  )
}

export default App

