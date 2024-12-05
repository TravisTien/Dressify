import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import '../assets/img/picture1.jpg';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

function SwiperDemo() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={20}
                grabCursor={true}
                pagination={{
                    clickable: false,
                }}
                // modules={[Pagination]}
                className="mySwiper"
                style={{width:'800px'}}
            >
                <SwiperSlide >
                    <img style={{width:'100%'}} src="https://cdn.wimg.jp/coordinate/d7q6xj/20191010185838622/20191010185838622_500.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide >
                    <img style={{width:'100%'}} src="https://cdn.wimg.jp/coordinate/d7q6xj/20191010185838622/20191010185838622_500.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide >
                    <img style={{width:'100%'}} src="https://cdn.wimg.jp/coordinate/d7q6xj/20191010185838622/20191010185838622_500.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide >
                    <img style={{width:'100%'}} src="https://cdn.wimg.jp/coordinate/d7q6xj/20191010185838622/20191010185838622_500.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide >
                    <img style={{width:'100%'}} src="https://cdn.wimg.jp/coordinate/d7q6xj/20191010185838622/20191010185838622_500.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperDemo
