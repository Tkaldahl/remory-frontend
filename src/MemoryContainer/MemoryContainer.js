import React from 'react'
import MemorySquare from '../MemorySquare/MemorySquare'
import { Link } from 'react-router-dom'
import axios from 'axios'

// This component will receive the authenticated userId as a prop to render a number of memories equal to however many are tied to the authenticated in user.
class MemoryContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      memories: []
    }
  }

  componentDidMount () {
    // let origin
    // if (window.location.origin === 'http://localhost:4000') {
    //   origin = 'http://localhost:4000'
    // } else {
    //   origin = 'http://remory-api.herokuapp.com/'
    // }
    if (this.props.searchedUser) {
      axios.post(`${this.props.originURL}/memory/search`, {id: this.props.searchedUser})
        .then((res) => {
        // console.log(origin)
          console.log(res)
          this.setState({
            memories: res.data
          })
          console.log(this.props.displayedUser)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      axios.post(`${this.props.originURL}/memory/search`, {id: this.props.displayedUser})
        .then((res) => {
        // console.log(origin)
          console.log(res)
          this.setState({
            memories: res.data
          })
          console.log(this.props.displayedUser)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    // else {
    //   axios.post(`http://localhost:4000/memory/search`, {id: '5b466ba172457d31dbb38ad5'})
    //     .then((res) => {
    //     // console.log(origin)
    //       console.log(res)
    //       this.setState({
    //         memories: res.data
    //       })
    //       console.log(this.props.displayedUser)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // }
  }

  render () {
    // Before rendering the page we use a for loop to create an array of memories which is full of MemorySquares.

    let memories = []
    for (var i = 0; i < this.state.memories.length; i++) {
      memories.push(<MemorySquare memory={this.state.memories[i]} />)
    }
    return (
      <div className='MemoryContainerContainer'>
        <div className='addMemory'>
          {/* This is the first square displayed in the Memory Container. Its function is to add a new memory. */}
          <Link to='/memory/new'>+</Link>
        </div>
        {memories}
      </div>
    )
    // return (
    //   <div className='MemoryContainerContainer'>
    //     <div className='addMemory'>
    //       <Link to='/memory/new'>+</Link>
    //     </div>
    //       Memories Array renders here
    //   </div>
    // )
  }
}

export default MemoryContainer
