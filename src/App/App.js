import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import SideNav from '../SideNav/SideNav'
import MemoryContainer from '../MemoryContainer/MemoryContainer'
import Landing from '../Landing/Landing'

class App extends Component {
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
          <Route
            path='/user/:id'
            component={MemoryContainer}
            // Above is the simple way to render a component. If we want to pass in props, use the method below.
            //
            // render={(props) => {
            //   return (
            //     <MemoryContainer
            //       {...props}
            //       whateverProps={(what, ever) => this.someFunction(what, ever)}
            //     />
            //   )
            // }
            // }
          />
          <Route
            path='/landing'
            component={Landing}
          />
        </main>
      </div>
    )
  }
}

export default App
