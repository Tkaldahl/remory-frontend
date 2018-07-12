import React from 'react'

class SearchForm extends React.Component {
  render () {
    return (
      <div class='formcontainer'>
        <h2 className='subheading'>Search Remory</h2>

        <form className='form'>
          <input type='text' placeholder='Search for a User...' />
          <input type='button' value='Search' />
        </form>
      </div>
    )
  }
}

export default SearchForm
