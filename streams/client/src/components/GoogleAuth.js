import React from 'react'
import {signIn, signOut} from '../actions'
import {connect} from 'react-redux'


class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'934591273585-knecptqsdra25ld8asb9hdopglrj237b.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn) {
            return (
                <button onClick = {this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out!
                </button>
            )
        } else {
            return (
                <button onClick = {this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign in with Google!
                </button>
            )
        }
    }

    render() {
        return this.renderAuthButton()
    }
}

const mapStateToProps = state => {
    return { isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)