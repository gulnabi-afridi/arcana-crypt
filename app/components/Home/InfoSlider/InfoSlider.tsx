'use client';

import React from 'react';
import Card from './Card';
import Marquee from 'react-fast-marquee';

const InfoSlider = () => {
  return (
    <div className='py-6'>
      <Marquee
        gradient={false}
        pauseOnHover={true}
        style={{ width: '100%', height: '100%' }}
        speed={150}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
          return <Card />;
        })}
      </Marquee>
    </div>
  );
};

export default InfoSlider;
