import React, { Component } from "react";
import Slider from "react-slick";

import "./ItemSlider.css";

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
        <Slider {...settings}>
          <div className='slider'>
            <img
              src='https://images.unsplash.com/photo-1593642703013-5a3b53c965f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80'
              alt='img'
            />
          </div>
          <div className='slider'>
            <img
              src='https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'
              alt='img'
            />
          </div>
          <div className='slider'>
            <img
              src='https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
              alt='img'
            />
          </div>
        </Slider>
      </div>
    );
  }
}
