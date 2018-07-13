import React from 'react'
import MemoryDetail from '../MemoryDetail/MemoryDetail'
import { Link, Redirect, Route } from 'react-router-dom'
import './MemorySquare.css'

class MemorySquare extends React.Component {
  render () {
    return (
      <div className='card cardcontainer'>
        <h3 className='centered'>{this.props.memory.titleString}</h3>
        <Link to={`/memory/${this.props.memory._id}`}> <img className='cardimage' src={this.props.memory.imageURL} onClick={this.redirect} /> </Link>
      </div>
    )
  }
}

export default MemorySquare
