import React from 'react'


class ImageCard extends React.Component {

    constructor (props) {
        super(props)
        this.state = {span:0}
        this.imgRef = React.createRef()
    }

    componentDidMount () {
        //console.log(this.imgRef.current.clientHeight) // This is AFTER the image is download
        this.imgRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = (current) => {
        const height = this.imgRef.current.clientHeight
        const span = Math.ceil(height/10)
        this.setState({span:span})
    }

    render = props => {
        const {description, urls} = this.props.image

        return <div style={{gridRowEnd:`span ${this.state.span}`}}> <img 
        ref={this.imgRef}
        src={urls.regular} 
        alt={description}/> </div>
    }
}

export default ImageCard