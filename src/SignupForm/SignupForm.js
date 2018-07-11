import React from 'react'

class SignupForm extends React.Component {
  render () {
    return (
      <div className='LoginFormContainer'>
        <form>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Password' />
          <input type='button' />
        </form>
      </div>
    )
  }
}

export default SignupForm
