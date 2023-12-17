import React from 'react';

interface Props {
  fill?: string;
  stroke?: string;
  ClassName?: string;
}

export const logo: React.FC<Props> = ({
  fill,
  stroke = '',
  ClassName = 'w-[140px] h-[37px]',
}: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={ClassName}
    viewBox='0 0 140 37'
    fill={fill}
  >
    <path
      d='M54.6603 10.4103H58.7045V26.2336H54.6603V24.3662C53.4477 25.9057 51.7446 26.677 49.5479 26.677C47.4567 26.677 45.6633 25.8693 44.1708 24.2569C42.6753 22.6414 41.929 20.6646 41.929 18.3235C41.929 15.9823 42.6753 14.0025 44.1708 12.3901C45.6663 10.7747 47.4597 9.96997 49.5479 9.96997C51.7446 9.96997 53.4477 10.7412 54.6603 12.2808V10.4103ZM47.1949 21.5331C48.0103 22.3681 49.0454 22.7841 50.3002 22.7841C51.555 22.7841 52.5931 22.3681 53.4206 21.5331C54.2451 20.7011 54.6603 19.6292 54.6603 18.3204C54.6603 17.0117 54.2481 15.9428 53.4206 15.1078C52.5931 14.2758 51.555 13.8567 50.3002 13.8567C49.0454 13.8567 48.0103 14.2727 47.1949 15.1078C46.3794 15.9428 45.9732 17.0117 45.9732 18.3204C45.9732 19.6292 46.3794 20.7011 47.1949 21.5331Z'
      fill='white'
    />
    <path
      d='M65.6732 13.1311C66.0493 12.12 66.6722 11.3578 67.5388 10.8537C68.4054 10.3466 69.3743 10.0946 70.4395 10.0946V14.6524C69.2058 14.5036 68.1045 14.7587 67.1295 15.4116C66.1576 16.0644 65.6701 17.1515 65.6701 18.6698V26.2338H61.626V10.4104H65.6701V13.1311H65.6732Z'
      fill='white'
    />
    <path
      d='M79.3973 26.6772C77.0352 26.6772 75.0642 25.8755 73.4845 24.2722C71.9047 22.6689 71.1163 20.6861 71.1163 18.3237C71.1163 15.9612 71.9047 13.9784 73.4845 12.3751C75.0642 10.7718 77.0321 9.97015 79.3973 9.97015C80.9229 9.97015 82.313 10.3406 83.5678 11.0785C84.8226 11.8164 85.7735 12.8093 86.4204 14.0543L82.9389 16.11C82.626 15.4572 82.1505 14.9379 81.5126 14.5584C80.8747 14.1788 80.1586 13.9875 79.3642 13.9875C78.1515 13.9875 77.1465 14.3944 76.3521 15.2051C75.5577 16.0189 75.1605 17.0574 75.1605 18.3237C75.1605 19.5686 75.5577 20.598 76.3521 21.4088C77.1465 22.2226 78.1485 22.6264 79.3642 22.6264C80.1796 22.6264 80.9048 22.4412 81.5427 22.0738C82.1806 21.7063 82.6561 21.1932 82.969 20.5403L86.4806 22.5657C85.7915 23.8107 84.8196 24.8067 83.5648 25.5567C82.313 26.3037 80.9229 26.6772 79.3973 26.6772Z'
      fill='white'
    />
    <path
      d='M99.712 10.4105H103.756V26.2338H99.712V24.3664C98.4994 25.9059 96.7963 26.6772 94.5996 26.6772C92.5084 26.6772 90.715 25.8694 89.2225 24.257C87.727 22.6416 86.9807 20.6648 86.9807 18.3237C86.9807 15.9825 87.727 14.0027 89.2225 12.3903C90.718 10.7748 92.5114 9.97015 94.5996 9.97015C96.7963 9.97015 98.4994 10.7414 99.712 12.281V10.4105ZM92.2496 21.5333C93.065 22.3683 94.1001 22.7843 95.3549 22.7843C96.6097 22.7843 97.6478 22.3683 98.4753 21.5333C99.2998 20.7013 99.715 19.6294 99.715 18.3206C99.715 17.0119 99.3028 15.943 98.4753 15.108C97.6478 14.276 96.6097 13.8569 95.3549 13.8569C94.1001 13.8569 93.065 14.2729 92.2496 15.108C91.4341 15.943 91.0279 17.0119 91.0279 18.3206C91.0249 19.6294 91.4341 20.7013 92.2496 21.5333Z'
      fill='white'
    />
    <path
      d='M115.398 9.96716C117.113 9.96716 118.528 10.5472 119.647 11.7071C120.766 12.8671 121.326 14.4703 121.326 16.517V26.2339H117.282V17.0241C117.282 15.9704 116.999 15.1627 116.436 14.604C115.871 14.0452 115.118 13.7659 114.179 13.7659C113.135 13.7659 112.299 14.0938 111.67 14.7467C111.044 15.3995 110.728 16.3834 110.728 17.6891V26.2339H106.681V10.4105H110.728V12.1838C111.709 10.7051 113.268 9.96716 115.398 9.96716Z'
      fill='white'
    />
    <path
      d='M135.956 10.4105H140V26.2338H135.956V24.3664C134.743 25.9059 133.04 26.6772 130.844 26.6772C128.752 26.6772 126.959 25.8694 125.466 24.257C123.971 22.6416 123.225 20.6648 123.225 18.3237C123.225 15.9825 123.971 14.0027 125.466 12.3903C126.962 10.7748 128.755 9.97015 130.844 9.97015C133.04 9.97015 134.743 10.7414 135.956 12.281V10.4105ZM128.493 21.5333C129.309 22.3683 130.344 22.7843 131.599 22.7843C132.854 22.7843 133.892 22.3683 134.719 21.5333C135.544 20.7013 135.959 19.6294 135.959 18.3206C135.959 17.0119 135.547 15.943 134.719 15.108C133.892 14.276 132.854 13.8569 131.599 13.8569C130.344 13.8569 129.309 14.2729 128.493 15.108C127.678 15.943 127.272 17.0119 127.272 18.3206C127.269 19.6294 127.678 20.7013 128.493 21.5333Z'
      fill='white'
    />
    <path
      d='M8.73339 22.5742L8.00561 26.0254L2.61968 22.4895L0 19.595V16.9929L6.11206 14.223L8.44689 13.9804L8.73339 22.5742Z'
      fill='#7B2CBF'
    />
    <path
      d='M34.6391 20.5591V23.2027L32.4772 25.386L27.0304 27.2321L22.2059 27.5262L22.1351 27.5195L24.7021 23.9172L24.9507 18.2528L21.7482 15.1472L20.533 14.6188L19.1367 14.0107L20.7092 14.1386L27.8207 16.1957L32.1874 18.2943L34.6391 20.5591Z'
      fill='#7B2CBF'
    />
    <path
      d='M34.6388 20.559L32.1871 18.2942L27.8204 16.1956L20.7089 14.1385L19.1364 14.0106H19.1348L18.4481 13.9541L12.9733 13.5088L10.1363 13.8046L8.44689 13.9807L6.11206 14.2233L0 16.9932L1.19541 15.1438L7.4853 12.5019L9.06271 12.4371L14.6792 12.2078L21.9158 13.007L26.2957 14.3512L28.6108 15.0624L32.9775 17.8738L34.6388 20.559Z'
      fill='#7B2CBF'
    />
    <path
      d='M19.2812 15.8035L18.4481 13.9542L12.9749 13.5089L10.1378 13.8046L9.80029 22.5463L10.5215 23.4984L12.5451 22.1027L14.0698 22.0462L17.4453 23.7045L19.6698 22.435L19.2812 15.8035ZM12.5435 20.2616C12.5435 20.8565 12.066 21.3383 11.4765 21.3383C10.887 21.3383 10.4095 20.8565 10.4095 20.2616V19.0586C10.4095 18.4638 10.887 17.9819 11.4765 17.9819C11.7712 17.9819 12.038 18.1032 12.2306 18.2976C12.4233 18.492 12.5418 18.7612 12.5418 19.0586V20.2616H12.5435ZM18.2241 20.2616C18.2241 20.8565 17.7466 21.3383 17.1572 21.3383C16.5677 21.3383 16.0902 20.8565 16.0902 20.2616V19.0586C16.0902 18.4638 16.5677 17.9819 17.1572 17.9819C17.4519 17.9819 17.7186 18.1032 17.9113 18.2976C18.1039 18.492 18.2241 18.7612 18.2241 19.0586V20.2616Z'
      fill='#FFE97F'
    />
    <g filter='url(#filter0_d_1256_8038)'>
      <path
        d='M10.5193 23.4982L17.4431 23.7043L19.6676 22.4348L19.2806 15.8034L18.4475 13.954L19.1341 14.0105H19.1358L20.532 14.6186L21.4146 22.5744L18.9612 27.1837L15.9348 32.8697L15.0934 35.5L10.5193 31.7215L7.8584 26.7284L8.00495 26.0255L8.73273 22.5744L8.44622 13.9806L10.1356 13.8044L9.79971 22.5461L10.5193 23.4982Z'
        fill='white'
      />
    </g>
    <path
      d='M24.9506 18.2524L24.702 23.9168L22.135 27.5191L21.2919 28.7006L19.8775 29.749L15.0942 35.4998L15.9356 32.8695L18.962 27.1835L21.4154 22.5742L20.5329 14.6185L21.748 15.1469L24.9506 18.2524Z'
      fill='#BFC6CD'
    />
    <path
      d='M12.5441 19.0582V20.2612C12.5441 20.856 12.0666 21.3379 11.4771 21.3379C10.8877 21.3379 10.4102 20.856 10.4102 20.2612V19.0582C10.4102 18.4633 10.8877 17.9814 11.4771 17.9814C11.7719 17.9814 12.0386 18.1027 12.2313 18.2971C12.4256 18.4916 12.5441 18.7607 12.5441 19.0582Z'
      fill='#151D26'
    />
    <path
      d='M18.2238 19.0582V20.2612C18.2238 20.856 17.7463 21.3379 17.1568 21.3379C16.5673 21.3379 16.0898 20.856 16.0898 20.2612V19.0582C16.0898 18.4633 16.5673 17.9814 17.1568 17.9814C17.4516 17.9814 17.7183 18.1027 17.9109 18.2971C18.1036 18.4916 18.2238 18.7607 18.2238 19.0582Z'
      fill='#151D26'
    />
    <path
      d='M25.6995 4.10901L21.8729 9.31314L21.9157 13.0069L14.679 12.2077L9.06256 12.437L11.4764 6.54325L18.2241 1.38231L23.5359 0.5L28.9432 1.96886L29.233 2.59861L25.6995 4.10901Z'
      fill='#7B2CBF'
    />
    <path
      d='M25.3671 8.01208L26.2957 14.3511L21.9158 13.0069L21.873 9.31311L25.6997 4.10897L29.2332 2.59857L26.2809 4.865L25.3671 8.01208Z'
      fill='#3C096C'
    />
    <path
      opacity='0.7'
      d='M8.44678 13.9807L8.48466 15.1372L12.9007 14.6188L18.1121 14.559L21.0233 15.1372L22.6731 16.0445L21.7478 15.1472L19.1363 14.0107L12.9732 13.5089L8.44678 13.9807Z'
      fill='#848589'
    />
    <path
      d='M23.5359 0.5L18.8053 1.71463L13.5659 6.49839L12.5434 12.2957L9.06256 12.437L11.4764 6.54325L18.2241 1.38231L23.5359 0.5Z'
      fill='#C77DFF'
    />
    <path
      d='M0 16.9932L6.11206 14.2233L10.4096 13.007H18.2242C18.2242 13.007 22.2369 13.0419 21.9142 13.007C21.5931 12.9721 14.6792 12.2095 14.6792 12.2095L7.4853 12.5036L1.19541 15.1455L0 16.9932Z'
      fill='#C77DFF'
    />
    <path
      opacity='0.5'
      d='M8.44689 13.9804L6.11206 14.223L0 16.9929V19.595L2.61968 22.4895L8.00561 26.0254L4.79151 21.1236L4.91665 18.6063L8.53745 16.7104L8.44689 13.9804Z'
      fill='#AC68DF'
    />
    <path
      opacity='0.5'
      d='M19.1367 14.0107L20.7092 14.1386L27.8207 16.1957L32.1874 18.2943L27.8504 17.9819L24.9507 18.2528L21.7482 15.1472L19.1367 14.0107Z'
      fill='#3C096C'
    />
    <path
      d='M10.4102 19.0583L11.4771 19.6598L10.4102 20.2613V19.0583Z'
      fill='white'
    />
    <path
      d='M16.0898 19.0583L17.1568 19.6598L16.0898 20.2613V19.0583Z'
      fill='white'
    />
    <path
      d='M15.2314 25.1915C15.2149 25.3211 15.1902 25.4524 15.1573 25.5836C14.7802 25.8628 14.3472 26.0738 13.8812 26.2001L12.9295 26.1486C12.4256 26.0007 11.9662 25.7531 11.5776 25.4241C11.6451 25.2829 11.7143 25.1417 11.7851 25.0004C12.0403 24.9888 12.2791 24.9406 12.4948 24.8675C12.7533 24.9988 13.0563 25.1433 13.3493 25.1898C13.5716 25.1915 13.9553 25.1599 14.1726 25.1101C14.3076 25.0852 14.4427 25.0519 14.5744 25.0071C14.8247 25.1201 14.9235 25.1566 15.2314 25.1915Z'
      fill='#FFE97F'
    />
    <path
      d='M9.09424 24.5102L9.54541 25.6185L10.3819 26.3778L12.0383 25.8511L12.6656 24.4504L14.0965 24.5335L15.753 26.3778L16.3161 27.0441L17.4259 26.9362C17.4259 26.9362 18.9539 26.1868 18.9539 26.0272C18.9539 25.8677 19.2108 24.7827 19.2108 24.7827L18.6229 24.3723L12.0679 23.0015L9.09424 24.5102Z'
      fill='#BFC6CD'
    />
    <path
      d='M12.2256 21.7684L13.2596 21.6787L13.5445 21.8881L14.1307 21.8648L13.8244 22.0459L12.9155 22.0775L12.2256 21.7684Z'
      fill='#BFC6CD'
    />
    <path
      d='M14.5952 21.6055L15.8581 22.1489L19.2122 24.7825L17.1573 23.7041L14.5952 21.6055Z'
      fill='#BFC6CD'
    />
    <path
      d='M10.1052 23.4981L9.09424 24.5117L9.59974 25.4638L10.1052 25.8592L11.7485 25.0583L12.473 24.2325H14.1624L14.7173 24.9304L15.9423 26.3012L17.3468 26.1384L18.5044 25.1863C18.5044 25.1863 18.6493 24.4884 18.6246 24.3721C18.5999 24.2558 17.36 23.7041 17.36 23.7041L14.5954 21.6055L13.8232 22.0458L12.9143 22.0774L12.226 21.7684L10.1052 23.4981Z'
      fill='white'
    />
    <path
      d='M12.9297 26.1483L14.2255 26.2763L14.9846 26.1068L15.3501 25.9273L15.0867 25.6349L14.5697 25.9157L13.8814 26.1998L12.9297 26.1483Z'
      fill='#8EACAF'
    />
    <defs>
      <filter
        id='filter0_d_1256_8038'
        x='7.8584'
        y='13.8044'
        width='13.5562'
        height='22.6956'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='1' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_1256_8038'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_1256_8038'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export const wallet: React.FC<Props> = ({
  fill = '',
  stroke = '',
  ClassName = 'w-[25px] h-[24px]',
}: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={ClassName}
    viewBox='0 0 25 24'
    fill='none'
  >
    <path
      d='M2.69092 6C2.69092 4.9 3.59092 4 4.69092 4H19.6909C19.9561 4 20.2105 4.10536 20.398 4.29289C20.5856 4.48043 20.6909 4.73478 20.6909 5V6H4.69092V7H21.6909C21.9561 7 22.2105 7.10536 22.398 7.29289C22.5856 7.48043 22.6909 7.73478 22.6909 8V18C22.6909 18.5304 22.4802 19.0391 22.1051 19.4142C21.7301 19.7893 21.2214 20 20.6909 20H4.69092C4.16049 20 3.65178 19.7893 3.2767 19.4142C2.90163 19.0391 2.69092 18.5304 2.69092 18V6ZM19.1909 15C19.5887 15 19.9703 14.842 20.2516 14.5607C20.5329 14.2794 20.6909 13.8978 20.6909 13.5C20.6909 13.1022 20.5329 12.7206 20.2516 12.4393C19.9703 12.158 19.5887 12 19.1909 12C18.7931 12 18.4116 12.158 18.1303 12.4393C17.849 12.7206 17.6909 13.1022 17.6909 13.5C17.6909 13.8978 17.849 14.2794 18.1303 14.5607C18.4116 14.842 18.7931 15 19.1909 15Z'
      fill='white'
      fill-opacity='0.48'
    />
  </svg>
);

export const arrowDown: React.FC<Props> = ({
  fill = '',
  stroke = '',
  ClassName = 'w-[32px] h-[32px]',
}: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
  >
    <path
      d='M10.8299 12.0027L16.0032 17.176L21.1766 12.0027C21.3 11.8793 21.4465 11.7813 21.6078 11.7145C21.7691 11.6477 21.942 11.6133 22.1166 11.6133C22.2911 11.6133 22.464 11.6477 22.6253 11.7145C22.7866 11.7813 22.9331 11.8793 23.0566 12.0027C23.18 12.1261 23.2779 12.2727 23.3447 12.434C23.4115 12.5953 23.4459 12.7681 23.4459 12.9427C23.4459 13.1173 23.4115 13.2901 23.3447 13.4514C23.2779 13.6127 23.18 13.7593 23.0566 13.8827L16.9366 20.0027C16.8132 20.1263 16.6667 20.2244 16.5054 20.2913C16.3441 20.3582 16.1712 20.3926 15.9966 20.3926C15.8219 20.3926 15.649 20.3582 15.4877 20.2913C15.3264 20.2244 15.1799 20.1263 15.0566 20.0027L8.93656 13.8827C8.81295 13.7594 8.71489 13.6128 8.64798 13.4515C8.58107 13.2902 8.54663 13.1173 8.54663 12.9427C8.54663 12.7681 8.58107 12.5952 8.64798 12.4339C8.71489 12.2726 8.81295 12.1261 8.93656 12.0027C9.45656 11.496 10.3099 11.4827 10.8299 12.0027Z'
      fill='white'
    />
  </svg>
);

export const powerdBy: React.FC<Props> = ({
  fill = '',
  stroke = '',
  ClassName = 'w-[21px] h-[20px]',
}: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={ClassName}
    viewBox='0 0 21 20'
    fill='none'
  >
    <g clip-path='url(#clip0_1256_7955)'>
      <mask
        id='mask0_1256_7955'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='21'
        height='20'
      >
        <path d='M20.4483 0H0.27002V20H20.4483V0Z' fill='white' />
      </mask>
      <g mask='url(#mask0_1256_7955)'>
        <g filter='url(#filter0_d_1256_7955)'>
          <path
            d='M2.20178 15.7291C3.04674 16.9044 4.13059 17.8878 5.38226 18.6149C6.63394 19.3419 8.02513 19.7961 9.4647 19.9478C8.72407 18.8333 7.64751 17.808 6.30353 17.0274C4.95956 16.2468 3.53627 15.8203 2.20178 15.7291Z'
            fill='url(#paint0_linear_1256_7955)'
          />
          <path
            d='M8.10937 13.9191C5.52008 12.4148 2.71757 12.0314 0.71228 12.7086C0.905866 13.3484 1.16117 13.9679 1.4746 14.5584C3.21685 14.518 5.11909 14.9912 6.88912 16.0193C8.65918 17.0473 10.013 18.4662 10.8414 20C11.5099 19.9795 12.1749 19.8943 12.8271 19.7458C12.4216 17.6686 10.6981 15.4237 8.10937 13.9191Z'
            fill='url(#paint1_linear_1256_7955)'
          />
          <path
            d='M20.4483 7.81306C20.1191 6.474 19.5234 5.21502 18.6968 4.11128C17.8703 3.00753 16.8298 2.08167 15.6375 1.38897C14.4451 0.696269 13.1255 0.25094 11.7573 0.0795683C10.389 -0.091803 9.00026 0.0142998 7.67395 0.391541C9.8897 0.662706 12.3492 1.49451 14.7612 2.89578C17.1733 4.29703 19.1158 6.02132 20.4483 7.81306Z'
            fill='url(#paint2_linear_1256_7955)'
          />
          <path
            d='M17.2244 12.7239C16.0902 10.8404 14.1473 9.03675 11.7539 7.64637C9.36053 6.25593 6.8319 5.46175 4.63578 5.40921C2.70371 5.36345 1.25365 5.9251 0.658432 6.94981C0.655042 6.95587 0.650297 6.96162 0.646568 6.96775C0.593012 7.15993 0.546914 7.35243 0.504883 7.54568C1.33601 7.21756 2.299 7.03487 3.36977 7.0145C5.75096 6.96981 8.41584 7.73143 10.875 9.16012C13.3342 10.5889 15.3174 12.5274 16.4577 14.6174C16.9688 15.559 17.2878 16.4861 17.4142 17.3717C17.5613 17.2402 17.7057 17.1043 17.8457 16.963C17.8495 16.9566 17.8518 16.9497 17.8555 16.943C18.4508 15.9173 18.2206 14.3797 17.2244 12.7239Z'
            fill='url(#paint3_linear_1256_7955)'
          />
          <path
            d='M9.93308 10.7803C6.26791 8.65101 2.21768 8.31745 0.27002 9.80345C0.273845 10.2686 0.309405 10.7329 0.376452 11.1932C0.949388 11.0195 1.53988 10.9101 2.13701 10.8671C4.31347 10.7034 6.71296 11.3098 8.89046 12.5754C11.0679 13.8411 12.7844 15.6261 13.7206 17.5964C13.9794 18.1363 14.1768 18.7034 14.309 19.2872C14.7422 19.1174 15.1634 18.9184 15.5696 18.6916C15.8957 16.2633 13.5993 12.91 9.93308 10.7803Z'
            fill='url(#paint4_linear_1256_7955)'
          />
          <path
            d='M19.1097 9.57131C17.9627 7.68974 16.0028 5.88105 13.5924 4.48149C11.1821 3.08192 8.64361 2.2752 6.4404 2.21046C4.76086 2.16199 3.45993 2.56907 2.7854 3.33817C5.58622 2.86363 9.28054 3.66121 12.8613 5.7414C16.4421 7.82162 18.966 10.6363 19.9402 13.3042C20.274 12.3379 19.9835 11.0061 19.1097 9.57131Z'
            fill='url(#paint5_linear_1256_7955)'
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id='filter0_d_1256_7955'
        x='-22.4748'
        y='-20.4703'
        width='65.6678'
        height='65.4896'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='2.27449' />
        <feGaussianBlur stdDeviation='11.3724' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_1256_7955'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_1256_7955'
          result='shape'
        />
      </filter>
      <linearGradient
        id='paint0_linear_1256_7955'
        x1='13.7076'
        y1='4.0625'
        x2='4.43674'
        y2='20'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0.0001' stop-color='#C7F284' />
        <stop offset='1' stop-color='#00BEF0' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_1256_7955'
        x1='13.7075'
        y1='4.06251'
        x2='4.43666'
        y2='20'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0.0001' stop-color='#C7F284' />
        <stop offset='1' stop-color='#00BEF0' />
      </linearGradient>
      <linearGradient
        id='paint2_linear_1256_7955'
        x1='13.7075'
        y1='4.0625'
        x2='4.43668'
        y2='20'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0.0001' stop-color='#C7F284' />
        <stop offset='1' stop-color='#00BEF0' />
      </linearGradient>
      <linearGradient
        id='paint3_linear_1256_7955'
        x1='13.7075'
        y1='4.0625'
        x2='4.43663'
        y2='20'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0.0001' stop-color='#C7F284' />
        <stop offset='1' stop-color='#00BEF0' />
      </linearGradient>
      <linearGradient
        id='paint4_linear_1256_7955'
        x1='13.7075'
        y1='4.06251'
        x2='4.43669'
        y2='20'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0.0001' stop-color='#C7F284' />
        <stop offset='1' stop-color='#00BEF0' />
      </linearGradient>
      <linearGradient
        id='paint5_linear_1256_7955'
        x1='13.7075'
        y1='4.06249'
        x2='4.43671'
        y2='20'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0.0001' stop-color='#C7F284' />
        <stop offset='1' stop-color='#00BEF0' />
      </linearGradient>
      <clipPath id='clip0_1256_7955'>
        <rect
          width='20.625'
          height='20'
          fill='white'
          transform='translate(0.27002)'
        />
      </clipPath>
    </defs>
  </svg>
);

export const arrowUp: React.FC<Props> = ({
  fill = '',
  stroke = '',
  ClassName = 'w-[20px] h-[20px]',
}: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={ClassName}
    viewBox='0 0 20 20'
    fill='none'
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M9.37496 4.84222V16.6667C9.37496 17.0119 9.65478 17.2917 9.99996 17.2917C10.3451 17.2917 10.625 17.0119 10.625 16.6667V4.84222L14.1414 8.35861C14.3854 8.60269 14.7812 8.60269 15.0252 8.35861C15.2693 8.11454 15.2693 7.71881 15.0252 7.47473L10.5598 3.00925C10.4052 2.85467 10.2026 2.77737 9.99996 2.77737C9.79735 2.77737 9.59475 2.85467 9.44017 3.00925L4.97468 7.47473C4.73061 7.71881 4.73061 8.11454 4.97468 8.35861C5.21876 8.60269 5.61449 8.60269 5.85857 8.35861L9.37496 4.84222Z'
      fill='#4EDF87'
    />
  </svg>
);

export const search: React.FC<Props> = ({
  fill = '',
  stroke = '',
  ClassName = 'w-[16px] h-[16px]',
}: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M7.75313 2.97297C5.11312 2.97297 2.97297 5.11312 2.97297 7.75313C2.97297 10.3931 5.11312 12.5333 7.75313 12.5333C9.07173 12.5333 10.2649 12 11.1302 11.1362C11.9975 10.2704 12.5333 9.07479 12.5333 7.75313C12.5333 5.11312 10.3931 2.97297 7.75313 2.97297ZM2 7.75313C2 4.57576 4.57576 2 7.75313 2C10.9305 2 13.5063 4.57576 13.5063 7.75313C13.5063 9.1679 12.9951 10.464 12.1482 11.4657L13.8569 13.169C14.0472 13.3586 14.0477 13.6667 13.8581 13.8569C13.6684 14.0472 13.3604 14.0477 13.1701 13.8581L11.4597 12.1533C10.4588 12.9971 9.16505 13.5063 7.75313 13.5063C4.57576 13.5063 2 10.9305 2 7.75313Z'
      fill='white'
      fill-opacity='0.32'
    />
  </svg>
);

export const arrowDown2: React.FC<Props> = ({
  fill = '',
  stroke = '',
  ClassName = 'w-[20px] h-[20px]',
}: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5ZM7.10861 8.30806C6.86453 8.06398 6.4688 8.06398 6.22472 8.30806C5.98065 8.55214 5.98065 8.94786 6.22472 9.19194L9.44021 12.4074C9.74937 12.7166 10.2506 12.7166 10.5598 12.4074L13.7753 9.19194C14.0194 8.94786 14.0194 8.55214 13.7753 8.30806C13.5312 8.06398 13.1355 8.06398 12.8914 8.30806L10 11.1994L7.10861 8.30806Z'
      fill='white'
    />
  </svg>
);

export const share: React.FC<Props> = ({
  fill = '',
  stroke = '',
  ClassName = 'w-[20px] h-[20px]',
}: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='14'
    height='15'
    viewBox='0 0 14 15'
    fill='none'
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M6.60466 2.64428C6.61023 2.86752 6.43379 3.05301 6.21059 3.05857C5.38157 3.07923 4.52197 3.13137 3.54678 3.21539C3.10734 3.25326 2.75844 3.59906 2.71808 4.03514C2.48097 6.59734 2.52647 8.38944 2.73431 10.935C2.77099 11.3842 3.12585 11.7413 3.57197 11.7794C6.10374 11.9952 7.88462 11.9957 10.4497 11.7783C10.8952 11.7405 11.2493 11.3852 11.2863 10.9383C11.3662 9.97211 11.4188 9.11798 11.4416 8.29402C11.4478 8.07079 11.6337 7.89484 11.8569 7.90101C12.0801 7.90719 12.256 8.09316 12.2498 8.31639C12.2265 9.15939 12.1728 10.029 12.092 11.005C12.0226 11.844 11.358 12.5129 10.518 12.5841C7.90766 12.8054 6.08096 12.8049 3.5033 12.5851C2.66089 12.5133 1.99703 11.8408 1.92845 11.0008C1.71798 8.42301 1.67039 6.58199 1.91299 3.9606C1.9897 3.13168 2.65134 2.48086 3.47739 2.40969C4.46462 2.32463 5.34114 2.27129 6.19045 2.25013C6.41365 2.24457 6.5991 2.42103 6.60466 2.64428Z'
      fill='white'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M8.00322 2.66848C8.00322 2.43736 8.19058 2.25 8.4217 2.25H11.7199C12.0127 2.25 12.25 2.48732 12.25 2.78007V6.0783C12.25 6.30942 12.0626 6.49678 11.8315 6.49678C11.6004 6.49678 11.413 6.30942 11.413 6.0783V3.67877L6.54772 8.5441C6.38429 8.70752 6.11933 8.70752 5.9559 8.5441C5.79248 8.38067 5.79248 8.11571 5.9559 7.95228L10.8212 3.08696H8.4217C8.19058 3.08696 8.00322 2.8996 8.00322 2.66848Z'
      fill='white'
    />
  </svg>
);
