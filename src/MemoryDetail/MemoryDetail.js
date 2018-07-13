import React from 'react'
import CommentForm from '../CommentForm/CommentForm'
import UpdateForm from '../UpdateForm/UpdateForm'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import './MemoryDetail.css'

// Notes: This component will receive props from App.js. MemorySquare should have an event listener which 'hears' that it's been clicked, sets the state of App.js to select a specific memory, and then App.js passes that memoryId to memoryDetail as a prop.
// Note added by Isaiah: Easier to just use the RESTful React Router <Link> in the MemorySquare.js file
// When Link followed, MemoryDetail renders, with accessible this.props.id since {...props.match.params} is rendered into component by App.js
// this.props.id makes the API GET call to database easy

class MemoryDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      titleString: '',
      authorName: '',
      postString: '',
      imageURL: '',
      createdAt: '',
      comments: []
    }
    this.deleteMemory = this.deleteMemory.bind(this)
  }

  componentDidMount () {
    console.log('MemoryDetail component DidMount: GET at API for memory')
    axios.get(`https://remory-backend.herokuapp.com/memory/${this.props.id}`)
      .then((res) => {
        console.log(res)
        this.setState({
          id: res.data._id,
          titleString: res.data.titleString,
          authorName: res.data.authorName[0].firstName,
          postString: res.data.postString,
          imageURL: res.data.imageURL,
          createdAt: res.data.createdAt,
          comments: res.data.comments
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    let title = this.state.titleString
    let name = this.state.authorName
    let post = this.state.postString
    let URL = this.state.imageURL
    let date = this.state.createdAt
    let comments = this.state.comments
    return (
      <div className='detailcontainer'>
        <img className='memoryimage'src={URL} />
        <h2 className='detailtitle'>{title}</h2>
        <p className='detailtext'>{post}</p>
        <p className='detailinfo'>This memory was recorded by {name} on {date}</p>
        {/* <CommentForm comments={comments} memoryID={this.props.id} /> */}
        <Link to='/memory/update' className='updatelink'>Update Memory</Link>
        <Route
          path='/memory/update'
          exact
          render={(props) => {
            return (
              <UpdateForm
                {...this.props}
                inputHandler={this.inputHandler}
              />
            )
          }}
        />
        <input className='button' type='submit' value='Delete Memory' onClick={this.deleteMemory} />
      </div>
    )
  }
  deleteMemory () {
    console.log('Memory was deleted')
    console.log(this.state.id)
    axios.delete('https://localhost4000/memory/delete', {
      id: this.state.id
    })
  }
}

export default MemoryDetail
