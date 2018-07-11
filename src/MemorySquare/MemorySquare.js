import React from 'react'
import { Link } from 'react-router-dom'

class MemorySquare extends React.Component {
  render () {
    return (
      <div className='MemorySquareContainer'>
        <h3>{this.props.memory.title}</h3>
        <Link to={`/memory/${this.props.memory._id}`}><img src={this.props.memory.imageURL} /></Link>
      </div>
    )
  }
}

export default MemorySquare
