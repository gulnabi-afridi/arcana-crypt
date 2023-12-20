import React from 'react';
import * as Icons from '../../../svg/Icons';

const TradeHistory = () => {
  return (
    <div className='w-full flex flex-col gap-4 items-start'>
      <div className='flex justify-center items-center gap-3 sm:px-8'>
        <p className='text-[20px] text-white font-medium'>Trade history</p>
        <p className='text-green text-[12px] font-medium'>• Live</p>
      </div>
      {/* table ----->  */}
      <div className='w-full flex flex-col overflow-auto hideScrollBar bg-[#09303c] border-[1px] borderColor rounded-[16px]'>
        {/* table header -->  */}
        <div className='w-full min-w-[980px] h-[40px] grid grid-cols-[1fr,1.5fr,1.5fr,1.5fr,1.5fr,1.5fr,1.5fr] px-4 sm:px-8 justify-center items-center'>
          {historyTableHeader.map((item, index) => {
            return (
              <p
                key={index}
                className={`flex ${
                  item === 'Transaction' ? 'justify-end' : 'justify-start'
                }  text-[14px] font-medium capitalize text-white/50 items-center w-full`}
              >
                {item}
              </p>
            );
          })}
        </div>
        {/* table rows ---->  */}
        <div className='w-full min-w-[980px] max-h-[200px] sm:max-h-[250px] overflow-auto hideScrollBar'>
          {historyTableRows.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-full ${
                  index + 1 === historyTableRows.length
                    ? ' rounded-b-[16px]'
                    : 'border-b-[1px] borderColor'
                } ${
                  item.trade === 'sell' ? 'bg-[#012a36]' : ''
                } h-[40px] grid grid-cols-[1fr,1.5fr,1.5fr,1.5fr,1.5fr,1.5fr,1.5fr] px-4 sm:px-8 justify-center items-center`}
              >
                {/* button */}
                <div className='w-full flex justify-start items-center'>
                  <button
                    className={`text-[12px] capitalize font-medium text-white py-[2px] px-[12px] ${
                      item.trade === 'sell' ? 'bg-red' : 'bg-green'
                    } rounded-[12px]`}
                  >
                    {item.trade}
                  </button>
                </div>
                {/* timestamp  */}
                <p className='text-[14px] text-white font-medium w-full text-left'>
                  {item.timeStamp}
                </p>
                {/* price */}
                <p className='text-[14px] text-white font-medium w-full text-left'>
                  {item.price}
                </p>
                {/* size */}
                <p className='text-[14px] text-white font-medium w-full text-left'>
                  {item.size}
                </p>
                {/* taker */}
                <div className='w-full flex text-white gap-1 justify-start items-center'>
                  <p className='text-[14px] text-white font-medium'>
                    {item.taker}
                  </p>
                  <button>
                    <Icons.share />
                  </button>
                </div>
                {/* maker */}
                <div className='w-full flex text-white gap-1 justify-start items-center'>
                  <p className='text-[14px] text-white font-medium'>
                    {item.maker}
                  </p>
                  <button>
                    <Icons.share />
                  </button>
                </div>
                {/* Transaction */}
                <div className='w-full flex text-white gap-1 justify-end items-center'>
                  <p className='text-[14px] text-white font-medium'>
                    {item.transaction}
                  </p>
                  <button>
                    <Icons.share />
                  </button>
                </div>
              </div>
            );
          })}
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
    trade: 'sell',
    timeStamp: '$0.148992',
    price: '2,265,421.00',
    size: '9nns...xN21',
    taker: '2h8x...DbwY',
    maker: '9xcK...Hwi8',
    transaction: '9xcK...Hwi8',
  },
  {
    trade: 'sell',
    timeStamp: '$0.148992',
    price: '2,265,421.00',
    size: '9nns...xN21',
    taker: '2h8x...DbwY',
    maker: '9xcK...Hwi8',
    transaction: '9xcK...Hwi8',
  },
  {
    trade: 'sell',
    timeStamp: '$0.148992',
    price: '2,265,421.00',
    size: '9nns...xN21',
    taker: '2h8x...DbwY',
    maker: '9xcK...Hwi8',
    transaction: '9xcK...Hwi8',
  },
  {
    trade: 'buy',
    timeStamp: '$0.148992',
    price: '2,265,421.00',
    size: '9nns...xN21',
    taker: '2h8x...DbwY',
    maker: '9xcK...Hwi8',
    transaction: '9xcK...Hwi8',
  },
  {
    trade: 'buy',
    timeStamp: '$0.148992',
    price: '2,265,421.00',
    size: '9nns...xN21',
    taker: '2h8x...DbwY',
    maker: '9xcK...Hwi8',
    transaction: '9xcK...Hwi8',
  },
  {
    trade: 'sell',
    timeStamp: '$0.148992',
    price: '2,265,421.00',
    size: '9nns...xN21',
    taker: '2h8x...DbwY',
    maker: '9xcK...Hwi8',
    transaction: '9xcK...Hwi8',
  },
  {
    trade: 'sell',
    timeStamp: '$0.148992',
    price: '2,265,421.00',
    size: '9nns...xN21',
    taker: '2h8x...DbwY',
    maker: '9xcK...Hwi8',
    transaction: '9xcK...Hwi8',
  },
  {
    trade: 'buy',
    timeStamp: '$0.148992',
    price: '2,265,421.00',
    size: '9nns...xN21',
    taker: '2h8x...DbwY',
    maker: '9xcK...Hwi8',
    transaction: '9xcK...Hwi8',
  },
  {
    trade: 'buy',
    timeStamp: '$0.148992',
    price: '2,265,421.00',
    size: '9nns...xN21',
    taker: '2h8x...DbwY',
    maker: '9xcK...Hwi8',
    transaction: '9xcK...Hwi8',
  },
];

export default TradeHistory;
