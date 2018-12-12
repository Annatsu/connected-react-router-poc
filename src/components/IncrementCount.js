import React from 'react'
import { connect } from 'react-redux'
import { incrementCount } from '../redux/app/actions'

const IncrementCount = ({ increment }) => {
  console.log('IncrementCount is rendering')

  return <button onClick={increment}>Increment</button>
}

export default connect(
  null,
  { increment: incrementCount }
)(IncrementCount)
