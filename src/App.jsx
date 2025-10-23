import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage'
import Banner from './Components/Banner/Banner'
import Newsletter from './Components/Newsletter/Newsletter'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Newsletter></Newsletter>
    <HomePage></HomePage>
    </>
  )
}

export default App
