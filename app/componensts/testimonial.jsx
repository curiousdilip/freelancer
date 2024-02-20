"use client";
import styles from "../home.module.scss";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export default function Testimonial() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.reviews}
      >
        <SwiperSlide>
          <div className={styles.review}>
            <p>
              “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis
              mollis felis turpis, nec semper odio convallis at. Curabitur
              imperdiet semper arcu, a finibus arcu suscipit in. Donec quis
              placerat nibh. Maecenas est purus, eleifend ac cursus sed,
              tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.”
            </p>
            <h3>Esther Howard</h3>
            <span>Managing Director, ABC company</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.review}>
            <p>
              “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis
              mollis felis turpis, nec semper odio convallis at. Curabitur
              imperdiet semper arcu, a finibus arcu suscipit in. Donec quis
              placerat nibh. Maecenas est purus, eleifend ac cursus sed,
              tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.”
            </p>
            <h3>Esther Howard</h3>
            <span>Managing Director, ABC company</span>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className={styles.review}>
            <p>
              “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis
              mollis felis turpis, nec semper odio convallis at. Curabitur
              imperdiet semper arcu, a finibus arcu suscipit in. Donec quis
              placerat nibh. Maecenas est purus, eleifend ac cursus sed,
              tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.”
            </p>
            <h3>Esther Howard</h3>
            <span>Managing Director, ABC company</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
