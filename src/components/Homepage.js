import React from 'react';
import Todo from './todo/Todo.js';
import './Homepage.css';
import {withRouter} from 'react-router-dom';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from "swiper";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Pagination]);

const HomePage = () => {
  const today=()=>{
    let now=new Date();
    let year=now.getFullYear();
    let month=now.getMonth()+1;
    let day=now.getDate();
    return year+'년 '+month+'월 '+day+'일 ';
  }

  return (
    <div className="main-body">
      <div className="today-date">{today()}</div>
      <Swiper
        className="container"
        spaceBetween={20}
        slidesPerView="auto"
        // centeredSlides={true}
        pagination={{clickable:true}}
      >
        <SwiperSlide className="mon"><Todo day_of_week="Mon" /></SwiperSlide>
        <SwiperSlide className="mon"><Todo day_of_week="Tue" /></SwiperSlide>
        <SwiperSlide className="mon"><Todo day_of_week="Wed" /></SwiperSlide>
        <SwiperSlide className="mon"><Todo day_of_week="Thu" /></SwiperSlide>
        <SwiperSlide className="mon"><Todo day_of_week="Fri" /></SwiperSlide>
        <SwiperSlide className="mon"><Todo day_of_week="Sat" /></SwiperSlide>
        <SwiperSlide className="mon"><Todo day_of_week="Sun" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default withRouter(HomePage);  