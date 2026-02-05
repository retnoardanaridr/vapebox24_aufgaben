import React from "react";

import produk1 from "../assets/Screenshot_4.png";
import produk2 from "../assets/pot.jpg";
import produk3 from "../assets/e-liquids.png";
import Carousel from "../components/carousel";
import CardHero from "../components/card_hero";
import OwlCarousel from "../components/owlCarousel";
import SliderCompany from "../components/slider_company";

export default function HomePage() {
    return (
        <>
            <Carousel />
            <section className="mx-auto p-6 bg-[#DEEDFF]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="relative rounded-xl overflow-hidden">
                        <img
                            src={produk1}
                            alt=""
                            className="w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                            <h3 className="text-white text-sm font-semibold">
                                Vape Devices
                            </h3>
                        </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                        <img
                            src={produk2}
                            alt=""
                            className="w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                            <h3 className="text-white text-sm font-semibold">
                                Pod Systeme
                            </h3>
                        </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                        <img
                            src={produk3}
                            alt=""
                            className="w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                            <h3 className="text-white text-sm font-semibold">
                                E-Liquid
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <h1 className="text-center text-3xl py-4 font-bold bg-[#F7F7F7]">UNSER ANGEBOT</h1>
            <p className="text-center text-xl py-4 text-wrap bg-[#F7F7F7]">Innovative Vape-Produkte in höchster Qualität . mit individuellen Anpassungen und flexiblen Großhandelslösungen für Ihr Wachstum</p>
            <CardHero />
            <h1 className="text-center text-3xl py-4 font-bold bg-[#DEEDFF]">KUNDEN, DIE UNS VERTRAUEN</h1>
            <SliderCompany />
            <h1 className="text-center text-3xl py-4 font-bold">BELIEBTE PRODUKTE</h1>
            <OwlCarousel />
        </>
    )
}