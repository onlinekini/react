import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = {
    summer:{text:"Warm and fuzzy", iconName:"massive sun"},
    winter:{text:"Brr! it is cold", iconName:"massive snowflake"}
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter"
    } else {
        return lat < 0 ? "summer" : "winter"
    }
}

const SeasonDisplay = props => {
    const seasonName = getSeason(props.lat, new Date().getMonth())
    const season = seasonConfig[seasonName]
    return (
        <div className={`season-display ${seasonName}`}> 
            <i className={`icon-left ${season.iconName} icon`}/>
            <h1>{season.text}</h1>
            <i className={`icon-right ${season.iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay