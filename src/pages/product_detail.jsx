import React, { useState } from "react";
import Breadcrumb from "../components/breadcrumb";

import { products } from "../data/products";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const [selectedFlavor, setSelectFlavor] = useState(null)
    const [qty, setQty] = useState(1)
    const increase = () => setQty(q => q + 1)
    const decrease = () => setQty(q => (q > 1 ? q - 1 : 1))

    const { id } = useParams()
    const product = products.find(p => p.id === Number(id))

    const activeImage = selectedFlavor ? selectedFlavor.img_variant : product.image[0]

    const handleAddToCart = () => {
        if (!selectedFlavor) {
            alert("Please select a flavor")
            return
        }

        const cartItem = {
            productId: product.id,
            title: product.title,
            flavor: selectedFlavor.name,
            flavorLabel: selectedFlavor.label,
            image: selectedFlavor.img_variant || product.image[0],
            qty,
            price: 599.000
        }
        console.log("ADD to Cart", cartItem);
    }
    return (
        <>
            <section className="mx-auto max-w-screen-xl p-4">
                <Breadcrumb />
                <div className="py-4 grid grid-cols-2">
                    <div>
                        <img src={activeImage} alt="product 1" />
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl py-2">Elfbar T600 Mango 20mg</h1>
                        <h6><span className="font-bold">Artikelnummer: </span> VB1010-04</h6>
                        <h6><span className="font-bold">Kategorie: </span> Vapes</h6>
                        <h6><span className="font-bold">Hersteller: </span> ELF BAR</h6>
                        <p className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam unde aperiam commodi! Beatae neque a dolorum voluptatem accusamus. Eveniet sunt harum nobis facilis expedita repudiandae ut in dolor doloribus!</p>

                        <h4 className="font-bold text-xl py-3">Rp. 200.000</h4>
                        <h4 className="font-semibold mb-2 border-b">Flavor</h4>
                        <div className="flex gap-2">
                            {product.variants.flavor.map(item => (
                                <button key={item.id} onClick={() => {
                                    setSelectFlavor(item) 
                                    setQty(1)}} disabled={item.stock === 0}
                                    className={`px-3 py-1 rounded-full border text-sm transition ${selectedFlavor?.id === item.id ? "border-blue-600 bg-blue-50" : "border-gray-300"} ${item.stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                        {selectedFlavor && (
                            <p className="text-sm my-3"> 
                            {selectedFlavor.stock > 0 ? (
                                    <span className="text-green-600">
                                        Stock tersedia: {selectedFlavor.stock}
                                    </span>
                                ) : (
                                    <span className="text-red-600">
                                        Out of Stock
                                    </span>
                                )
                            }
                            </p>
                        )}
                        <div className="flex items-center gap-3 mt-4">
                            <button
                                onClick={decrease}
                                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-lg">
                                −
                            </button>
                            <span className="min-w-[32px] text-center font-medium">
                                {qty}
                            </span>
                            <button
                                onClick={increase}
                                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-lg">
                                +
                            </button>
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition disabled:opacity-50">
                            Add to cart
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}