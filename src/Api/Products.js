import image1 from '../assets/images/product1.jpg'
import part1 from '../assets/images/product-1-part-1.avif'
import part2 from '../assets/images/product-1-part-2.jpg'
import part3 from '../assets/images/product-1-part-3.jpg'

import image2 from '../assets/images/product2.jpg'
import image3 from '../assets/images/product3.jpg'
import image4 from '../assets/images/product4.jpg'
import image5 from '../assets/images/product5.jpg'
import image6 from '../assets/images/product6.jpg'
import image7 from '../assets/images/product7.jpg'
import image8 from '../assets/images/product8.jpg'


const Products = [
    {
        id: 1,
        name: "cropped faux leather jacket",
        image: image1,
        images: [
        part1,     
        part2,     
        part3,
    ],
        insStock: true,     
        sizes: ["XS", "S", "L", "M", "XL"],
        price: 40,
        tags: "biker, black, bomber, leather",
        description: "Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.",
        category: "Dresses",
        colors: [
            {
                "name": "Black",
                "code": "#000000",
                "stock": 10
            },
            {
                "name": "White",
                "code": "#ffffff",
                "stock": 8
            },
            {
                "name": "Red",
                "code": "#ff0000",
                "stock": 5
            }
        ]
    },
    {
        id: 2,
        name: "calvin short",
        image: image2,
        price: 62,
        tags: "biker, black, bomber, leather",
        sizes: ["XS", "S", "L", "M", "XL"],
        description: "Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.",
        category: "Dresses",
        images: [
        part1,     
        part2,     
        part3,     
        ],
         colors: [
            {
                "name": "Black",
                "code": "#000000",
                "stock": 10
            },
            {
                "name": "White",
                "code": "#ffffff",
                "stock": 8
            },
            {
                "name": "Red",
                "code": "#ff0000",
                "stock": 5
            }
        ]
    },
    {
        id: 3,
        name: "shirt in botanical",
        image: image3,
        price: 60,
        tags: "biker, black, bomber, leather",
        sizes: ["XS", "S", "L", "M", "XL"],
        description: "Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.",
        category: "Dresses",
        images: [
        part1,     
        part2,     
        part3,     
        ],
         colors: [
            {
                "name": "Black",
                "code": "#000000",
                "stock": 10
            },
            {
                "name": "White",
                "code": "#ffffff",
                "stock": 8
            },
            {
                "name": "Red",
                "code": "#ff0000",
                "stock": 5
            }
        ]
    },
    {
        id: 4,
        name: "cotton jersey",
        image: image4,
        price: 50,
        tags: "biker, black, bomber, leather",
        sizes: ["XS", "S", "L", "M", "XL"],
        description: "Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.",
        category: "Dresses",
        images: [
        part1,     
        part2,     
        part3,     
        ],
         colors: [
            {
                "name": "Black",
                "code": "#000000",
                "stock": 10
            },
            {
                "name": "White",
                "code": "#ffffff",
                "stock": 8
            },
            {
                "name": "Red",
                "code": "#ff0000",
                "stock": 5
            }
        ]
    },
    {
        id: 5,
        name: "cableknit shawl",
        image: image5,
        price: 100,
        tags: "biker, black, bomber, leather",
        sizes: ["XS", "S", "L", "M", "XL"],
        description: "Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.",
        category: "Dresses",
        images: [
        part1,     
        part2,     
        part3,     
        ],
         colors: [
            {
                "name": "Black",
                "code": "#000000",
                "stock": 10
            },
            {
                "name": "White",
                "code": "#ffffff",
                "stock": 8
            },
            {
                "name": "Red",
                "code": "#ff0000",
                "stock": 5
            }
        ]
    },
    {
        id: 6,
        name: "cropped faux leather jacket",
        image: image6,
        price: 40,
        tags: "biker, black, bomber, leather",
        sizes: ["XS", "S", "L", "M", "XL"],
        description: "Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.",
        category: "Dresses",
        images: [
        part1,     
        part2,     
        part3,     
        ],
         colors: [
            {
                "name": "Black",
                "code": "#000000",
                "stock": 10
            },
            {
                "name": "White",
                "code": "#ffffff",
                "stock": 8
            },
            {
                "name": "Red",
                "code": "#ff0000",
                "stock": 5
            }
        ]
    },
    {
        id: 7,
        name: "colorful jacket",
        image: image7,
        price: 69,
        tags: "biker, black, bomber, leather",
        sizes: ["XS", "S", "L", "M", "XL"],
        description: "Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.",
        category: "Dresses",
        images: [
        part1,     
        part2,     
        part3,     
        ],
         colors: [
            {
                "name": "Black",
                "code": "#000000",
                "stock": 10
            },
            {
                "name": "White",
                "code": "#ffffff",
                "stock": 8
            },
            {
                "name": "Red",
                "code": "#ff0000",
                "stock": 5
            }
        ]
    },
    {
        id: 8,
        name: "zessi dresses",
        image: image8,
        price: 79,
        tags: "biker, black, bomber, leather",
        sizes: ["XS", "S", "L", "M", "XL"],
        description: "Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.",
        category: "Dresses",
        images: [
        part1,     
        part2,     
        part3,     
        ],
         colors: [
            {
                "name": "Black",
                "code": "#000000",
                "stock": 10
            },
            {
                "name": "White",
                "code": "#ffffff",
                "stock": 8
            },
            {
                "name": "Red",
                "code": "#ff0000",
                "stock": 5
            }
        ]
    },
]

export default Products;