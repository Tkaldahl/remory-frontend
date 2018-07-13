import React from 'react'
import { Redirect } from 'react-router-dom'

// Steps: Isaiah Back end, Dan on the front end, CRUD without authentication
class SearchForm extends React.Component {
  renderRedirect () {
    if (this.props.redirect) {
      return <Redirect to='/' />
    }
  }

  render () {
    return (
      <div className='formcontainer'>
        {this.renderRedirect()}
        <h2 className='subheading'>Search Remory</h2>
        <form className='form'>
          <input className='email' type='text' placeholder='Search for a User...' onChange={this.props.inputHandler} />
          <input type='button' value='Search' onClick={this.props.handleSearch} />
        </form>
      </div>
    )
  }
}

export default SearchForm
