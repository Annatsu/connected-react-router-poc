import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
// import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './rootReducer'

const history = createBrowserHistory()

const store = createStore(
  createRootReducer(history),
  compose(applyMiddleware(routerMiddleware(history)))
)

export { store, history }
