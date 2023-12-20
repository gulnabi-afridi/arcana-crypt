'use client';

import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import 'highcharts/modules/accessibility';
import Image from 'next/image';

const MarketDepth = () => {
  useEffect(() => {
    Highcharts.chart('container', {
      chart: {
        type: 'area',
        zoomType: 'xy',
      },
      title: {
        text: '',
      },
      xAxis: {
        minPadding: 0,
        maxPadding: 0,
        plotLines: [
          {
            color: '#ffffff',
            value: 0.1523,
            width: 1,
            label: {
              rotation: 90,
            },
          },
        ],
        title: {
          text: '',
        },
      },
      yAxis: [
        {
          color: '#ffffff',
          lineWidth: 1,
          gridLineWidth: 0,
          title: null,
          tickWidth: 1,
          tickLength: 5,
          tickPosition: 'inside',

          labels: {
            align: 'left',
            x: 8,
          },
        },
        {
          opposite: true,
          linkedTo: 0,
          lineWidth: 1,
          gridLineWidth: 0,
          title: null,
          tickWidth: 1,
          tickLength: 5,
          tickPosition: 'inside',
          labels: {
            align: 'right',
            x: -8,
          },
        },
      ],
      legend: {
        enabled: false,
      },
      plotOptions: {
        area: {
          fillOpacity: 0.5,
          lineWidth: 1,
          step: 'center',
        },
      },
      tooltip: {
        headerFormat:
          '<span style="font-size=10px;">Price: {point.key}</span><br/>',
        valueDecimals: 2,
      },
      series: [
        {
          name: 'coinOne',
          data: [
            [0.1524, 0.948665],
            [0.1539, 35.510715],
            [0.154, 39.883437],
            [0.1541, 40.499661],
            [0.1545, 43.262994000000006],
            [0.1547, 60.14799400000001],
            [0.1553, 60.30799400000001],
            [0.1558, 60.55018100000001],
            [0.1564, 68.381696],
            [0.1567, 69.46518400000001],
            [0.1569, 69.621464],
            [0.157, 70.398015],
            [0.1574, 70.400197],
            [0.1575, 73.199217],
            [0.158, 77.700017],
            [0.1583, 79.449017],
            [0.1588, 79.584064],
            [0.159, 80.584064],
            [0.16, 81.58156],
            [0.1608, 83.38156],
          ],
          color: '#F9564F',
        },
        {
          name: 'coinTwo',
          data: [
            [0.1435, 242.521842],
            [0.1436, 206.49862099999999],
            [0.1437, 205.823735],
            [0.1438, 197.33275],
            [0.1439, 153.677454],
            [0.144, 146.007722],
            [0.1442, 82.55212900000001],
            [0.1443, 59.152814000000006],
            [0.1444, 57.942260000000005],
            [0.1445, 57.483850000000004],
            [0.1446, 52.39210800000001],
            [0.1447, 51.867208000000005],
            [0.1448, 44.104697],
            [0.1449, 40.131217],
            [0.145, 31.878217],
            [0.1451, 22.794916999999998],
            [0.1453, 12.345828999999998],
            [0.1454, 10.035642],
            [0.148, 9.326642],
            [0.1522, 3.76317],
          ],
          color: '#4EDF87',
        },
      ],
    });
  }, []);

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='h-[340px] w-full max-w-[400px] pt-4 flex flex-col justify-between items-center cardShadow rounded-[16px]'>
        {/* coins -----> */}
        <div className='flex flex-col gap-4 items-start w-full px-5'>
          <p className='text-[20px] text-white '>Market Depth</p>
          <div className='w-full flex justify-between items-center'>
            {/* coin 1 ---> */}
            <div className='flex justify-center bg-success-100/60 py-[3px] px-[10px] rounded-[16px] items-center gap-1'>
              <Image
                src='/assets/bonk.svg'
                alt=''
                className='object-fill'
                width={16}
                height={16}
              />
              <p className='text-[12px] text-white font-medium]'>10,524.18</p>
            </div>
            {/* coin 2 -->  */}
            <div className='flex justify-center bg-danger-100/60 py-[3px] px-[10px] rounded-[16px] items-center gap-1'>
              <Image
                src='/assets/crypto.svg'
                alt=''
                className='object-fill'
                width={16}
                height={16}
              />
              <p className='text-[12px] text-white font-medium]'>10,524.18</p>
            </div>
          </div>
        </div>

        <div
          id='container'
          className='w-full px-3 h-[70%] bg-transparent'
        ></div>
      </div>
    </div>
  );
};

const AAPL_data = {
  buy: [
    { price: 132.79743, volume: 339 },
    { price: 132.79742, volume: 713 },
    { price: 132.79741, volume: 421 },
    { price: 132.7974, volume: 853 },
    { price: 132.79739, volume: 152 },
    { price: 132.79738, volume: 243 },
    { price: 132.79737, volume: 296 },
    { price: 132.79736, volume: 123 },
    { price: 132.79735, volume: 158 },
    { price: 132.79734, volume: 238 },
    { price: 132.79733, volume: 164 },
    { price: 132.79732, volume: 273 },
    { price: 132.79731, volume: 35 },
    { price: 132.79729, volume: 30 },
    { price: 132.79726, volume: 29 },
    { price: 132.79722, volume: 484 },
    { price: 132.79721, volume: 458 },
    { price: 132.7972, volume: 244 },
    { price: 132.79719, volume: 10 },
    { price: 132.79698, volume: 124 },
  ],
  sell: [
    { price: 132.79744, volume: 847 },
    { price: 132.79745, volume: 2412 },
    { price: 132.79746, volume: 635 },
    { price: 132.79747, volume: 323 },
    { price: 132.79748, volume: 828 },
    { price: 132.79749, volume: 322 },
    { price: 132.7975, volume: 268 },
    { price: 132.79751, volume: 92 },
    { price: 132.79752, volume: 249 },
    { price: 132.79753, volume: 189 },
    { price: 132.79754, volume: 179 },
    { price: 132.79755, volume: 122 },
    { price: 132.79756, volume: 28 },
    { price: 132.7976, volume: 114 },
    { price: 132.79764, volume: 27 },
    { price: 132.79767, volume: 10 },
    { price: 132.79772, volume: 31 },
    { price: 132.79785, volume: 484 },
    { price: 132.79786, volume: 364 },
    { price: 132.79787, volume: 244 },
  ],
};

export default MarketDepth;
