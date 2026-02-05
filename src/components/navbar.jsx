import React, { useState } from "react";
import { Link } from "react-router-dom";

import icon_vapebox from "../assets/icon_vapebox.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header>
                <nav className="border-y border-default border-default bg-[#187DF9]">
                    <div className="div-ads-moving py-3">
                        <ul className="flex items-center flex-row font-medium space-x-8 rtl:space-x-reverse text-sm marquee_content">
                            <li className="flex items-center gap-2 text-[#DEEDFF]"><i className="fa-solid fa-check"></i> Schnelle Lieferung</li>
                            <li className="flex items-center gap-2 text-[#DEEDFF]"><i className="fa-solid fa-check"></i> Versandkostenfrei ab 400€ Bestellwert</li>
                            <li className="flex items-center gap-2 text-[#DEEDFF]"><i className="fa-solid fa-check"></i> Über 1000 zufriedene B2B Partner</li>
                        </ul>
                    </div>
                </nav>
                <nav className="bg-[#DEEDFF]">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={icon_vapebox} className="h-7" alt="Vapebox24" />
                        </Link>
                        <div className="relative hidden md:block flex-1 max-w-xl">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
                            </div>
                            <input type="text" id="input-group-1" class="block w-full ps-9 pe-3 bg-[#187DF9] text-white text-heading text-sm rounded-xl px-2.5 py-2 shadow-xs placeholder:text-[#DEEDFF]" placeholder="Suchen" />
                        </div>
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            <Link>
                                <i className="fa-solid fa-user" style={{ color: "#187DF9" }} />
                            </Link>
                            <Link>
                                <i className="fa-solid fa-cart-shopping" style={{ color: "#187DF9" }} />
                            </Link>
                        </div>
                    </div>
                </nav>
                <nav className="bg-neutral-primary w-full z-20 top-0 start-0 border-b-2">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        {/* hamburger menu */}
                        <button onClick={() => setOpen(!open)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-dropdown" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" /></svg>
                        </button>
                        {open && (
                           <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-40 md:hidden" /> 
                        )}
                        <div className={`fixed top-0 left-0 z-50 h-screen w-72 bg-[#DEEDFF] transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} md:hidden`} id="navbar-hamburger">
                            <div className="p-4 border-b border-default flex justify-between items-center">
                                <span className="font-semibold">Vapebox 24</span>
                                <button onClick={() => setOpen(false)}>X</button>
                            </div>
                            <ul className="flex flex-col font-medium p-4 space-y-2 border-t border-default">
                                <li>
                                    <Link to="#" className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</Link>
                                </li>
                                <li>
                                    <Link to="" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Pricing</Link>
                                </li>
                                <li>
                                    <Link to="" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="relative md:hidden block flex-1 max-w-xl">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
                            </div>
                            <input type="text" id="input-group-1" class="block w-full ps-9 pe-3 bg-[#DEEDFF] text-white text-heading text-sm rounded-xl px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="Suchen" />
                        </div>
                        {/* navbar */}
                        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                            <ul className="flex flex-col font-medium p-4 text-[#187DF9] md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
                                <li>
                                    <Link to="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Aktionen</Link>
                                </li>
                                <Menu as="li" className="relative">
                                    <MenuButton className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                                        Shop All
                                        <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>
                                    </MenuButton>
                                    <MenuItems className="absolute left-96 -translate-x-1/2 top-full w-[60vw] z-50 mt-2 max-w-6xl p-6 bg-[#DEEDFF] border border-default-medium rounded shadow-lg">
                                        <MenuItem className="border-b-2 border-blue-400">
                                            <Link to="/shop-products" className="block px-3 py-2">All Product</Link>
                                        </MenuItem>
                                        <div className="grid grid-cols-3 gap-2">
                                            <div>
                                                <h4 className="pt-2 px-3 underline">Vapes</h4>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> Filter Drip Tip-Systeme</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> mit Nikotin</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> ohne Nikotin</Link>
                                                </MenuItem>
                                            </div>
                                            <div>
                                                <h4 className="pt-2 px-3 underline">POD-Systeme</h4>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> Akkuträger</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> mit Nikotin</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> ohne Nikotin</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> Refillable Pods</Link>
                                                </MenuItem>
                                            </div>
                                            <div>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2 underline">Big Puff</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2 underline">Snacks</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2 underline">Drinks</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2 underline">Promotion/Display</Link>
                                                </MenuItem>
                                            </div>
                                        </div>
                                    </MenuItems>
                                </Menu>
                                <li>
                                    <Link to="#" className="block py-2 px-3 text-heading rounded md:border-0 md:hover:text-fg-brand md:p-0">Neuheiten</Link>
                                </li>
                                <li>
                                    <Link to="#" className="block py-2 px-3 text-heading rounded md:border-0 md:hover:text-fg-brand md:p-0">Marken</Link>
                                </li>
                                <li>
                                    <Link to="#" className="block py-2 px-3 text-heading rounded md:border-0 md:hover:text-fg-brand md:p-0">Content</Link>
                                </li>
                                <li>
                                    <Link to="#" className="block py-2 px-3 text-heading rounded md:border-0 md:hover:text-fg-brand md:p-0">Kontakt</Link>
                                </li>
                                <Menu as="li" className="relative">
                                    <MenuButton className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                                        Trendartikel
                                        <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>
                                    </MenuButton>
                                    <MenuItems className="absolute left-52 -translate-x-1/2 top-full w-[30vw] z-50 mt-2 max-w-6xl p-6 bg-[#DEEDFF] border border-default-medium rounded shadow-lg">
                                        <MenuItem className="border-b-2 border-blue-400">
                                            <Link to="/shop-products" className="block px-3 py-2">All Product</Link>
                                        </MenuItem>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> Autodüfte</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> Trading Cards & Toys</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> Elektronik</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> Zahnstocher</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> Holzbriketts</Link>
                                                </MenuItem>
                                            </div>
                                            <div>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> Kaffebecher</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> Raucherbedarf</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="#" className="block px-3 py-2"><i class="fa-solid fa-check"></i> Schnelltest THC</Link>
                                                </MenuItem>
                                            </div>
                                        </div>
                                    </MenuItems>
                                </Menu>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;