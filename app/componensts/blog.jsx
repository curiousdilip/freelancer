"use client"
import styles from "../home.module.scss";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default function Blog() {
    return (
        <>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className={styles.blogs}
            >
                <SwiperSlide>
                    <div className={styles.blog}>
                        <div className={styles.imgContainer}>
                            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div className={styles.content}>
                            <p className={styles.metadata}>
                                22 Oct, 2020
                            </p>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit consea. Nulla purus arcu
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.blog}>
                        <div className={styles.imgContainer}>
                            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div className={styles.content}>
                            <p className={styles.metadata}>
                                22 Oct, 2020
                            </p>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit consea. Nulla purus arcu
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className={styles.blog}>
                    <div className={styles.imgContainer}>
                        <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div className={styles.content}>
                        <p className={styles.metadata}>
                            22 Oct, 2020
                        </p>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit consea. Nulla purus arcu
                        </p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className={styles.blog}>
                    <div className={styles.imgContainer}>
                        <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div className={styles.content}>
                        <p className={styles.metadata}>
                            22 Oct, 2020
                        </p>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit consea. Nulla purus arcu
                        </p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className={styles.blog}>
                    <div className={styles.imgContainer}>
                        <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div className={styles.content}>
                        <p className={styles.metadata}>
                            22 Oct, 2020
                        </p>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit consea. Nulla purus arcu
                        </p>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </>
    )
}