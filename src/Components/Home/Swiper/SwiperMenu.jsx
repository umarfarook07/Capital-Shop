
// SwiperMenu.jsx

import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Banner1 from './images/cover-banner1.jpg';
import Banner2 from './images/cover-banner2.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function SwiperMenu() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Banner1} alt="Cover-Banner" /></SwiperSlide>
        <SwiperSlide><img src={Banner2} alt="Cover-Banner" /></SwiperSlide>
      </Swiper>
    </>
  );
}
