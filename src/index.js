import React from 'react'
import ReactDOM from 'react-dom'

/****************
 
CHANGE THE IMPORT TO SEE THE DIFFERENCE 
WHEN USING <ConnectedRouter />

*****************/

// import { WithConnectedRouter as App } from './App'
import { WithoutConnectedRouter as App } from './App'

ReactDOM.render(<App />, document.getElementById('root'))
