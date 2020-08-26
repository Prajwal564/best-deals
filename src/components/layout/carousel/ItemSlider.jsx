import React, { Component } from 'react';
import Slider from 'react-slick';

import './ItemSlider.css';

export default class ItemSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
    };

    return (
      <div>
        <Slider {...settings} arrows={false}>
          <div className='slider'>
            <img
              src='https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg'
              alt='img'
            />
          </div>
          <div className='slider'>
            <img
              src='https://mymodernmet.com/wp/wp-content/uploads/2018/09/basic-color-theory-thumbnail.jpg'
              alt='img'
            />
          </div>
          <div className='slider'>
            <img
              src='https://media.swncdn.com/via/5793-istockgetty-images-pluspattadis-walarput.jpg'
              alt='img'
            />
          </div>
        </Slider>
      </div>
    );
  }
}
