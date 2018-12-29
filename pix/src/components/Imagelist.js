import React from 'react'
import ImageCard from './ImageCard'

import '../style/ImageList.css'

class ImageList extends React.Component {
    
    render(props) {

        const dispImages = this.props.images.map(image => {
            return <ImageCard key={image.id} image={image}/>
        })

        return (
            <div className="image-list"> {dispImages} </div>
        )
    }
}

export default ImageList