import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import app from './app/reducers'

export default history =>
  combineReducers({
    router: connectRouter(history),
    app
  })
