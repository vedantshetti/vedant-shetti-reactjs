import React from 'react'

const App = () => {

  const submitHandler =(e)=>{
    e.preventDefault();
    console.log(e.target.value);


    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex flex-col gap-4'>
        <input className='border border-gray-300 rounded-md p-2' type="text" placeholder='enter your name' />

        <button className='bg-blue-500 text-white px-4 py-2 rounded-md' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App