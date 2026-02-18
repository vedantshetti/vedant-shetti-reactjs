import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Vedant shetti' age={18} img="https://plus.unsplash.com/premium_photo-1770246101715-d173eb120dbf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"/>
      <Card user='Rahul shetti' age={21} img="https://images.unsplash.com/photo-1771308457783-044e77fe911b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user='Shubham shetti' age={20} img="https://images.unsplash.com/photo-1771308457783-044e77fe911b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"/>

    </div>
  )
}

export default App