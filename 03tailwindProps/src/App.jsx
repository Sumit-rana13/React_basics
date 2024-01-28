import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'
function App() {
  
  let myObj={
    name:"Sumit",
    age:23
  }

  return (
    <>
      <h1 className='bg-red-400 rounded-md'>Tailwind Test</h1>
      <Card username="chaiAurCode" button="clicke Me !"/>
      <Card username="coffeAurCode"/>
    </>
  )
}

export default App
