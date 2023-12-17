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
