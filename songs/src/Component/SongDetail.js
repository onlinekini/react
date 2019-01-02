import React from 'react'


class SongDetail extends React.Component {
    songs= [
                {name:'Kiki', id:'1', title:'Kiki', duration:"1:21"},
                {name: 'Thunder', id:'2', title:'Thunder', duration:"2:12"},
                {name: 'Alone', id:'3' , title:'Alone', duration:"3:23"}
            ]

    renderSongDetail = () => {
        const songID = this.props.songId
        const songDet = this.songs.filter(song => {return song.id === songID})
        console.log(songDet)
        return (
            <div>
                <div className="ui text">{songDet[0].title}</div>
                <div className="ui text">{songDet[0].duration}</div>
            </div>
        )
    }

    render() {
        return (
            <div className="ui segment">
                {this.renderSongDetail()}
            </div>
        )
    }
}

export default SongDetail