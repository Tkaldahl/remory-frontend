import React from 'react'
import axios from 'axios'

class MemoryForm extends React.Component {
  constructor () {
    super()

    this.state = {
      titleString: '',
      imageURL: '',
      postString: ''
    }
  }
  render () {
    return (
      <div>
        <h2>New Memory</h2>
        <form onSubmit={this.onClick}>
          <input type='text' placeholder='Title?' onChange={this.setTitle} />
          <input type='text' placeholder='Image Url?' onChange={this.setImage} />
          <textarea rows='8' cols='50' onChange={this.setDetails}>Memory Details...</textarea>
          <input type='button' value='Submit Memory' />
        </form>
      </div>
    )
  }
}

export default MemoryForm
