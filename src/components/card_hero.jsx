import React from "react";
import { Link } from "react-router-dom";

export default function CardHero() {
    return (
        <>
            <section className="mx-auto p-6 bg-[#F7F7F7]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div class="bg-white block max-w-sm p-6 border border-default rounded shadow-xs">
                        <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Vape-Produkte</h5>
                        <p class="text-body mb-6">Hochwertige Vape-Geräte und E-Liquids für den Großhandel sowie für Markenpartner.</p>
                        <Link to="/shop-products" class="inline-flex items-center text-[#187DF9] bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            Produktübersicht
                            <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </Link>
                    </div>
                    <div class="bg-white block max-w-sm p-6 border border-default rounded shadow-xs">
                        <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">OEM-Lösungen</h5>
                        <p class="text-body mb-6">Maßgeschneiderte Lösungen für Design, Aromen, Nikotinstärken, Verpackung und Branding.</p>
                        <Link to="#" class="inline-flex items-center text-[#187DF9] bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            OEM-Services
                            <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </Link>
                    </div>
                    <div class="bg-white block max-w-sm p-6 border border-default rounded shadow-xs">
                        <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Großhandel</h5>
                        <p class="text-body mb-6">Flexible Großhandelslösungen mit klaren MOQ-Strukturen und zuverlässiger Lieferkette.</p>
                        <Link to="#" class="inline-flex items-center text-[#187DF9] bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            Anfrage
                            <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
