import React from 'react';
import * as Icons from '../../../svg/Icons';

const TradeHistory = () => {
  return (
    <div className='w-full flex flex-col gap-4 items-start'>
      <div className='flex justify-center items-center gap-3 px-8'>
        <p className='text-[20px] text-white font-medium'>Trade history</p>
        <p className='text-green text-[12px] font-medium'>• Live</p>
      </div>
      {/* table ----->  */}
      <div className='w-full flex flex-col cardShadow rounded-[16px]'>
        {/* table header -->  */}
        <div className='w-full h-[40px] grid grid-cols-[1fr,1.5fr,1.5fr,1.5fr,1.5fr,1.5fr,1.5fr] px-8 justify-center items-center'>
          {historyTableHeader.map((item, index) => {
            return (
              <p
                className={`flex ${
                  item === 'Transaction' ? 'justify-end' : 'justify-start'
                }  text-[14px] font-medium capitalize text-white/50 items-center w-full`}
              >
                {item}
              </p>
            );
          })}
        </div>
        {/* table row ---->  */}
        <div className='w-full h-[40px] grid grid-cols-[1fr,1.5fr,1.5fr,1.5fr,1.5fr,1.5fr,1.5fr] px-8 justify-center items-center'>
          {/* button */}
          <div className='w-full flex justify-start items-center'>
            <button className='text-[12px] font-medium text-white py-[2px] px-[12px] bg-red rounded-[12px]'>
              Sell
            </button>
          </div>
          {/* timestamp  */}
          <p className='text-[14px] text-white font-medium w-full text-left'>
            23:45:24
          </p>
          {/* price */}
          <p className='text-[14px] text-white font-medium w-full text-left'>
            $0.148992
          </p>
          {/* size */}
          <p className='text-[14px] text-white font-medium w-full text-left'>
            2,265,421.00
          </p>
          {/* taker */}
          <div className='w-full flex text-white gap-1 justify-start items-center'>
            <p>9nns...xN21</p>
            <button>
              <Icons.share />
            </button>
          </div>
          {/* maker */}
          <div className='w-full flex text-white gap-1 justify-start items-center'>
            <p>9nns...xN21</p>
            <button>
              <Icons.share />
            </button>
          </div>
          {/* Transaction */}
          <div className='w-full flex text-white gap-1 justify-end items-center'>
            <p>9nns...xN21</p>
            <button>
              <Icons.share />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const historyTableHeader = [
  'trade',
  'Timestamp',
  'Price',
  'Size',
  'Taker',
  'Maker',
  'Transaction',
];

const historyTableRows = [
  {
    value: 'sell',
  },
  {
    value: '$0.148992',
  },
  {
    value: '2,265,421.00',
  },
  {
    value: '9nns...xN21',
  },
  {
    value: '2h8x...DbwY',
  },
  {
    value: '9xcK...Hwi8',
  },
];

export default TradeHistory;
