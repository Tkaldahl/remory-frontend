import React from 'react'

class LoginForm extends React.Component {
  render () {
    return (
      <div className='LoginFormContainer'>
        <form>
          <input type='text' className='email' placeholder='Email' onChange={this.props.inputHandler} />
          <input type='text' className='password' placeholder='Password' onChange={this.props.inputHandler} />
          <input type='submit' className='submitButton JS' onClick={this.props.handleLogin} />
        </form>
      </div>
    )
  }
}

export default LoginForm
