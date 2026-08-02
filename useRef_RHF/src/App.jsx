import React from 'react'
import Timer from './Timer'
import Login from "./Login"
import Form from './Form'
import RHF from './components/RHF'
const App = () => {
  return (
    <div className='h-screen  p-4 bg-gray-200'>
      <h1 className='mb-8 '>This is Form</h1>
    {/* <Form /> */}
    <RHF />
    </div>
  )
}

export default App
