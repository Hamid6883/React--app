import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <div className="App">
 <Countar></Countar>
   
    </div>
  )
}
function Countar (){
const [count,setCount]=useState(222)
const incresCount = ()=>setCount(count + 1);
const dicrice = ()=>setCount(count - 1);


// const incresCount = ()=>{
//   const newcount = count + 1;
//   setCount(newcount);


  return(
  <div>
<h1>Count :{count}</h1>

  <button onClick={incresCount}>Increase</button>
 <button onClick={dicrice}>Dicrice</button>
  </div>
  )
}


export default App

