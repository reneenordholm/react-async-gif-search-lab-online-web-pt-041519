import React from 'react'

class GifSearch extends React.Component {


    render() {
        return (
            // <form onSubmit={this.props.handleSearch}>
            <div>
                <label>
                    Search
                    <input
                        id="search"
                        name="searchKey"
                        type="text"
                        value={this.props.searchKey}
                        onChange={this.props.handleChange}
                    />
                </label>
                <button 
                    type="submit"
                    onClick={this.props.handleSearch}
                    >Search</button>
            </div>
            // </form>
        )
    }
  
}

export default GifSearch 