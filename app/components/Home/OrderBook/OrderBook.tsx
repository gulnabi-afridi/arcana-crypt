import React from 'react';
import * as Icons from '../../../svg/Icons';

const OrderBook = () => {
  return (
    <div className=' h-full flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 orderBookSha'>
      <div className='w-full grid grid-cols-2 md:grid-cols-[2fr,1fr,1.5fr] gap-y-4'>
        <div className='flex justify-start items-center gap-1 order-1'>
          <p className='text-[20px] text-white'>Orderbook</p>
          <p className='text-[12px] text-green'>• Live</p>
        </div>
        <div className='w-full flex justify-center items-center order-2'>
          <div className='flex justify-center bg-[#012A36] rounded-[12px] py-[6px] px-[12px] items-center gap-1'>
            <Icons.arrowUp />
            <p className='text-[14px] text-green font-medium'>0.1459881</p>
          </div>
        </div>
        <div className='w-full flex justify-end order-3 col-span-2 md:col-span-1'>
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
      </div>

      <div className='w-full overflow-auto hideScrollBar'>
        {/* table ==============>  */}
        {/* header --> */}
        <div className='w-full min-w-[750px] h-[40px] grid grid-cols-[1fr,4fr,1fr] border-b-[1px] borderColor'>
          {/* owner */}
          <p className='flex  justify-start w-full text-[14px] font-medium text-white/50'>
            Owner
          </p>
          <div className='w-full grid grid-cols-[1fr,3.5fr,1fr] sm:grid-cols-[1fr,2fr,1fr]'>
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
        {/* rows --->  */}
        <div className='w-full flex min-w-[750px] flex-col gap-[2px] max-h-[250px] sm:max-h-[350px] md:max-h-[480px] overflow-auto hideScrollBar'>
          {rowsData.map((item, index) => {
            return (
              <div
                key={index}
                className='w-full grid grid-cols-[1fr,4fr,1fr] min-h-[35px] justify-center items-center'
              >
                {/* owner */}
                <p className='text-[14px] items-center w-full flex justify-start text-white font-medium underline'>
                  {item.owner}
                </p>
                <div className='w-full h-full relative grid grid-cols-[1fr,3.5fr,1fr] sm:grid-cols-[1fr,2fr,1fr] z-20'>
                  {/* size */}
                  <p className='text-[14px] w-full items-center flex justify-end text-white font-medium'>
                    {item.size}
                  </p>
                  <div className='w-full grid grid-cols-2'>
                    {/* price1    */}
                    <p className='text-[14px] w-full flex justify-end items-center pr-1 text-green font-medium'>
                      {item.price1}
                    </p>
                    {/* price 2 */}
                    <p className='text-[14px] w-full flex items-center justify-start pl-1 text-red font-medium'>
                      {item.price2}
                    </p>
                  </div>
                  {/* size */}
                  <p className='text-[14px] w-full flex justify-start items-center pl-1 text-white font-medium'>
                    {item.size2}
                  </p>
                  {/* indicator ----->  */}
                  <div
                    className={`${item.portionOneWidth} absolute h-[35px] bg-green/25 top-0 -z-10 right-1/2 `}
                  ></div>
                  <div
                    className={`${item.portionTwoWidth} absolute h-[35px] bg-red/25 top-0 left-1/2 -z-10`}
                  ></div>
                </div>

                {/* owner   */}
                <p className='text-[14px] w-full flex justify-end items-center text-white font-medium underline'>
                  {item.owner2}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* spread row ====>  */}
      <div className='w-full h-[40px] bg-[#192431] rounded-[16px]  flex justify-between items-center'>
        <p className='text-white text-[14px] font-medium pl-4'>Spread</p>
        <p className='text-white text-[14px] font-medium'>
          0.00012 (0.00004%){' '}
        </p>
        <button className='flex justify-center h-full bg-[#012A36] px-2 rounded-[12px] items-center gap-1'>
          <p className='text-white text-[14px] font-medium'>$0.001</p>
          <Icons.arrowDown2 />
        </button>
      </div>
    </div>
  );
};

const rowsData = [
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[3%]',
    portionTwoWidth: 'w-[3%]',
  },
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[7%]',
    portionTwoWidth: 'w-[7%]',
  },
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[8%]',
    portionTwoWidth: 'w-[8%]',
  },
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[10%]',
    portionTwoWidth: 'w-[25%]',
  },
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[12%]',
    portionTwoWidth: 'w-[12%]',
  },
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[20%]',
    portionTwoWidth: 'w-[14%]',
  },
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[22%]',
    portionTwoWidth: 'w-[22%]',
  },
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[26%]',
    portionTwoWidth: 'w-[26%]',
  },
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[28%]',
    portionTwoWidth: 'w-[28%]',
  },
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[30%]',
    portionTwoWidth: 'w-[28%]',
  },
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[30%]',
    portionTwoWidth: 'w-[30%]',
  },
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[30%]',
    portionTwoWidth: 'w-[30%]',
  },
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[30%]',
    portionTwoWidth: 'w-[30%]',
  },
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[30%]',
    portionTwoWidth: 'w-[30%]',
  },
  {
    owner: '2h8x...Jk28',
    size: '20,249,888.12',
    price1: '20,249,888.12',
    price2: '20,249,888.12',
    size2: '0.1458721',
    owner2: '2h8x...Jk28',
    portionOneWidth: 'w-[30%]',
    portionTwoWidth: 'w-[30%]',
  },
];

export default OrderBook;
