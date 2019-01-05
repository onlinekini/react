import React from 'react'
import {connect} from 'react-redux'


const SongDetail = ({song}) => {
    if (song === null) {
        return <div> Select a Song </div>
    }
    return (
        <div>
            <h3> Details for </h3>
            <p>
                Title: {song.title}
                <br/>
                Details: {song.duration}    
            </p>
        </div>
    )
}

const mapStateToProps = state => {
   return { song : state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)