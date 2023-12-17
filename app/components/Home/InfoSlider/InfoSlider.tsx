'use client';

import React from 'react';
import Card from './Card';
import Slider from 'react-slick';

const InfoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    slidesToShow: 4.1,
    slidesToScroll: 1.1,
  };

  return (
    <div className='py-6'>
      <Slider {...settings}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
          return <Card />;
        })}
      </Slider>
    </div>
  );
};

export default InfoSlider;
