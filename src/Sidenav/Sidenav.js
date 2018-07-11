import React from 'react'
import { Link } from 'react-router-dom'

// Notes: We will need to use state or props to render the profile picture at the top of the SideNav
// Notes: We will need to use state or props to logout the authenticated user and destrow the session. 
class SideNav extends React.Component {
  render () {
    return (
      <div className='SideNavContainer'>
        {/* <img src={this.props.user.profilePhoto} /> */} {/* This is the profile photo which requires state. We should have a default set in the user model for an empty photo (Twitter Egg) */}
        <Link to='/'>Home</Link>
        <Link to='/memory/new'>Add Memory</Link>
        <Link to='/user/search'>Search</Link>
        <Link to='#'>Logout</Link> {/* This piece requires authentication to be up and running. I believe the best way to do this is to call a function on the Link which will destroy the session and logout the user. This page is useful. https://stackoverflow.com/questions/34720034/how-to-handle-logout-route-in-redux */}
      </div>
    )
  }
}

export default SideNav
