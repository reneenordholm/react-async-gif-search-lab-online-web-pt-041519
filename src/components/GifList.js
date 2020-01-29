import React from 'react'

class GifList extends React.Component {


    render() {
        return (
            <ul>
                {this.props.searchResults}
            </ul>
        )
    }
  
}

export default GifList 