declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.webp';
declare module '*.svg';

declare module 'swiper/react';
declare module 'amap-js';

declare interface Window {
  echarts: any;
}

declare module '*.json' {
  const value: any;
  export default value;
}
