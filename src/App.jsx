import { useState } from 'react'
import React from 'react'
import './App.css'
import Header from './components/Header'
import ImageCard from './components/ImageCard'
import Icon from './components/Icon'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Dark from './components/Dark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    {/* <Header/> */}
    <ImageCard/>
    <Icon/>
    <Card/>
    <Dark/>
    </>
  )
}

export default App
