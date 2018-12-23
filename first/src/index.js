// import the react and react-dom lib
import React from 'react'
import ReactDOM from 'react-dom'


const buttonText = 'Click ME!';

var getButtonText = () => {
    return buttonText
}


// create a react component
const App = () => {
    return (
        <div>
            <label htmlFor="name" className="label">
                Enter Your Name
            </label>
            <input type="text" id="name"/>
            <button style={{'backgroundColor': 'green', 'color':'white'}}>{getButtonText()}</button>
        </div>
    )
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)