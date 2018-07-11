import React from 'react'
import { Link } from 'react-router-dom'

class MemorySquare extends React.Component {
  render () {
    const pathname = '/memory/' + this.props.memory._id
    return (
      <div className='MemorySquareContainer'>
        <img src={this.props.memory.imageUrl} />
        <Link to={pathname}>Testing</Link>
      </div>
    )
  }
}

export default MemorySquare
