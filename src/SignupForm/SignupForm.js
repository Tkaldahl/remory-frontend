import React from 'react'
// import axios from 'axios'

class SignupForm extends React.Component {
  render () {
    return (
      <div className='LoginFormContainer'>
        <form>
          <input type='text' className='firstName' placeholder='First Name' onChange={this.props.inputHandler} />
          <input type='text' className='lastName' placeholder='Last Name' onChange={this.props.inputHandler} />
          <input type='text' className='email' placeholder='Email' onChange={this.props.inputHandler} />
          <input type='text' className='password' placeholder='Password' onChange={this.props.inputHandler} />
          <input type='text' className='profPicture' placeholder='Upload A Profile Picture' onChange={this.props.inputHandler} />
          <input type='submit' className='submitButton JS' onClick={this.props.handleSignup} />
        </form>
      </div>
    )
  }
}

export default SignupForm
