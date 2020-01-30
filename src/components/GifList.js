import React from 'react'

class GifList extends React.Component {


    render() {
        return (
            <div>
                <li><img alt="" src={this.props.searchResults[0]}></img></li><br></br>
                <li><img alt="" src={this.props.searchResults[1]}></img></li><br></br>
                <li><img alt="" src={this.props.searchResults[2]}></img></li><br></br>
            </div>

        )
    }
  
}

export default GifList 