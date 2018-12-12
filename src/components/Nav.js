import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  console.log('Nav is rendering')

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Nav
