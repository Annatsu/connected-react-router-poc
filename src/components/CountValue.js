import React from 'react'
import { connect } from 'react-redux'

const CountValue = ({ value }) => {
  console.log('CountValue is rendering')

  return <div>{value}</div>
}

const mapStateToProps = ({ app }) => ({
  value: app.count
})

export default connect(mapStateToProps)(CountValue)
