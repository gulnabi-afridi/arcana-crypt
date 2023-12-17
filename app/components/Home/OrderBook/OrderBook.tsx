import React from 'react';
import * as Icons from '../../../svg/Icons';

const OrderBook = () => {
  return (
    <div className='w-full flex flex-col gap-6 p-6 orderBookSha'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex justify-center items-center gap-1'>
          <p className='text-[20px] text-white'>Orderbook</p>
          <p className='text-[12px] text-green'>• Live</p>
        </div>
        <div className='flex justify-center bg-[#012A36] rounded-[12px] py-[6px] px-[12px] items-center gap-1'>
          <Icons.arrowUp />
          <p className='text-[14px] text-green font-medium'>0.1459881</p>
        </div>
        <div className='flex relative justify-center items-center h-[40px] min-w-[229px]'>
          <input
            placeholder='Search address, .sol domain...'
            type='text'
            className='w-full h-full rounded-[12px] placeholder:opacity-30 text-white opacity-90 orderBookSearchBg border-none focus:outline-none pl-7 pr-2'
          />
          <div className='absolute left-[10px] '>
            <Icons.search />
          </div>
        </div>
      </div>
      <div className='w-full'>
        {/* table ==============>  */}
        {/* header --> */}
        <div className='w-full h-[40px] grid grid-cols-[1fr,4fr,1fr] border-b-[1px] borderColor'>
          {/* owner */}
          <p className='flex  justify-start w-full text-[14px] font-medium text-white/50'>
            Owner
          </p>
          <div className='w-full grid grid-cols-[1fr,2fr,1fr]'>
            {/* size ---> */}
            <p className='flex justify-end w-full text-[14px] font-medium text-white/50'>
              Size
            </p>
            {/* price ---> */}
            <p className='flex justify-center w-full text-[14px] font-medium text-white/50'>
              Price
            </p>
            {/* size ---> */}
            <p className='flex justify-start w-full text-[14px] font-medium text-white/50'>
              Size
            </p>
          </div>
          {/* owner ---> */}
          <p className='flex justify-end w-full text-[14px] font-medium text-white/50'>
            Owner
          </p>
        </div>
        {/* table rows --->  */}
        <div className='w-full grid grid-cols-[1fr,4fr,1fr] h-[35px] justify-center items-center'>
          <p className='text-[14px] w-full flex justify-start text-white font-medium underline'>
            2h8x...Jk28
          </p>
          <div className='w-full relative grid grid-cols-[1fr,2fr,1fr] z-20'>
            <p className='text-[14px] w-full flex justify-end text-white font-medium'>
              20,249,888.12
            </p>
            <div className='w-full grid grid-cols-2'>
              {/* price -->  */}
              <p className='text-[14px] w-full flex justify-end items-center pr-1 text-green font-medium'>
                0.1458721
              </p>
              <p className='text-[14px] w-full flex items-center justify-start pl-1 text-red font-medium'>
                0.1458721
              </p>
            </div>
            <p className='text-[14px] w-full flex justify-start pl-1 text-white font-medium'>
              0.1458721
            </p>
            {/* indicator ----->  */}
            <div className='w-[50%] absolute h-[35px] bg-green/25 -z-10 right-1/2 '></div>
            <div className='w-[50%] absolute h-[35px] bg-red/25 left-1/2 -z-10'></div>
          </div>

          {/* owner --->  */}
          <p className='text-[14px] w-full flex justify-end text-white font-medium underline'>
            2h8x...Jk28
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
