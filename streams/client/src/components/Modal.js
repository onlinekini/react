import React from 'react'
import ReactDOM from 'react-dom'



const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content"> {props.message} </div>
                <div className="actions">
                    <button onClick={props.onSuccess} className="ui button primary">Proceed</button>
                    <button onClick={props.onDismiss} className="ui button">Cancel</button>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal