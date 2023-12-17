import InfoSlider from './components/Home/InfoSlider/InfoSlider';
import ComponentWrapper from './components/shared/Wrappers/ComponentWrapper/ComponentWrapper';
import TradingWidget from './components/Home/TradingWidget/TradingWidget';

export default function Home() {
  return (
    <main className='w-full'>
      <InfoSlider />
      <ComponentWrapper>
        <div className='w-full flex flex-col'>
          {/* trading chart + Buy and Sell portion ========>  */}
          <div className='w-full grid h-[400px] grid-cols-[1.7fr,1fr] justify-start items-center'>
            {/* trading chart ----->  */}
            <div className='w-full h-[400px] '>
              <TradingWidget />
            </div>
            {/* buy and sell ------->  */}
            <div className='w-full h-[400px] '></div>
          </div>
        </div>
      </ComponentWrapper>
    </main>
  );
}
