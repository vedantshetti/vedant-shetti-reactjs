import React from 'react'

const App = () => {


  function btnClicked() {
    console.log("btnclicked");

  }

  function mousenter() {
    console.log("BTN ENTERED");

  }
  return (
    <div>
      <h1>hi vedant</h1>
      <button onClick={function () {
        console.log("hello guys")
      }} onMouseEnter={mousenter}>muje click karo </button>

      <input onChange={function (elem) {
        console.log(elem.target.value)
      }} type="text" placeholder='type' />

      <div className='bg-amber-200 px-20 py-10'>



        <img onMouseMove={function (elem) {
          console.log(elem.pageX, elem.pageY);

        }} src="https://images.unsplash.com/photo-1761839258803-21515f43190c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />


        <div onWheel={function (elem) {
          console.log(elem);

        }} className='w-full h-full bg-amber-200'>
          <div className='p-100'>page1</div>
          <div className='p-100'>page2</div>
          <div className='p-100'>page3</div>
          <div className='p-100'>page4</div>
          <div className='p-100'>page5</div>
          <div className='p-100'>page6</div>
          <div>page7</div>
          <div>page8</div>
          <div>page9</div>
          <div>page10</div>
          
        </div>



      </div>






    </div>
  )
}

export default App