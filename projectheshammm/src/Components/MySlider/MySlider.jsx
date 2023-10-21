import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function MySlider() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return <>
    <div>
          <Slider {...settings}>
            <div>
              <img className='w-100' style={{'height': '300px'}} src= {require('../../images/banner-4.jpeg')} alt='' />
            </div>

            <div>
              <img className='w-100' style={{'height': '300px'}} src={require('../../images/blog-img-1.jpeg')} alt='' />
            </div>

            <div>
              <img className='w-100' style={{'height': '300px'}} src={require('../../images/blog-img-1.jpeg')} alt='' />
            </div>

            <div>
            <img className='w-100' style={{'height': '300px'}} src={require('../../images/blog-img-2.jpeg')} alt='' />
            </div>

            <div>
              <img className='w-100' style={{'height': '300px'}} src={require('../../images/grocery-banner-2.jpeg')} alt='' />
            </div>

            <div>
              <img className='w-100' style={{'height': '300px'}} src={require('../../images/banner-4.jpeg')} alt='' />
            </div>

          </Slider>
    </div>
  
  
  </>

}

