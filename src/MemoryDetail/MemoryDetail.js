import React from 'react'
import CommentForm from '../CommentForm/CommentForm'

// Notes: This component will receive props from App.js. MemorySquare should have an event listener which 'hears' that it's been clicked, sets the state of App.js to select a specific memory, and then App.js passes that memoryId to memoryDetail as a prop.

class MemoryDetail extends React.Component {
  render () {
    return (
      <div className='MemoryDetailContainer'>
        <img src={this.props.memory.imageURL} />
        <h2>{this.props.memory.title}</h2>
        <p>{this.props.memory.postString} </p>
        <CommentForm />
      </div>
    )
  }
}

export default MemoryDetail
