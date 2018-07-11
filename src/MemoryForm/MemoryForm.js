import React from 'react'

class MemoryForm extends React.Component {
  render () {
    return (
      <div>
        <h2>New Memory</h2>
        <form>
          <input type='text' placeholder='Title?' />
          <input type='text' placeholder='Image Url?' />
          <textarea rows='8' cols='50'>Memory Details...</textarea>
          <input type='button' value='Submit Memory' />
        </form>
      </div>
    )
  }
}

export default MemoryForm
