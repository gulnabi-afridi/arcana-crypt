import React from 'react';
import ComponentWrapper from '../Wrappers/ComponentWrapper/ComponentWrapper';
import * as Icons from '../../../svg/Icons';
import Link from 'next/link';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Navibar = () => {
  return (
    <ComponentWrapper>
      <div className='w-full h-[80px] flex justify-between items-center'>
        {/* left portion ---------------->  */}
        <div className='flex gap-24 justify-center items-center'>
          {/* logo --> */}
          <Link href='/'>
            <Icons.logo />
          </Link>
          {/* links --> */}
          <div className='flex justify-center items-center gap-10'>
            {naviLinks.map((item, index) => {
              return (
                <Link
                  className='text-[16px] font-medium dark:text-foreground-100 text-foreground-900 relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:dark:bg-foreground-100 bg-foreground-900 hover:after:w-full after:duration-200'
                  key={index}
                  href={item.path}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        {/* right Portion --------------> */}
        <div className='flex gap-10 justify-center items-center'>
          <Link
            href='#'
            className='text-[16px] dark:text-foreground-100 from-gray-900 font-medium relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:dark:bg-foreground-100 bg-foreground-900 hover:after:w-full after:duration-200'
          >
            MM Bot
          </Link>
          {/* <ToggleTheme /> */}
          {/* button -----> */}
          <button className='px-[16px] py-[10px] text-[16px] dark:text-foreground-100 from-gray-900 font-medium dark:bg-primary-100 bg-primary-900 hover:opacity-80 active:translate-y-[2px] rounded-[12px]'>
            Trade on Zeta brev
          </button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

const naviLinks = [
  {
    name: 'Market',
    path: '#',
  },
  {
    name: 'Quick Buy',
    path: '#',
  },
];

export default Navibar;
