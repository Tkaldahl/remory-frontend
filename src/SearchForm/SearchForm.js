import React from 'react'

class SearchForm extends React.Component {
  render () {
    return (
      <div>
        <h2>Search Remory</h2>

        <form>
          <input type='text' placeholder='Search for a User...' />
        </form>
      </div>
    )
  }
}

export default SearchForm
