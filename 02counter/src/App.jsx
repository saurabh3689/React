import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


  const [counter,setCounter] = useState(15)

 // let counter = 5

  const addValue = () => {
    //counter += 1
    console.log("Added value", Math.random())
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)}
  

  return (
   <> 
    <h1>chai or tea</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick = {addValue}
    
    >Add value</button>
    <br />
    <button
     onClick = {removeValue}  
    >Remove value</button>

   
   </>
  )
}

export default App
