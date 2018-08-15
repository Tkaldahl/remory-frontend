import React, { Component } from 'react'
import axios from 'axios'
import './UpdateForm.css'

class UpdateForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newContent: ''
    }
    this.submitChange = this.submitChange.bind(this)
    this.setNewContent = this.setNewContent.bind(this)
  }
  render () {
    return (
      <div>
        <form>
          <input type='text' placeholder='Update Memory Details..' onChange={this.setNewContent} />
          <input type='submit' className='button' value='Submit Changes' onClick={this.submitChange} />
        </form>
      </div>
    )
  }
  setNewContent (e) {
    this.setState({
      newContent: e.target.value
    })
    console.log(this.state.newContent)
  }

  submitChange (e) {
    e.preventDefault()
    console.log('the target URL is: ' + `${this.props.originURL}/memory/:id`)
    console.log('the content we are sending is: ' + this.state.newContent + 'and ' + this.props.id)
    axios.put(`${this.props.originURL}/memory/update`, {
      newContent: this.state.newContent,
      id: this.props.id
    })
      .then((res) => {
        console.log(res.data)
        this.props.history.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export default UpdateForm
