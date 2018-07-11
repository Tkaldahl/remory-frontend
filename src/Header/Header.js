import React from 'react'
import './Header.css'

class Header extends React.Component {
  render () {
    return (
      <div className='header'>
        <h1 className='sitetitle'>Remory</h1>
        <img className='logo' src='#' alt='Remory Logo' /> {/* Add in this image source once we've picked our logo */}
      </div>
    )
  }
}

export default Header
