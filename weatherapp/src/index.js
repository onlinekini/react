import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'


class App extends React.Component {
    constructor(props) {
        super(props)

        // This is init, hence direct assignment. Else it is always setState.
        this.state = { lat:null, long:null, errMsg : '' };
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat : position.coords.latitude, long:position.coords.longitude})
            },
            err  => {
                this.setState({errMsg:err.message})
            }
        )

    }

    // Required by react
    render() {
        if(this.state.errMsg && !this.state.lat){
                return <div><h4>Error : {this.state.errMsg}</h4></div>
        }

        if(!this.state.errMsg && this.state.lat){
            return <div><h4>Latitude : {this.state.lat}</h4> <h4>Longitude : {this.state.long}</h4></div>
        }
        
        return <h4>Loading...</h4>

    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))