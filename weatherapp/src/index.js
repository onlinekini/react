import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import Clock from './Clock'

class App extends React.Component {
    /*constructor(props) {
        super(props)
        // This is init, hence direct assignment. Else it is always setState.
        this.state = { lat:null, long:null, errMsg : '' };
    }*/

    // Same as the code in the constructor
    state = {lat:null, long:null, errMsg : '', currTime : null}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat : position.coords.latitude, long:position.coords.longitude})
            },
            err  => {
                this.setState({errMsg:err.message})
            }
        )

        setInterval(() => {
            var cTime = new Date().toLocaleTimeString();
            //console.log(cTime)
            this.setState({ currTime: cTime });
            //console.log(this.state.currTime)
          }, 1000);
    }

    componentDidUpdate() {
    
    }

    componentWillUnmount() {

    }


    renderContent() {
        if(this.state.errMsg && !this.state.lat){
            return <div><h4>Error : {this.state.errMsg}</h4></div>
        }

        if(!this.state.errMsg && this.state.lat){
            return (<div> <SeasonDisplay lat={this.state.lat} /> <Clock currTime={this.state.currTime}/> </div>)
        }
        
        return <Spinner message="please accept location request"/>
    }

    // Required by react
    render() {
        return (<div>
           {this.renderContent()}
       </div>)

    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))