import React from 'react'
import axios from 'axios'

class LoginForm extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.emailHandler = this.emailHandler.bind(this)
    this.passwordHandler = this.passwordHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
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
    const loginAttempt = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('https://remory-api.herokuapp.com', {loginAttempt})
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
          <input type='text' placeholder='Email' onChange={this.emailHandler} />
          <input type='text' placeholder='Password' onChange={this.passwordHandler} />
          <input type='submit' className='submitButton JS' onClick={this.submitHandler} />
        </form>
      </div>
    )
  }
}

export default LoginForm
