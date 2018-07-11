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
    this.setTitle = this.setTitle.bind(this)
    this.setImage = this.setImage.bind(this)
    this.setDetails = this.setDetails.bind(this)
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
  setTitle (e) {
    this.setState({
      titleString: e.target.value
    })
  }
  setImage (e) {
    this.setState({
      imageURL: e.target.value
    })
  }
  setDetails (e) {
    this.setState({
      postString: e.target.value
    })
  }
  onClick (e) {
    this.createMemory(e)
  }
  createMemory (e) {
    e.preventDefault()

    axios.post('http://localhost/4000', {
      titleString: this.state.titleString,
      imageURL: this.state.imageURL,
      postString: this.state.postString
    })
      .then((res) => {
        this.props.history.push('/')
      })
  }
}

export default MemoryForm
