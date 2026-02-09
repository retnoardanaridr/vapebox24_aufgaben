import React from "react";
import { Link } from "react-router-dom";

import vapecoint from "../assets/vapecoin-1.webp";
import hqdpromo from "../assets/hqd-promo.webp";
import elfpromo from "../assets/elfbar-promo.webp";

export default function ContentPromotion() {
    return (
        <>
            <section className="text-[#187DF9]">
                <h1 className="text-center text-3xl my-4">Promotion/Display</h1>
                <div className="max-w-screen-xl mx-auto my-5 block md:flex justify-between items-center">
                    <div className="w-full p-2">
                        <img src={vapecoint} alt="Vapecoin" className="w-full" />
                    </div>
                    <div className="text-2xl px-5">
                        <h2>Sammeln Sie Treuepunkte bei jeden Einkauf und tauschen Sie diese gegen attraktive Prämien, oder Produkte ein.</h2>
                        <Link to="/shop-products" className="text-lg my-3">Prämienkatalog <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="md:flex block max-w-screen-xl my-5 mx-auto">
                    <div className="px-2 w-full md:mb-0 mb-3">
                        <img alt="" src={elfpromo} className="w-full" />
                    </div>
                    <div className="px-2 w-full">
                        <img alt="" src={hqdpromo} className="w-full" />
                    </div>
                </div>
            </section>
        </>
    )
}