import React from 'react'
import axios from 'axios'

class SignupForm extends React.Component {
  constructor () {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.firstNameHandler = this.firstNameHandler.bind(this)
    this.lastNameHandler = this.lastNameHandler.bind(this)
    this.emailHandler = this.emailHandler.bind(this)
    this.passwordHandler = this.passwordHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  firstNameHandler (e) {
    this.setState({
      firstName: e.target.value
    })
    console.log(this.state.firstName)
  }

  lastNameHandler (e) {
    this.setState({
      lastName: e.target.value
    })
    console.log(this.state.lastName)
  }

  emailHandler (e) {
    this.setState({
      email: e.target.value
    })
    console.log(this.state.email)
  }

  passwordHandler (e) {
    this.setState({
      password: e.target.value
    })
    console.log(this.state.password)
  }

  submitHandler (e) {
    e.preventDefault()
    console.log('clicked')
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }
    axios.post('https://remory-api.herokuapp.com', {newUser})
      .then(res => {
        console.log(res)
        console.log(res.data)
        // We should have a redirect here after posting.
      }).catch((err) => {
        console.log(err)
      })
  }
  render () {
    return (
      <div className='LoginFormContainer'>
        <form>
          <input type='text' placeholder='First Name' onChange={this.firstNameHandler} />
          <input type='text' placeholder='Last Name' onChange={this.lastNameHandler} />
          <input type='text' placeholder='Email' onChange={this.emailHandler} />
          <input type='text' placeholder='Password' onChange={this.passwordHandler} />
          <input type='submit' className='submitButton JS' onClick={this.submitHandler} />
        </form>
      </div>
    )
  }
}

export default SignupForm
