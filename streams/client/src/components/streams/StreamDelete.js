import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import {connect} from 'react-redux'
import {fetchStream, deleteStream} from '../../actions'

class StreamDelete extends React.Component {
    
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    deleteStream() {
        this.props.deleteStream(this.props.match.params.id)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading... </div>
        } else {
            return (
                <Modal 
                    message={`Are you sure you want to delete the Stream Titled: ${this.props.stream.title}`}
                    title="Delete Stream" 
                    onDismiss={() => history.push('/')}
                    onSuccess={() => this.deleteStream()}/>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete)