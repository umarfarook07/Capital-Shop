import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Banner from './images/banner1.jpg';


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
        <SwiperSlide><img src={Banner} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
}
