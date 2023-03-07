import React, { useState } from 'react'
import './imageBanner.css'
import {v4 as uuidv4} from 'uuid'
import defaultImage from '../../Assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'


function ImageBanner(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);
  const getClassName = (i) => {
    if (i === currentPicture) 
      {return "show"}
    else {
      return ""
    }
  }

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if(newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    } 
    setCurrentPicture(currentPicture - 1);
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  }

  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0
  }

  const getCarouselOrDefaultImage = () => {
    // if(!pictures || pictures.length === 0) {
    if(!arePicturesAvailable()) {
      return <img src={defaultImage} className='show' alt='' />
    } else {
      return pictures.map((pic, i) => (
        <img key={uuidv4()} className={getClassName(i)} src={pic} alt=""></img>
      ))
    }
  }


  return (
    <div className='image__banner'>
      <div className="image__container">{getCarouselOrDefaultImage()}</div>
      {arePicturesAvailable() && (
        <>
          <button 
            className='btn btn__pevious' 
            onClick={moveToPrevious} 
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <span className="slide__counter">
            {currentPicture + 1} / {pictures.length}
          </span>

          <button 
            className='btn btn__next' 
            onClick={moveToNext}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  )
}

export default ImageBanner

// style={{zIndex:2, position:'relative'}} 
