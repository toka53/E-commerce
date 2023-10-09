import React from 'react'
import style from './MainSlider.module.css';
import BannerOne from '../../Assets/images/slider-image-1.jpeg'
import BannerTwo from '../../Assets/images/slider-image-2.jpeg'
import BannerThree from '../../Assets/images/slider-image-3.jpeg'

import BlogOne from '../../Assets/images/blog-img-1.jpeg'
import BlogTwo from '../../Assets/images/blog-img-2.jpeg'

import Slider from 'react-slick';


export default function MainSlider() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return <>
     <h2>Main Slider</h2>
  
     <div className="row gx-0">
      <div className="col-md-8">
      <Slider {...settings}>
           <img src={BannerOne} alt="" />
           <img src={BannerTwo} alt="" />
           <img src={BannerThree} alt="" />
        </Slider>  
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-12">
              <img className='w-100' src={BlogOne} alt="" />
          </div>
          <div className="col-md-12">
              <img className='w-100' src={BlogTwo} alt="" />
          </div>
        </div>
      </div>
     </div>


  </>
}
