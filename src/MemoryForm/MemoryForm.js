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
    this.onClick = this.onClick.bind(this)
    this.createMemory = this.createMemory.bind(this)
  }
  render () {
    return (
      <div className='formcontainer'>
        <h2 className='subheading'>New Memory</h2>
        <form className='form'>
          <input className='inputfield' type='text' placeholder='Title?' onChange={this.setTitle} />
          <input className='inputfield' type='text' placeholder='Image Url?' onChange={this.setImage} />
          <textarea className='inputfield' rows='8' cols='50' placeholder='Memory Details...' onChange={this.setDetails} />
          {/* <input className='inputfield' type='text' placeholder='Author Email?' onChange={this.setEmail} /> */}
          <input type='button' value='Create Memory' onClick={this.onClick} />
        </form>
      </div>
    )
  }
  setTitle (e) {
    this.setState({
      titleString: e.target.value
    })
    console.log(this.state.titleString)
  }
  setEmail (e) {
    this.setState({
      authorEmail: e.target.value
    })
    console.log(this.state.authorEmail)
  }
  setImage (e) {
    this.setState({
      imageURL: e.target.value
    })
    console.log(this.state.imageURL)
  }
  setDetails (e) {
    this.setState({
      postString: e.target.value
    })
    console.log(this.state.postString)
  }
  onClick (e) {
    this.createMemory(e)
  }
  createMemory (e) {
    e.preventDefault()
    console.log('AXIOS POST CREATEMEMORY()')
    axios.post('https://remory-backend.herokuapp.com/memory', {
      titleString: this.state.titleString,
      imageURL: this.state.imageURL,
      postString: this.state.postString,
      displayedUser: this.props.displayedUser
    })
      .then((res) => {
        console.log(res.data)
        this.props.history.push('/')
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}

export default MemoryForm
