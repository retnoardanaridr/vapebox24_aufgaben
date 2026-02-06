import React from "react";

import produk1 from "../assets/Screenshot_4.png";
import produk2 from "../assets/pot.jpg";
import produk3 from "../assets/e-liquids.png";
import Carousel from "../components/carousel";
import CardHero from "../components/card_hero";
import OwlCarousel from "../components/owlCarousel";
import SliderCompany from "../components/slider_company";
import TopMarken from "../components/slider_topmarken";

export default function HomePage() {
    return (
        <>
            <Carousel />
            <section className="bg-[#DEEDFF]">
                <div className="container mx-auto p-6">
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
                </div>
            </section>
            <h1 className="text-center text-3xl py-4 font-bold bg-[#F7F7F7] text-[#187DF9]">UNSER ANGEBOT</h1>
            <p className="text-center text-xl py-4 text-wrap bg-[#F7F7F7] text-[#187DF9]">Innovative Vape-Produkte in höchster Qualität . mit individuellen Anpassungen und flexiblen Großhandelslösungen für Ihr Wachstum</p>
            <CardHero />
            <h1 className="text-center text-3xl py-4 font-bold bg-[#DEEDFF]">KUNDEN, DIE UNS VERTRAUEN</h1>
            <SliderCompany />
            <h1 className="text-center text-3xl py-4 font-bold text-[#187DF9] bg-[#F7F7F7]">BELIEBTE PRODUKTE</h1>
            <OwlCarousel />
            <div className="py-3">
                <h1 className="text-center text-3xl py-4 font-bold text-[#187DF9]">“Morgens bestellt und am selben Tag noch persönlich geliefert bekommen! Wahnsinnig gut.”</h1>
                <h4 className="text-[#187DF9] text-center font-semibold">Joachim S.</h4>
                <h6 className="text-[#187DF9] text-center font-semibold">Tankstellenbesitzer</h6>
            </div>
            <h1 className="text-center text-3xl py-4 font-bold text-[#187DF9]">UNSERE TOPMARKEN</h1>
            <TopMarken />
        </>
    )
}