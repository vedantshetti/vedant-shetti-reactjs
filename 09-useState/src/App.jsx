import React from 'react'
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(20);
  const [count, setCount] = useState(0);

  function changeNum() {
    setA(a+10)
    
  }


  function vedant(){
    setCount(count+1);
  }

  
  return (
    <div> 
      <h1>value of a is {a}</h1>
      <button onClick={changeNum}>click me</button>




      <div>
        <h1>value of the count is {count}</h1>
        <button onClick={vedant}>Increase the count</button>
      </div>
      
    </div>
  )
}

export default App