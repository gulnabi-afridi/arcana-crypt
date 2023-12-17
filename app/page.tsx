import React from 'react';
import InfoSlider from './components/Home/InfoSlider/InfoSlider';
import ComponentWrapper from './components/shared/Wrappers/ComponentWrapper/ComponentWrapper';
import TradingWidget from './components/Home/TradingWidget/TradingWidget';
import BuyAndSell from './components/Home/BuyAndSell/BuyAndSell';

export default function Home() {
  return (
    <main className='w-full'>
      <InfoSlider />
      <ComponentWrapper>
        <div className='w-full flex flex-col'>
          {/* trading chart + Buy and Sell portion ========>  */}
          <div className='w-full grid grid-cols-[1.8fr,1fr] justify-center items-start py-6'>
            {/* trading chart ----->  */}
            <div className='w-full bg-transparent h-full'>
              <TradingWidget />
            </div>
            {/* buy and sell ------->  */}
            <div className='w-full flex justify-center items-center'>
              <BuyAndSell />
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </main>
  );
}
