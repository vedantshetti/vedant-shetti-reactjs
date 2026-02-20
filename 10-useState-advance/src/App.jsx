import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState({user:'vedant',age:20});
  const [num, setNum] = useState({user:'vedant',age:20});
   
  function vedant(){
    const vedant = {...count};
    vedant.age=21;
    setCount(vedant);
    console.log(count);
    console.log
    console.log(count.age);
  }
  
  const vedant1 = ()=>{
    setNum(prev=>({...prev,age:21}))

  }

  
  return (
    <div> 
      <div>
        <h1>value of the count is {count.user} and {count.age}</h1>
        <button onClick={vedant}>Increase the count</button>
<br/>
<br/>

    <h1>{num.user} and {num.age}</h1>
    <button onClick={vedant1}>Increase the count</button>
      </div>
      
    </div>
  )
}

export default App