import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
return (
    <div className="App">
     <Externalusearzx></Externalusearzx>
     <Externalusearzx></Externalusearzx>
     <Externalusearzx></Externalusearzx>
    </div>
  )
}
function Externalusearzx() {
  const[usears,setUsears]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then(data=>setUsears(data))
  },[])
  return(
    <div>
<h2>
  Extearnal usears: {usears.length}
  {
    usears.map(usear => <Data name={usear.name} email ={usear.email}></Data>)
  }
</h2>

    </div>
  )
}
function Data(props) {

 return(
  <div className='containar'>
     <li>Name :{props.name}</li>
     <p>Email: {props.email} </p>
  </div>
 )
}

export default App

