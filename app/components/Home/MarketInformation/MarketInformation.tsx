import React from 'react';
import Image from 'next/image';
import * as Icons from '../../../svg/Icons';
import Link from 'next/link';

const MarketInformation = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full max-w-[600px] lg:max-w-[650px] flex flex-col bg-[#09303c] border-[1px] borderColor rounded-[16px] '>
        <div className='w-full h-[60px] flex justify-between items-center px-4 sm:px-8'>
          <p className='text-[16px] sm:text-[20px] text-white font-semibold'>
            Market Information
          </p>
          <p className='text-[10px] sm:text-[16px] font-semibold text-white/50'>
            MCAP $2,201,887,549
          </p>
        </div>
        {/* trade ---->   */}
        <div className='w-full bg-[#012A36] py-4 flex justify-between items-center border-b-[1px] borderColor px-4 sm:px-8'>
          <p className='text-[14px] font-normal text-white'>Trade</p>
          <div className='flex flex-wrap justify-center items-center gap-3'>
            {tradeInCoin.map((item, index) => {
              return (
                <div
                  key={index}
                  className='bg-[#E3DB680D] px-[5px] h-[25px] flex justify-center items-center rounded-[4px]'
                >
                  {index === 2 ? (
                    <Icons.prism />
                  ) : (
                    <Image
                      src={item.src}
                      alt=''
                      width={item.width}
                      height={item.height}
                      className='object-contain'
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* stats ---> */}
        <div className='w-full bg-transparent flex flex-col gap-4 sm:gap-8 px-4 sm:px-8 py-4 border-b-[1px] borderColor'>
          <div className='flex sm:gap-0 gap-3 justify-between items-center'>
            {stats.map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col gap-2 sm:gap-3 items-start'
                >
                  <p className='text-[12px] sm:text-[14px] text-white/50 font-medium'>
                    {item.value}
                  </p>
                  <p className='text-[18px]  sm:text-[24px] text-white font-semibold'>
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
          {/* base token + quote token ---> */}
          <div className='w-full flex flex-wrap justify-start items-center gap-3 sm:gap-4'>
            <div className='flex flex-col gap-2'>
              <p className='text-[12px] sm:text-[14px] text-white/50 font-medium'>
                Base token
              </p>
              <div className='flex justify-center items-center bg-[#012A36] py-[6px] px-[8px] rounded-[8px] gap-2'>
                <Image
                  src='/assets/bonk.svg'
                  alt=''
                  width={32}
                  height={32}
                  className='object-fill'
                />
                <p className='text-[16px] sm:text-[20px] text-white font-medium'>
                  Pyth network
                </p>
                <button>
                  <Icons.share ClassName='w-[20px] h-[20px]' />
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-[12px] sm:text-[14px] text-white/50 font-medium'>
                Quote token
              </p>
              <div className='flex justify-center items-center bg-[#012A36] py-[6px] px-[8px] rounded-[8px] gap-2'>
                <Image
                  src='/assets/crypto.svg'
                  alt=''
                  width={32}
                  height={32}
                  className='object-fill'
                />
                <p className='text-[16px] sm:text-[20px] text-white font-medium'>
                  USD Coin
                </p>
                <button>
                  <Icons.share ClassName='w-[20px] h-[20px]' />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* links ---->  */}
        <div className='w-full flex flex-col py-4 px-4 sm:px-8'>
          {links.map((item, index) => {
            return (
              <div
                key={index}
                className='w-full h-[45px] flex justify-between items-center border-b-[1px] borderColor'
              >
                <p className='text-[14px] min-w-[90px] font-medium text-white'>
                  {item.name}
                </p>
                <div className='flex justify-center items-center gap-1'>
                  <Link
                    href='#'
                    className='underline text-[12px] break-all text-white font-medium  '
                  >
                    {item.link}
                  </Link>
                  <button>
                    <Icons.copy />
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

const tradeInCoin = [
  {
    src: '/assets/openBook.svg',
    width: 100,
    height: 19,
  },
  {
    src: '/assets/dropCopy.svg',
    width: 63,
    height: 19,
  },
  {
    src: '/assets/sloape.svg',
    width: 100,
    height: 19,
  },
  {
    src: '/assets/sloape2.svg',
    width: 80,
    height: 19,
  },
  {
    src: '/assets/lab.svg',
    width: 60,
    height: 19,
  },
];
const stats = [
  {
    name: '24h USD Volume',
    value: '$68,019,453',
  },
  {
    name: '24h High',
    value: '$0.409230',
  },
  {
    name: '24h Low',
    value: '$0.381290',
  },
];

const links = [
  {
    path: '#',
    name: 'Market ID',
    link: '9Lyhks5bQQxb9EyyX55NtgKQzpM4WK7JCmeaWuQ5MoXD',
  },
  {
    path: '#',
    name: 'Base Mint',
    link: '9Lyhks5bQQxb9EyyX55NtgKQzpM4WK7JCmeaWuQ5MoXD',
  },
  {
    path: '#',
    name: 'Quote Mint',
    link: '9Lyhks5bQQxb9EyyX55NtgKQzpM4WK7JCmeaWuQ5MoXD',
  },
  {
    path: '#',
    name: 'Bids',
    link: '9Lyhks5bQQxb9EyyX55NtgKQzpM4WK7JCmeaWuQ5MoXD',
  },
  {
    path: '#',
    name: 'Asks',
    link: '9Lyhks5bQQxb9EyyX55NtgKQzpM4WK7JCmeaWuQ5MoXD',
  },
  {
    path: '#',
    name: 'Event Queue',
    link: '9Lyhks5bQQxb9EyyX55NtgKQzpM4WK7JCmeaWuQ5MoXD',
  },
];

export default MarketInformation;
