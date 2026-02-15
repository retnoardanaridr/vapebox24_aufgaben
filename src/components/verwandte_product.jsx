import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import { products } from "../data/products";
import { Link } from "react-router-dom";



export default function VerwandteProduk() {
    return (
        <>
            <div className="px-2 py-3 mb-5">
                <Swiper 
                modules={[Autoplay]}
                loop={true}
                autoplay={{delay:3000, disableOnInteraction: false}}  
                spaceBetween={10}
                breakpoints={{
                    0: { slidesPerView:2 },
                    768: { slidesPerView:3 },
                    1024: { slidesPerView:5 },
                }}
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link to={`/product/${item.id}`} className="bg-[#F7F7F7]">
                                    <img src={item.image} alt={item.title} />
                                    <h4>{item.title}</h4>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}