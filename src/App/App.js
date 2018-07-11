import React, { Component } from 'react'
import './App.css'
import { Route, Switch, Link } from 'react-router-dom'
import Header from '../Header/Header'
import SideNav from '../SideNav/SideNav'
import MemoryContainer from '../MemoryContainer/MemoryContainer'
import Landing from '../Landing/Landing'
import MemoryDetail from '../MemoryDetail/MemoryDetail'
import MemoryForm from '../MemoryForm/MemoryForm'
import SearchForm from '../SearchForm/SearchForm'

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
