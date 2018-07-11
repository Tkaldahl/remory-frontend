import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App/App'
import registerServiceWorker from './registerServiceWorker'

// App.propTypes = {
//   isLoggedIn: React.PropTypes.bool
// }
// console.log(App.React.PropTypes)

// The code below uses a boolean to show that the user is logged in or not. Works for false, doesn't accept true.
ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'))
registerServiceWorker()
