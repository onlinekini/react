import React from 'react'


class SongList extends React.Component {
    
    state = {songID:''}

    songs= [
                {name:'Kiki', id:'1'},
                {name: 'Thunder', id:'2'},
                {name: 'Alone', id:'3'}
            ]

    handleClick = () => {
        this.props.songSelector(this.state.songID)
    }

    renderSongList = () => {
        return (this.songs.map(song => {
                return <div className=" ui button btn-left" key={song.id} onClick={() => {this.setState({songID:song.id}) 
                                                                                          this.handleClick()}}>{song.name}</div>
            })
        )
    }

    render() {
        return (
            <div className="ui segment">
                {this.renderSongList()}
            </div>
        )
    }
}

export default SongList