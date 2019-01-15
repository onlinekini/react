import React from 'react'
import {connect} from 'react-redux'

class UserHeader extends React.Component {
    /* componentDidMount() {
        this.props.fetchUser(this.props.userId)
    } // data got from the single action , not from this one */

    render() {
        if (!this.props.userInfo) {
            return <div></div>
        } else {
            return (
                <div className="header">{this.props.userInfo.name}</div>
            )
        }
    }
}

const mapsStateToProps = (state, ownProps) => {
    return {userInfo : state.users.find(user => user.id === ownProps.userId)}
}


export default connect(mapsStateToProps)(UserHeader)