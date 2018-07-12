import React from 'react'
import MemorySquare from '../MemorySquare/MemorySquare'
import { Link } from 'react-router-dom'

// This component will receive the authenticated userId as a prop to render a number of memories equal to however many are tied to the authenticated in user.
class MemoryContainer extends React.Component {
  render () {
    // I've commented this out for the time being to get authentication running.
    // // Before rendering the page we use a for loop to create an array of memories which is full of MemorySquares.
    // let memories = []
    // for (var i = 0; i < this.props.user.memories.length; i++) {
    //   memories.push(<MemorySquare memory={this.props.user.memories[i]} />)
    // }
    // return (
    //   <div className='MemoryContainerContainer'>
    //     <div className='addMemory'>
    //       {/* This is the first square displayed in the Memory Container. Its function is to add a new memory. */}
    //       <Link to='/memory/new'>+</Link>
    //     </div>
    //     {memories}
    //   </div>
    // )
    return (
      <div className='MemoryContainerContainer'>
        <div className='addMemory'>
          <Link to='/memory/new'>+</Link>
        </div>
          Memories Array renders here
      </div>
    )
  }
}

export default MemoryContainer
