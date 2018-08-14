import React, { Component } from 'react'
import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'
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
import UpdateForm from '../UpdateForm/UpdateForm'

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
      displayedUser: '',
      searchedUser: '',
      redirect: false,
      originURL: 'https://remory-backend.herokuapp.com'
    }
    this.inputHandler = this.inputHandler.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.redirectHome = this.redirectHome.bind(this)
    this.checkLocalStorageToken = this.checkLocalStorageToken.bind(this)
  }

  checkLocalStorageToken () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
      console.log(localStorage.token.id)
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  componentDidMount () {
    if (window.location.origin === 'http://localhost:3000') {
      this.setState({ originURL: 'http://localhost:3001' })
      this.checkLocalStorageToken()
      return
    }
    this.checkLocalStorageToken()
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
      displayedUser: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleSignup (e) {
    e.preventDefault()
    axios.post(`${this.state.originURL}/user/signup`, {
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
    console.log(this.state.originURL)
    axios.post(`${this.state.originURL}/user/login`, {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        localStorage.token = response.data.token
        var loggedInUser = this.jwtDecode(localStorage.token)
        this.setState({
          isLoggedIn: true,
          displayedUser: loggedInUser
        })
        console.log(this.state.displayedUser)
      })
      .catch(err => console.log(err))
  }

  handleSearch (e) {
    e.preventDefault()
    axios.post(`${this.state.originURL}/user/search`, {
      email: this.state.email
    })
      .then(response => {
        this.setState({
          searchedUser: response.data._id
        })
        this.redirectHome()
      })
  }

  redirectHome () {
    console.log('redirectHome firing')
    // console.log(this.props)
    this.setState({
      redirect: true
    })
    console.log(this.state.searchedUser)
    // this.props.history.push('/')
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
              path='/'
              exact
              render={(props) => {
                console.log(this.state.displayedUser)
                // const isLoggedIn = this.state.isLoggedIn
                if (this.state.isLoggedIn || this.state.searchedUser) {
                  return <MemoryContainer
                    {...this.props}
                    {...this.routerParams}
                    displayedUser={this.state.displayedUser}
                    searchedUser={this.state.searchedUser}
                    originURL={this.state.originURL}
                  />
                } else {
                  return <Landing />
                }
              }}
            />
            <Route
              path='/memory/new'
              exact
              render={(props) => {
                console.log(props)
                return (
                  <MemoryForm
                    // {...this.props}
                    originURL={this.state.originURL}
                    inputHandler={this.inputHandler}
                    displayedUser={this.state.displayedUser}
                  />
                )
              }}
            />
            <Route
              path='/memory/:id'
              render={props => {
                console.log('path works')
                return <MemoryDetail
                  // {...routerParams}
                  {...props.match.params}
                  handleSearch={this.handleSearch}
                  inputHandler={this.inputHandler}
                  redirect={this.state.redirect}
                  originURL={this.state.originURL}
                />
              }}
            />
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
                    displayedUser={this.state.displayedUser}
                    originURL={this.state.originURL}
                  />
                )
              }}
            />
            <Route
              path='/user/search'
              render={props => {
                return (
                  <SearchForm
                    // {...routerParams}
                    // {...props}
                    handleSearch={this.handleSearch}
                    inputHandler={this.inputHandler}
                    redirect={this.state.redirect}
                  />
                )
              }}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
