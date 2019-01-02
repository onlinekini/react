import React from 'react'
//import SongList from './SongList'
//import SongDetail from './SongDetail'

import '../style/SongList.css'

// Uncomment All the commented code to do it without Redux

class App extends React.Component {
    
    state = {selectedSongID : ''}
    
    handleSongSelect = id => {
        this.setState({selectedSongID : id})
    }

    renderSongDetail = () => {
        if (this.state.selectedSongID) {
            return '' //<SongDetail songId={this.state.selectedSongID}/>
        } else {
            return ''
        }
    }

    renderSongList = () => {
        return '' //<SongList songSelector={this.handleSongSelect}/> 
        
    }
    
    render() {
        return (
            <div className="ui component songs-display"> 
                {this.renderSongList()}
                {this.renderSongDetail()}
            </div>
        )
    }
}

export default App