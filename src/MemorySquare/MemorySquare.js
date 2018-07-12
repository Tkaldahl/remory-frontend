import React from 'react'
import { Link } from 'react-router-dom'
import './MemorySquare.css'

class MemorySquare extends React.Component {
  render () {
    return (
      <div className='card cardcontainer'>
        <h3 className='centered'>{this.props.memory.title}</h3>
        <Link to={`/memory/${this.props.memory._id}`}><img className='cardimage' src={this.props.memory.imageURL} /></Link>
      </div>
    )
  }
}

export default MemorySquare
