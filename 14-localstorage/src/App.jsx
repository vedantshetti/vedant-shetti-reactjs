import React from 'react'

const App = () => {

 

  localStorage.removeItem('user');
  localStorage.clear();
  

  return (
    <div>App</div>
  )
}

export default App