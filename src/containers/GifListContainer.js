import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            searchResults: []
        }
    }

    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.props.searchKey}&api_key=Zk39xO1wpVim1VOvdT07SAAcB7AY7jL3&rating=g`)
        .then(res => res.json())
        .then(results => this.setState({  }))
    }

    render() {
        return (
            <div>
            < GifList searchResults={this.state.searchResults}  />
            < GifSearch onSubmit={this.props.searchKey} />
            </div>

        )
    }
  
}

export default GifListContainer