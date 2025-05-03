import { useState } from 'react'
import React from 'react'
import './App.css'
import Header from './components/Header'
import ImageCard from './components/ImageCard'
import Icon from './components/Icon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/> */}
    <ImageCard/>
    <Icon/>
    </>
  )
}

export default App
