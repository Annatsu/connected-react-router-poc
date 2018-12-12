import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { store, history } from './redux/store'
import { Nav, Home, About } from './components'

const WithConnectedRouter = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
)

const WithoutConnectedRouter = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export { WithConnectedRouter, WithoutConnectedRouter }
