import React from 'react';
import InfoSlider from './components/Home/InfoSlider/InfoSlider';
import ComponentWrapper from './components/shared/Wrappers/ComponentWrapper/ComponentWrapper';
import TradingWidget from './components/Home/TradingWidget/TradingWidget';
import BuyAndSell from './components/Home/BuyAndSell/BuyAndSell';
import OrderBook from './components/Home/OrderBook/OrderBook';
import MarketVolume from './components/Home/MarketVolume/MarketVolume';
import MarketDepth from './components/Home/MarketDepth/MarketDepth';

export default function Home() {
  return (
    <main className='w-full'>
      <InfoSlider />
      <ComponentWrapper>
        <div className='w-full flex flex-col'>
          {/* trading chart + Buy and Sell portion ========>  */}
          <div className='w-full grid grid-cols-[1.9fr,1fr] justify-center items-start py-6'>
            {/* trading chart ----->  */}
            <div className='w-full bg-transparent h-full'>
              <TradingWidget />
            </div>
            {/* buy and sell ------->  */}
            <div className='w-full flex justify-center items-center'>
              <BuyAndSell />
            </div>
          </div>
          {/* order book + market volume + market depth section =========> */}
          <div className='w-full grid grid-cols-[1.9fr,1fr] gap-0 justify-center items-start pt-6 pb-20'>
            {/* order book ---> */}
            <OrderBook />
            {/* market volume ----->  */}
            <div className='w-full gap-y-4 flex flex-col'>
              <MarketVolume />
              <MarketDepth />
            </div>
          </div>
        </div>
      </ComponentWrapper>
      <div className='w-full bg-[#01171E] py-10'>
        <ComponentWrapper>{/* trade history ===========>  */}</ComponentWrapper>
      </div>
    </main>
  );
}
