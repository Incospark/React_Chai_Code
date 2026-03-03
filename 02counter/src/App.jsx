import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15 ;

  const addValue = () => {
    counter++
    setCounter(counter)
    // console.log("Clicked", counter);
  }

  const removeValue = () => {
    setCounter(counter--)
  }

  return (
    <>
      <h1>Chai Aur React Counter</h1>
      <h2>Counter Value : {counter}</h2>

      <button
        onClick={addValue} // onClick = {addValue()} isliye nahi kiya kyuki button click honne pe hi ye button fn() kaam kare nahi toh addvalue() kiya toh direct fn() chl jayega
      >Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App


