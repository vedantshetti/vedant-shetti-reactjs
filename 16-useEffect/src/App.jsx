import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2,setNum2] = useState(100)

  useEffect(function(){
    console.log('use effect is running in side by side ');
    
  },[num])
  return ( 
    <div>
      <h1> value od num 1 is {num}</h1>
      <h1>value of num 2 is {num2}</h1>
      <button onMouseEnter={()=>{
        setNum(num+1)
      }}

      onMouseLeave={()=>{
        setNum2(num2+10)
      }}



      
      
      >Hover</button>
    </div>
  )
}

export default App