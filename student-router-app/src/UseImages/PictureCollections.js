import React, {Component} from 'react'
import image from '../images/image.jpg'

class PictureCollections extends Component{
  render(){
    return(
      <div>
        <h2>Picture Collections</h2>
        <img src={image} />
      </div>
    )
  }
}

export default PictureCollections
