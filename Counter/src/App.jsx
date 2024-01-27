import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)

  // let counter = 10;

  const addValue = ()=>{
    console.log("clicked" , counter);
    // counter = counter + 1;
    setCounter(counter+1);
  }

  const subValue =()=>{
   setCounter(counter-1)
    
  }

  return (
    <>
      <h2>Chai aur code!</h2>
      <h2>Counter : {counter}</h2>


      <button
      onClick={addValue}
      >Add Value {counter}</button><br /><br />
      <button
      onClick={subValue}
      >Sub Value {counter}</button>
      <p>Footer: {counter}</p>

    </>
  )
}

export default App
