import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

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
      _id: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      profPicture: '',
      isLoggedIn: false
    }
    this.inputHandler = this.inputHandler.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount () {
    console.log(localStorage.token)
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  inputHandler (e) {
    this.setState({
      [e.target.className]: e.target.value
    })
  }

  handleLogout () {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleSignup (e) {
    e.preventDefault()
    console.log('submit clicked')
    axios.post('http://localhost:4000/user/signup', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      profPicture: this.state.profPicture
    })
      .then(response => {
        localStorage.token = response.data.token
        this.setState({ isLoggedIn: true })
      })
      .catch(err => console.log(err))
  }

  handleLogin (e) {
    e.preventDefault()
    console.log(this.state.email, this.state.password)
    axios.post('http://localhost:4000/user/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log('login firing')
        localStorage.token = response.data.token
        this.setState({isLoggedIn: true})
        console.log(this.state.isLoggedIn)
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div className='AppContainer'>
        <header>
          <Header />
        </header>
        <nav>
          <SideNav isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout} />
        </nav>
        <main>
          <Switch>
            <Route
              path='/user/login'
              render={(props) => {
                return (
                  <LoginForm
                    {...this.props}
                    handleLogin={this.handleLogin}
                    inputHandler={this.inputHandler}
                  />
                )
              }}
            />
            <Route
              path='/user/signup'
              render={(props) => {
                return (
                  <SignUpForm
                    {...this.props}
                    handleSignup={this.handleSignup}
                    inputHandler={this.inputHandler}
                  />
                )
              }}
            />
            <Route
              path='/memory/new'
              render={(props) => {
                return (
                  <MemoryForm
                    {...this.props}
                    inputHandler={this.inputHandler}
                  />
                )
              }}
            />
            <Route
              path='/user/search'
              component={SearchForm}
            />
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
