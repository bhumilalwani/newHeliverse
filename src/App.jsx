import { useState } from 'react'
import Nav from './components/Nav.jsx'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'

function App() {


  return (
    <div className='overflow-x-hidden'>
    <Nav/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
    </Routes>
    </div>
  )
}

export default App


