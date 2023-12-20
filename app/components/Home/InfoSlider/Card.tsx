import React from 'react';
import Image from 'next/image';

const Card = () => {
  return (
    <div className='w-[250px] sm:w-[330px] flex justify-between items-start ml-3 bg-background-900 dark:bg-background-100 cardShadowBor px-4 py-2 sm:py-3 rounded-[16px]'>
      {/* left port ----> */}
      <div className='flex flex-col gap-2'>
        <div className='flex justify-center items-center'>
          <Image
            src='/assets/bonk.svg'
            alt=''
            width={24}
            height={24}
            className='object-fill z-10'
          />
          <Image
            src='/assets/coin.svg'
            alt=''
            width={24}
            height={24}
            className='object-fill -ml-3 z-0'
          />
          <p className='text-[12px] sm:text-[14px] text-foreground-100 font-medium ml-2'>
            BONK/USDC
          </p>
        </div>
        <p className='text-[12px] sm:text-[20px] font-medium text-foreground-100 '>
          $0.0040921
        </p>
        <p className='text-[12px] sm:text-[12px] text-foreground-100 font-medium opacity-25'>
          Vol $142,284,877
        </p>
      </div>
      {/* right portion ----->  */}
      <div className='flex flex-col gap-2'>
        <p className='text-[10px] sm:text-[12px] text-foreground-100  font-medium py-[2px] px-[12px] timeLine rounded-[12px]'>
          24H
        </p>
        <p className='text-[12px] sm:text-[14px] text-success-100 font-medium'>
          +9.23%
        </p>
      </div>
    </div>
  );
};

export default Card;
