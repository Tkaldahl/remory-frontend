import React from 'react'
import './MemoryForm.css'

class MemoryForm extends React.Component {
  render () {
    return (
      <div className='formcontainer'>
        <h2 className='subheading'>New Memory</h2>
        <form className='form'>
          <input classname='inputfield' type='text' placeholder='Title?' />
          <input classname='inputfield' type='text' placeholder='Image Url?' />
          <textarea classname='inputfield' rows='8' cols='50'>Memory Details...</textarea>
          <input type='button' value='Create Memory' />
        </form>
      </div>
    )
  }
}

export default MemoryForm
