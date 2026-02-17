import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function OwlCarousel() {
    return (
        <>
            <div className="px-2 py-3 mb-5 bg-[#F7F7F7]">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={10}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded shadow-xs">
                                <Link to={`/product/${item.id}`}>
                                    <img className="rounded-base" src={item.image} alt={item.title} />
                                </Link>
                                <div>
                                    <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{item.title}</h5>
                                </div>
                                <p className="mb-6 text-body">{item.summary}</p>
                                <Link to={`/product/${item.id}`} className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                                    Read more
                                    <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}