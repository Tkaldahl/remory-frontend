import React from 'react'
import { Link } from 'react-router-dom'
import './Sidenav.css'

// Notes: We will need to use state or props to render the profile picture at the top of the SideNav
// Notes: We will need to use state or props to logout the authenticated user and destrow the session.
class SideNav extends React.Component {
  render () {
    // let sideNavContents = [<Link className='navbarlink' to='/'>Home</Link>]
    // if (this.props.isLoggedIn) {
    //   sideNavContents.push(
    //     <Link className='navbarlink' to='/memory/new'>Add Memory</Link>,
    //     <form>
    //       <input type='submit' onClick={this.props.handleLogout} />
    //     </form>
    //   )
    // }
    return (
      <div className='navbar'>
        {/* <img src={this.props.user.profilePhoto} /> */} {/* This is the profile photo which requires state. We should have a default set in the user model for an empty photo (Twitter Egg) */}
        <Link className='navbarlink' to='/'>Home</Link>
        <Link className='navbarlink' to='/memory/new'>Add Memory</Link>
        <Link className='navbarlink' to='/user/search'>Search</Link>
        <form>
          <input type='submit' onClick={this.props.handleLogout} />
        </form>
      </div>
    )
  }
}

export default SideNav
