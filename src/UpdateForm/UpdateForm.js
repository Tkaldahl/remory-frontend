import React, { Component } from 'react'
import './UpdateForm.css'

class UpdateForm extends Component {
  render () {
    return (
      <div>
        <form>
          <input type='text' placeholder='Update Memory Details..' />
          <input type='submit' className='button' value='Submit Changes' />
        </form>
      </div>
    )
  }
}

export default UpdateForm
