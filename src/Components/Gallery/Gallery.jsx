import React from 'react'
import { imagesGallry } from './Images'
import './Galleryimg.css'
const Gallery = () => {
  return (
    <div className='gallery-container'>
     <h2>@UOMO</h2>   
     <div className="gallery-images">
      {imagesGallry.map((img , ind)=>(
      <img key={ind} src={img}  alt={`gallery-${ind}`}/>  
      ))}  
     </div>
    </div>
  )
}

export default Gallery