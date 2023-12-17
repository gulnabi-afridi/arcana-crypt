'use client';

import React, { useState } from 'react';
import * as Icons from '../../../svg/Icons';
import Image from 'next/image';

const BuyAndSell = () => {
  const [activeBtn, setActiveBtn] = useState('Buy');

  return (
    <div className='w-full flex flex-col cardShadow rounded-[16px] pt-4'>
      {/* button -->  */}
      <div className='w-full h-[45px] grid grid-cols-2 border-b-[1px] borderColor px-5'>
        <button
          onClick={() => setActiveBtn('Buy')}
          className={`w-full flex justify-center ${
            activeBtn === 'Buy'
              ? 'border-b-[2px] border-green'
              : 'border-b-[2px] border-transparent'
          }  radius items-center`}
        >
          <p className='text-[16px] font-medium text-green'>Buy</p>
        </button>
        <button
          onClick={() => setActiveBtn('Sell')}
          className={`w-full flex justify-center ${
            activeBtn === 'Sell'
              ? 'border-b-[2px] border-green'
              : 'border-b-[2px] border-transparent'
          }  radius items-center`}
        >
          <p className='text-[16px] font-medium text-white opacity-30'>Sell</p>
        </button>
      </div>
      {/* wallet ---->  */}
      <div className='w-full flex justify-between bg-[#012630] py-4 items-center px-5'>
        <div className='flex justify-center items-center gap-1'>
          <Icons.wallet />
          <p className='text-[10px] text-white font-medium'>? USDC</p>
        </div>
        {/* half or max -->  */}
        <div className='flex justify-center items-center gap-2'>
          <button className='text-white text-[12px] font-medium halfBg rounded-[12px] px-[12px] py-[2px]'>
            HALF
          </button>
          <button className='text-white text-[12px] font-medium halfBg rounded-[12px] px-[12px] py-[2px]'>
            MAX
          </button>
        </div>
      </div>
      {/* you are paying input ------>  */}
      <div className='w-full flex justify-between items-center border-b-[1px] borderColor py-4 px-5'>
        {/* input --> */}
        <div className='flex flex-col gap-2'>
          <p className='text-[12px] font-medium text-white opacity-75'>
            You're paying
          </p>
          <input
            type='number'
            placeholder='0.0000'
            className='bg-transparent border-none px-1 text-[28px] font-semibold placeholder:opacity-30 focus:outline-none text-white/80'
          />
        </div>
        {/* coin selection --->  */}
        <button className='flex justify-center items-center gap-2'>
          <Image
            src='/assets/bonk.svg'
            alt=''
            width={20}
            height={20}
            className='object-cover'
          />
          <p className='text-white text-[20px] font-medium'>USDC</p>
          <Icons.arrowDown />
        </button>
      </div>
      {/* to recieve  ------->  */}
      <div className='w-full flex justify-between items-center border-b-[1px] borderColor py-4 px-5'>
        {/* input --> */}
        <div className='flex flex-col gap-2'>
          <p className='text-[12px] font-medium text-white opacity-75'>
            You're paying
          </p>
          <input
            type='number'
            placeholder='0.0000'
            className='bg-transparent border-none px-1 text-[28px] font-semibold placeholder:opacity-30 focus:outline-none text-white/80'
          />
        </div>
        {/* coin selection --->  */}
        <div className='flex flex-col gap-2'>
          <p className='text-[12px] font-medium text-green text-end'>• Live</p>
          <button className='flex justify-center items-center gap-2'>
            <Image
              src='/assets/crypto.svg'
              alt=''
              width={20}
              height={20}
              className='object-cover'
            />
            <p className='text-white text-[20px] font-medium'>PYTH</p>
            <Icons.arrowDown />
          </button>
        </div>
      </div>
      {/* connect wallet ----> */}
      <div className='w-full px-5 py-4'>
        <button className='w-full py-[10px] border-[1px] border-pink hover:opacity-70 active:translate-y-[2px] text-[16px] font-medium text-pink tracking-wide px-[16px] rounded-[12px] bg-[#012630]'>
          Connect Wallet
        </button>
      </div>
      {/* powerd by ---->  */}
      <div className='w-full py-4 rounded-b-[16px] text-[14px] text-white font-medium bg-[#012630] flex justify-center items-center gap-1'>
        <p>Powered by</p>
        <Icons.powerdBy />
        <p>Powered by</p>
      </div>
    </div>
  );
};

export default BuyAndSell;
