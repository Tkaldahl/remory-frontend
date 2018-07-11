import React from 'react'

class LoginForm extends React.Component {
  render () {
    return (
      <div className='LoginFormContainer'>
        <form>
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Password' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default LoginForm
