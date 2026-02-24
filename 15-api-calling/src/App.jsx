import React from 'react'



import axios from 'axios';
import { useState } from 'react';
const App = () => {

  const [data, setData] = useState([])

  // async function getdata(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
    
  // }

  const getdata= async()=>{
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    // const data = await response.json();
    // console.log(data);


    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data);






    
  }


  return (
    <div>
      <button onClick={getdata}>Get the data </button>
      <div>
        {data.map(function(elem,idx){
          console.log(elem);
          return <h3 > {elem.author}  {idx}</h3>
          

        })}
      </div>
    </div>
  )
}

export default App