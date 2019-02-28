import React from 'react'
import {connect} from 'react-redux'
import {fetchStreams} from '../../actions'
import {Link} from 'react-router-dom'

class StreamList extends React.Component {
    
    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdmin = (stream) => {
        if (stream.userId === this.props.currUserId) {
            const editUrl = `/stream/edit/${stream.id}`
            const deleteUrl = `/stream/delete/${stream.id}`
            return (
                <div className="right floated content">
                    <Link to ={editUrl} className="ui button primary">
                        Edit                   
                    </Link>
                    <Link to ={deleteUrl} className="ui button negative">
                        Delete                   
                    </Link>
                
                </div>
            )
        }
    }

    renderList = () => {
        return (
            this.props.streams.map(stream => {
                if(stream) {
                    return (
                        <div className="item" key={stream.id}>
                            {this.renderAdmin(stream)}
                            <i className="large middle icon camera"/>
                            <div className="content">
                                {stream.title}
                                <div className="description"> {stream.description} </div>
                                
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="item" >
                            <i className="large middle icon camera"/>
                            <div className="content">
                                
                            </div>
                        </div>
                    )
                }
            })
        )
    }

    renderCreate() {
        if(this.props.isUserSignedIn) {
           return( 
            <div style={{textAlign:'right'}}> 
                <Link to="/streams/new" className="ui button primary">
                    Create
                </Link>
            </div>
           )
        }
    }

    render() {
        return(
            <div className="">
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currUserId : state.auth.userId,
        isUserSignedIn:state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)