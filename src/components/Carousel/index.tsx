
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


import SwiperCore, {
  Pagination, Navigation, Autoplay
} from 'swiper';

SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function App() {
  return (
    <>
      <Swiper
        loop
        pagination={{ "type": "bullets" }}
        navigation={true}
        autoplay={{
          "delay": 5000,
          "disableOnInteraction": true,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="container-image">
          <img src="/img/kitchen_cabinet_2.webp" alt="Kitchen" />
          <span className="info">
            <div>
              <h1>Cozinha</h1>
              <p>MDF 3mm</p>
              <p>25m<sup>2</sup></p>
            </div>
            <div>
              <h2>R$ 2500</h2>
              <p>Até 12x s/juro</p>
            </div>
          </span>
        </SwiperSlide>
        <SwiperSlide className="container-image">
          <img src="/img/bathroom_cabinet.webp" alt="" />
          <span className="info">
            <div>
              <h1>Banheiro</h1>
              {/* <p>MDF 3mm</p> */}
              {/* <p>25m<sup>2</sup></p> */}
            </div>
            <div>
              <h2>R$ 3500</h2>
              <p>Até 122x s/juro</p>
            </div>
          </span>
        </SwiperSlide>
        <SwiperSlide className="container-image">
          <img src="/img/living_room_shelf_2.webp" alt="" />
          <span className="info">
            <div>
              <h1>Cozinha</h1>
              <p>MDF 3mm</p>
              <p>25m<sup>2</sup></p>
            </div>
            <div>
              <h2>R$ 500</h2>
              <p>Até 120x s/juro</p>
            </div>
          </span>
        </SwiperSlide>
      </Swiper>
    </>
  )
}