'use client';

import React, { useRef, useEffect, useState } from 'react';
// Import css
import '@klinecharts/pro/dist/klinecharts-pro.css';
import { useTheme } from 'next-themes';

const TradingWidget = () => {
  const { theme } = useTheme();
  const [backgroundColor, setBackgroundColor] = useState(
    'rgba(255, 255, 255, 0)'
  );

  useEffect(() => {
    setBackgroundColor(theme === 'dark' ? 'rgba(255, 255, 255, 0)' : '#1D1D20');
  }, [theme]);

  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInitializedRef = useRef<boolean>(false);
  const apiKey = 'Dj7335wndobLF3uODz735o1mwixibkFr';

  const [chartHeight, setChartHeight] = useState<number>();

  useEffect(() => {
    const computeChartHeight = () => {
      return window.innerWidth < 700 ? 300 : 450;
    };

    setChartHeight(computeChartHeight());

    // Optional: Re-compute chart height on window resize
    window.addEventListener('resize', () => {
      setChartHeight(computeChartHeight());
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', computeChartHeight);
    };
  }, []);

  useEffect(() => {
    // Create Instance
    import('@klinecharts/pro').then(({ KLineChartPro, DefaultDatafeed }) => {
      if (chartRef.current) {
        if (chartRef.current && !chartInitializedRef.current) {
          const chart = new KLineChartPro({
            container: chartRef.current,
            styles: {
              grid: {
                show: false,
              },
              indicator: {
                tooltip: {},
                lines: [],
              },
              separator: {
                fill: false,
              },
              xAxis: {
                show: true,
                size: 'auto',

                axisLine: {
                  show: true,
                  color: '#676767',
                },
              },

              yAxis: {
                show: true,
                size: 'auto',
                axisLine: {
                  show: true,
                  color: '#676767',
                },
              },
              candle: {
                priceMark: {
                  last: {
                    line: {
                      show: false,
                    },
                    text: {
                      show: false,
                    },
                  },
                },
              },

              crosshair: {
                horizontal: {
                  text: {
                    show: true,
                  },
                  line: {
                    show: true,
                  },
                },
              },
            },
            locale: 'en',
            mainIndicators: [],
            subIndicators: [],
            symbol: {
              exchange: 'XNYS',
              market: 'stocks',
              shortName: 'BABA',
              ticker: 'BABA',
              priceCurrency: 'usd',
              type: 'ADRC',
            },
            // Default period
            period: { multiplier: 15, timespan: 'minute', text: '0m' },
            // The default data access is used here. If the default data is also used in actual use, you need to go to the https://polygon.io/ apply for API key
            datafeed: new DefaultDatafeed(apiKey),
          });
          chartInitializedRef.current = true;
        }
      }
    });
  }, []);

  return (
    <div
      ref={chartRef}
      style={{
        width: '100%',
        height: chartHeight,
        background: backgroundColor,
        borderRadius: '8px',
      }}
    ></div>
  );
};

export default TradingWidget;
