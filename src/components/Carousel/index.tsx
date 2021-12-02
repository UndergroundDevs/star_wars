
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


import SwiperCore, {
  Pagination,Navigation, Autoplay
} from 'swiper';

SwiperCore.use([Pagination,Navigation, Autoplay]);

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
          <img src="1528-1.webp" alt="" />
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
          <img src="1528-1.webp" alt="" />
          <span className="info">
            <div>
              <h1>Cozinha</h1>
              <p>MDF 3mm</p>
              <p>25m<sup>2</sup></p>
            </div>
            <div>
              <h2>R$ 3500</h2>
              <p>Até 122x s/juro</p>
            </div>
          </span>
        </SwiperSlide>
        <SwiperSlide className="container-image">
          <img src="1528-1.webp" alt="" />
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
        <SwiperSlide className="container-image">
          <img src="1528-1.webp" alt="" />
          <span className="info">
            <div>
              <h1>Cozinha</h1>
              <p>MDF 3mm</p>
              <p>25m<sup>2</sup></p>
            </div>
            <div>
              <h2>R$ 2500</h2>
              <p>Até 20x s/juro</p>
            </div>
          </span>
        </SwiperSlide>
        <SwiperSlide className="container-image">
          <img src="1528-1.webp" alt="" />
          <span className="info">
            <div>
              <h1>Cozinha</h1>
              <p>MDF 3mm</p>
              <p>25m<sup>2</sup></p>
            </div>
            <div>
              <h2>R$ 2500</h2>
              <p>Até 2x s/juro</p>
            </div>
          </span>
        </SwiperSlide>
        <SwiperSlide className="container-image">
          <img src="1528-1.webp" alt="" />
          <span className="info">
            <div>
              <h1>Cozinha</h1>
              <p>MDF 3mm</p>
              <p>25m<sup>2</sup></p>
            </div>
            <div>
              <h2>R$ 2500</h2>
              <p>Até 1x s/juro</p>
            </div>
          </span>
        </SwiperSlide>
      </Swiper>
    </>
  )
}