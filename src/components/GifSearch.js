import React from 'react'

class GifSearch extends React.Component {

    handleSearch = () => {
        this.props.handleSearch(this.props.searchKey)
      }

    render() {
        return (
            <div>
                <input  />
                <button onClick={this.handleSearch}>Search</button>
            </div>
        )

    }
  
}

export default GifSearch 