import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import SideNav from '../Sidenav/Sidenav'
import MemoryContainer from '../MemoryContainer/MemoryContainer'
import Landing from '../Landing/Landing'
import MemoryDetail from '../MemoryDetail/MemoryDetail'
import MemoryForm from '../MemoryForm/MemoryForm'
import SearchForm from '../SearchForm/SearchForm'
import LoginForm from '../LoginForm/LoginForm'
import SignUpForm from '../SignupForm/SignupForm'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  render () {
    return (
      <div className='AppContainer'>
        <header>
          <Header />
        </header>
        <nav>
          <SideNav />
        </nav>
        <main>
          <Switch>
            <Route
              path='/user/login'
              component={LoginForm}
            />
            <Route
              path='/user/signup'
              component={SignUpForm}
            />
            <Route
              path='/landing'
              component={Landing}
            />
            <Route
              path='/memory/new'
              component={MemoryForm}
            />
            <Route
              path='/user/search'
              component={SearchForm}
            />
            {/* Below is an attempt at using a boolean and conditional to put MemoryContainer and Landing on the same route. Refer to Index for the boolean as a prop */}
            <Route
              path='/'
              render={(props) => {
                // const isLoggedIn = this.state.isLoggedIn
                if (this.state.isLoggedIn) {
                  return <MemoryContainer />
                } else {
                  return <Landing />
                }
              }}
            />
            />
            <Route
              path='/memory/:id'
              component={MemoryDetail}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
