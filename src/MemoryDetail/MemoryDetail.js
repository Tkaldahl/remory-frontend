import React from 'react'
import CommentForm from '../CommentForm/CommentForm'
import axios from 'axios'

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
  }

  componentDidMount () {
    console.log('MemoryDetail component DidMount: GET at API for memory')
    axios.get(`http://localhost:4000/memory/${this.props.id}`)
      .then((res) => {
        console.log(res)
        this.setState({
          titleString: res.data.titleString,
          authorName: res.data.authorName,
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
    let name = this.state.authorName.firstName
    let post = this.state.postString
    let URL = this.state.imageURL
    let date = this.state.createdAt
    let comments = this.state.comments
    return (
      <div className='MemoryDetailContainer'>
        <img src={URL} />
        <h2>{title}</h2>
        <p>{post}</p>
        <p>This memory was recorded by {name} on {date}</p>
        <CommentForm comments={comments} memoryID={this.props.id} />
      </div>
    )
  }
}

export default MemoryDetail
