import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Gallery.css'
import myImage1 from '../../images/tea1.jpg'
import myImage2 from '../../images/tea2.jpg'
import myImage3 from '../../images/tea3.jpg'
import myImage4 from '../../images/tea4.jpg'
import myImage5 from '../../images/tea5.jpg'
import myImage6 from '../../images/tea6.jpg'

function Gallery(props) {
  return (
    <>
      <div className='gallery-section'>
        <div className='gallery-container'>
          <div className='gallery-left'>
              <img className='teacup' src={myImage1} />
              <img className='teacup' src={myImage2} />
              <img className='teacup' src={myImage3} />
          </div>
          <div className='gallery-right'>
              <img className='teacup' src={myImage4} />
              <img className='teacup' src={myImage5} />
              <img className='teacup' src={myImage6} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery