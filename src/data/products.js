import image_product from "../assets/Screenshot_4.png";
import image_product2 from "../assets/Screenshot_6.png";

import variant_21 from "../assets/elfbar-t600-blueberry-20mg.webp";
import variant_22 from "../assets/elfbar-t600-mango-20mg.webp";

export const products = [
    {
        id:1,
        title: "Vape A",
        image: [
            image_product,
        ],
        variants: {
            flavor: [
                {
                    id: 1,
                    name: "mango",
                    label: "Mango Ice",
                    img_variant: variant_21,
                    stock: 12,
                },
                {
                    id: 2,
                    name: "grape",
                    label: "Grape",
                    img_variant: variant_22,
                    stock: 0,
                }
            ]
        }
    },
    {
        id:2,
        title: "Vape B",
        image: [
            image_product2,
        ],
        variants: {
            flavor: [
                {
                    id: 1,
                    name: "mango",
                    label: "Mango Ice",
                    img_variant: variant_21,
                    stock: 5,
                },
                {
                    id: 2,
                    name: "grape",
                    label: "Grape",
                    img_variant: variant_22,
                    stock: 10,
                }
            ]
        }
    },
    {
        id:3,
        title: "Vape C",
        image: [
            image_product
        ],
        variants: {
            flavor: [
                {
                    id: 1,
                    name: "mango",
                    label: "Mango Ice",
                    img_variant: variant_21,
                    stock: 6,
                },
                {
                    id: 2,
                    name: "grape",
                    label: "Grape",
                    img_variant: variant_22,
                    stock: 8,
                }
            ]
        }
    },
    {
        id:4,
        title: "Vape D",
        image: [
            image_product2,
        ],
        variants: {
            flavor: [
                {
                    id: 1,
                    name: "mango",
                    label: "Mango Ice",
                    img_variant: variant_21,
                    stock: 16,
                },
                {
                    id: 2,
                    name: "grape",
                    label: "Grape",
                    img_variant: variant_22,
                    stock: 5,
                }
            ]
        }
    },
    {
        id:5,
        title: "Vape E",
        image: [
            image_product,
        ],
        variants: {
            flavor: [
                {
                    id: 1,
                    name: "mango",
                    label: "Mango Ice",
                    img_variant: variant_21,
                    stock:0,
                },
                {
                    id: 2,
                    name: "grape",
                    label: "Grape",
                    img_variant: variant_22,
                    stock: 1,
                }
            ]
        }
    },
    {
        id:6,
        title: "Vape F",
        image: [
            image_product2,
        ],
        variants: {
            flavor: [
                {
                    id: 1,
                    name: "mango",
                    label: "Mango Ice",
                    img_variant: variant_21,
                    stock: 8,
                },
                {
                    id: 2,
                    name: "grape",
                    label: "Grape",
                    img_variant: variant_22,
                    stock: 0,
                }
            ]
        }
    },
]