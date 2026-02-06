import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { topmarken } from "../data/top_marken";

export default function TopMarken() {
    return(
        <>
            <div className="px-2 py-3">
                <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                spaceBetween={10}
                breakpoints={{
                    0: { slidesPerView:2 },
                    768: { slidesPerView:3 },
                    1024: { slidesPerView:6 },
                }}
                >
                    {topmarken.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex items-center justify-center h-24">
                                <img src={item.image} alt={item.title} className="max-h-32 w-auto object-contain" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}