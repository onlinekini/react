import React from "react";

const Clock = props => {
    console.log(props.currTime)
    return (
        <div className="time">The time is: {props.currTime}</div>
    )
}

export default Clock
