import React from 'react'

// Steps: Isaiah Back end, Dan on the front end, CRUD without authentication
class SearchForm extends React.Component {
  handleClick = () => {
    console.log(this.props)
    this.props.history.push('/')
}
  render () {
    return (
      <div className='formcontainer'>
        <h2 className='subheading'>Search Remory</h2>

        <form className='form'>
          <input className='email' type='text' placeholder='Search for a User...' onChange={this.props.inputHandler} />
          <input type='button' value='Search' onClick={this.handleClick} />
        </form>
      </div>
    )
  }
}

export default SearchForm
