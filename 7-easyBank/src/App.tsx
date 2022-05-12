import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

function App() {
  return (
    <div className="home">
      <Navigation></Navigation>
      <Hero></Hero>
    </div>
  )
}

export default App
