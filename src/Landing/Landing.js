import React from 'react'
import { Link } from 'react-router-dom'
import MemorySquare from '../MemorySquare/MemorySquare'

class Landing extends React.Component {
  render () {
    // Before rendering the page we use a for loop to create an array of memories which is full of MemorySquares.
    let memories = []
    let sampleMemories = []
    for (var i = 0; i < sampleMemories.length; i++) {
      memories.push(<MemorySquare memory={this.props.user.sampleMemories[i]} />)
    }
    return (
      <div className='LandingContainer'>
        <div className='LoginSquare'>
          <Link to='/user/login'>Login!</Link>
        </div>
        <div className='SignupSquare'>
          <Link to='/user/signup'>Sign Up!</Link>
        </div>
        {memories}
      </div>
    )
  }
}

export default Landing
