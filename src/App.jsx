import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const prodackteds = [
    {name:"laptop", Price:"25000"},
    {name:'phone', Price :"20000"},
    {name:"whatch" ,Price :"2000"},
    {name:'pc', Price :"200000"}
  ]
  return (
    <div className="App">
      <lode name='vilo'></lode>
     {
  prodackteds.map(prodackted=><Product name={prodackted.name} Price ={prodackted.Price}></Product>)
     }

      {/* <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product ></Product>
     */}
     
    </div>
  )
}
function Product (props){
  return(
    <div className="prodact">
      <h3>Name : {props.name}</h3>
      <p>Price :{props.Price}</p>
    </div>
  )
}


export default App

