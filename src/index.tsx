import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import '../src/index'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store/store'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

// loads general styles for use in all components
import './common/generalStyles.scss'
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
