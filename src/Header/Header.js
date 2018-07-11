import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className='HeaderContainer'>
        <h1>Remory</h1>
        <img src='#' alt='Remory Logo' /> {/* Add in this image source once we've picked our logo */}
      </div>
    )
  }
}

export default Header
