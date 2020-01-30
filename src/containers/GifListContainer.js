import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            searchResults: [],
            searchKey: ''
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = (searchKey) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchKey}&api_key=Zk39xO1wpVim1VOvdT07SAAcB7AY7jL3&rating=g`)
        .then(res => res.json())
        .then(results => {
            let resultsData = results.data.map(a => { return a.images.original.url })

            this.setState({ 
                searchResults: resultsData
            })
        }

        )
    }

    handleChange = event => {
        this.setState({
            searchKey: event.target.value
          })
        }

    handleSearch = event => {
        event.preventDefault()

        let input = this.state.searchKey
        
        if (input !== "") {
          this.fetchData(input)
        }
    }   

    render() {
        return (
            <div>
            < GifSearch handleSearch={this.handleSearch} handleChange={this.handleChange} />
            <br></br>
            <ul>
                < GifList searchResults={this.state.searchResults}  />
            </ul>
            </div>

        )
    }
  
}

export default GifListContainer