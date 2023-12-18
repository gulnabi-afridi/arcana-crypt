import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Icons from '../../../svg/Icons';

const AdditionalDetails = () => {
  return (
    <div className='w-full h-fit flex flex-col bg-[#09303c] border-[1px] borderColor rounded-[16px]'>
      <div className='w-full h-[60px] flex justify-start border-b-[1px] borderColor items-center px-8'>
        <p className='text-[20px] text-white font-semibold'>
          Additional details
        </p>
      </div>
      {/*  */}
      <div className='flex flex-col items-start gap-4 px-8 py-4 border-b-[1px] borderColor'>
        <div className='flex flex-col gap-2'>
          <p className='text-[14px] text-white/50 font-medium'>Base deposits</p>
          <div className='flex gap-2 justify-center items-center'>
            <Image
              src='/assets/bonk.svg'
              alt=''
              width={32}
              height={32}
              className='object-fill'
            />
            <p className='text-white text-[24px] font-semibold'>
              1,504,458,484,676.00
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[14px] text-white/50 font-medium'>
            Quote deposits
          </p>
          <div className='flex gap-2 justify-center items-center'>
            <Image
              src='/assets/crypto.svg'
              alt=''
              width={32}
              height={32}
              className='object-fill'
            />
            <p className='text-white text-[24px] font-semibold'>
              744,488,984.45
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='w-full flex flex-col px-8'>
        {additionalDetail.map((item, index) => {
          return (
            <div
              key={index}
              className='w-full h-[45px] border-b-[1px] borderColor flex justify-between items-center'
            >
              <p className='text-[14px] text-white font-medium'>{item.name}</p>
              <p className='text-[16px] text-white font-medium'>{item.value}</p>
            </div>
          );
        })}
        <div className='w-full h-[45px] flex justify-between items-center'>
          <p className='text-[14px] font-medium text-white'>Permalink</p>
          <div className='flex justify-center items-center gap-1'>
            <Link
              href='#'
              className='underline text-[12px] text-white font-medium'
            >
              https://arcana.markets/perma/1293uasco9u102h119204hn
            </Link>
            <button>
              <Icons.copy />
            </button>
          </div>
        </div>
        <div className='w-full pt-3 pb-4 flex justify-between items-center'>
          <p className='text-[14px] text-white font-medium'>Tools</p>
          <div className='flex justify-center items-center gap-2'>
            {/* Crank Market + List new Market --->  */}
            <div className='flex justify-center items-center gap-3'>
              <div className='flex justify-center items-center bg-[#012A36] gap-1 py-2 px-3 rounded-[12px]'>
                <Icons.crank />
                <p className='text-[14px] text-white font-medium '>
                  Crank Market
                </p>
              </div>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <div className='flex justify-center items-center bg-[#012A36] gap-1 py-2 px-3 rounded-[12px]'>
                <Icons.list />
                <p className='text-[14px] text-white font-medium '>
                  List new Market
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const additionalDetail = [
  {
    name: 'Base Lot Size',
    value: '100',
  },
  {
    name: 'Quote Lot Size',
    value: '10',
  },
  {
    name: 'Base Decimals',
    value: '2',
  },
  {
    name: 'Quote Decimals',
    value: '6',
  },
];

export default AdditionalDetails;
