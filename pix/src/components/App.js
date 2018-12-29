import React from 'react'

import SearchBar from './SearchBar'
import ImageList from './Imagelist'

import unsplash from '../api/unsplash'

class App extends React.Component {

    state = {images : []} // Always make an array empty

    onSearchSubmit = async(text) => {
       const resp = await unsplash.get('search/photos', {
           params: {query:text}
       })
       
       this.setState({images : resp.data.results})
       console.log(this.state.images)
    }

    showImages = () => {
        return <ImageList images={this.state.images}/>
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:"2em"}}> 
                <SearchBar onSubmission={this.onSearchSubmit}/>
                {this.showImages()}
                
            </div>
        )
    }
}

export default App