import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import pipapo from "../assets/pipapo.jpg";
import grolls from "../assets/g-rollz.jpg";

export default function Carousel() {
    return (
        <>
            <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 3000 }}
                speed={600}
                loop
                className="w-full"
            >
                <SwiperSlide>
                    <img src={pipapo} className="md:w-full" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={grolls} className="md:w-full" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
