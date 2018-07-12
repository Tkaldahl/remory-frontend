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
      isLoggedIn: false,
      loggedInUser: '',
      searchedUser: ''
    }
    this.inputHandler = this.inputHandler.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClick = this.handleClick.bind(this)
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

  // stateChange = (e) => {
  //   // making React state respond to each user form change, resulting in "single source of truth"
  //   console.log('Submit form: stateChange()')
  //   const keyValue = e.target.value
  //   const keyName = e.target.name
  //   this.setState({ notification:'...done with that quote yet?'})
  //   this.setState({
  //         [keyName]: keyValue
  //       })

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

  // This function parses the payload so that we can save the logged in user's id into state
  jwtDecode (t) {
    let token = {}
    token.raw = t
    // token.header = JSON.parse(window.atob(t.split('.')[0]))
    token.payload = JSON.parse(window.atob(t.split('.')[1]))
    // console.log(token.payload.id)
    return (token.payload.id)
  }

  handleLogin (e) {
    e.preventDefault()
    axios.post('http://localhost:4000/user/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        localStorage.token = response.data.token
        var loggedInUser = this.jwtDecode(localStorage.token)
        this.setState({
          isLoggedIn: true,
          loggedInUser: loggedInUser
        })
        console.log(this.state.loggedInUser)
      })
      .catch(err => console.log(err))
  }

  handleSearch (e) {
    console.log('Sending a search request')
    e.preventDefault()
    axios.post('http://localhost:4000/user/search', {
      email: this.state.email
    }).then((res) => {
      console.log(res.data._id)
      this.setState = ({
        searchedUser: res.data._id
      })
    })
  }
  handleClick = () => {
    this.history.push('/')
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
              render={(routerParams) => {
                return (
                  <SearchForm
                    {...routerParams}
                    {...this.props}
                    handleSearch={this.handleSearch}
                    inputHandler={this.inputHandler}
                  />
                )
              }}
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
