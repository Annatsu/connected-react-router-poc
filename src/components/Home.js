import React from 'react'
import IncrementCount from './IncrementCount'

const Home = () => {
  console.log('Home is rendering')

  return (
    <div>
      <h2>Home page</h2>
      <IncrementCount />
    </div>
  )
}

export default Home
