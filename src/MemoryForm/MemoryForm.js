import React from 'react'
import axios from 'axios'
import './MemoryForm.css'


class MemoryForm extends React.Component {
  constructor () {
    super()

    this.state = {
      titleString: '',
      imageURL: '',
      postString: '',
      authorEmail: ''
    }
    this.setTitle = this.setTitle.bind(this)
    this.setImage = this.setImage.bind(this)
    this.setDetails = this.setDetails.bind(this)
    this.setEmail = this.setEmail.bind(this)
  }
  render () {
    return (
      <div className='formcontainer'>
        <h2 className='subheading'>New Memory</h2>
        <form className='form'>
          <input classname='inputfield' type='text' placeholder='Title?' />
          <input classname='inputfield' type='text' placeholder='Image Url?' />
          <textarea classname='inputfield' rows='8' cols='50'>Memory Details...</textarea>
          <input classname='inputfield' type='text' placeholder='Author Email?' />
          <input type='button' value='Create Memory' />
        </form>
      </div>
    )
  }
  setTitle (e) {
    this.setState({
      titleString: e.target.value
    })
  }
  setEmail (e) {
    this.setState({
      authorEmail: e.target.value
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

    axios.post('http://localhost/4000/memory', {
      titleString: this.state.titleString,
      imageURL: this.state.imageURL,
      postString: this.state.postString,
      authorEmail: this.state.authorEmail
    })
      .then((res) => {
        this.props.history.push('/')
      })
  }
}

export default MemoryForm
