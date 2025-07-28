const clothes=[
    {
        image: "images/clothe1.jpg",
        Title: "Navy Fitted V-Neck Tee",
        price: '$ 10.00'

    },
    {
        image: "images/clothe2.jpg",
        Title: "Brown Plaid Off-Shoulder Top with Ties ",
        price: '$ 10.00'
    },
    {
        image: "images/clothe3.jpg",
        Title: "GypsyBrown Puff Sleeve Corset-Style Blouse",
        price: '$ 9.00'
    },
    {
        image: "images/clothe4.jpg",
        Title: "Striped Navy and White Polo Shirt",
        price: '$ 10.00'
    },
    {
        image: "images/clothe5.jpg",
        Title: "Light Blue Wrap Blouse ",
        price: '$ 11.00'
    },
    {
        image: "images/clothe6.jpg",
        Title: "Striped Asymmetrical Wrap Top",
        price: '$ 9.00'
    },
    {
        image: "images/clothe7.jpg",
        Title: "Baby Blue Ruffle Blouse",
        price: '$ 9.00'
    },
    {
        image: "images/clothe8.jpg",
        Title: "White Puff Sleeve Peplum Top with Dots ",
        price: '$ 7.99'
    },
    {
        image: "images/clothe9.jpg",
        Title: "Cream Long-Sleeve Knit Top with Pink Bow&Lace Trim",
        price: '$ 9.99'
    }
];

let clothe= '';
for (let i=0; i< clothes.length; i++){
    clothe +=` <div class="col-lg-4 col-md-6 col-sm-12 ">
                        <div class="product-card">
                        <div class="product-image py-5">
                            <img  src="${clothes[i].image}" alt="T-shirt" class="product-img" />
                        </div>
                        <p class="product-title mt-3 mb-1">${clothes[i].Title}</p>
                        <p class="price">${clothes[i].price}</p>
                        <button class="add-to-cart">Add To Cart</button>
                    </div>
                </div>`;
}

document.getElementById("clothes").innerHTML = clothe;

const bags=[
    {
        image: "images/bag10.jpg",
        Title: "Glossy Black Shoulder Bag",
        price: '$ 10.99'

    },
    {
        image: "images/bag11.jpg",
        Title: "New Dark Red Patent Leather Bag",
        price: '$ 11.99'
    },
    {
        image: "images/bag12.jpg",
        Title: "Navy Blue Glossy Bag",
        price: '$ 9.99'
    },
    {
        image: "images/bag4.jpg",
        Title: "Lavender Textured Shoulder Bag ",
        price: '$ 10.99'
    },
    {
        image: "images/bag5.jpg",
        Title: "Light Purple Chain Bag",
        price: '$ 7.99'
    },
    {
        image: "images/bag6.jpg",
        Title: "Silky Blue Twist Bag",
        price: '$ 8.99'
    },
    {
        image: "images/bag7.jpg",
        Title: "Blush Pink Pearl Handle Bag",
        price: '$ 13.99'
    },
    {
        image: "images/bag8.jpg",
        Title: "Gray-Pink Ribbon Crossbody",
        price: '$ 12.99'
    },
    {
        image: "images/bag9.jpg",
        Title: "Black Plush Bunny Bag",
        price: '$ 8.99'
    }
];


let bag= '';
for (let i=0; i< bags.length; i++){
    bag +=` <div class="col-lg-4 col-md-6 col-sm-12 ">
                      <div class="product-card">
                        <div class="product-image py-5">
                            <img  src="${bags[i].image}" alt="T-shirt" class="product-img" />
                        </div>
                        <p class="product-title mt-3 mb-1">${bags[i].Title}</p>
                        <p class="price">${bags[i].price}</p>
                        <button class="add-to-cart">Add To Cart</button>
                    </div>
                </div>`;
}

document.getElementById("bag").innerHTML = bag;


const shoes=[
    {
        image: "images/shoe1.jpg",
        Title: "New ShoeGlossy Burgundy Mary Jane Flats",
        price: '$10.0'

    },
    {
        image: "images/shoe2.jpg",
        Title: "Black Pointed Stiletto Heels",
        price: '$11.99'
    },
    {
        image: "images/shoe3.jpg",
        Title: "White Ankle Strap Heels with Bow Detail ",
        price: '$9.99'
    },
    {
        image: "images/shoe4.jpg",
        Title: "Black Platform Combat Boots ",
        price: '$10.99'
    },
    {
        image: "images/shoe5.jpg",
        Title: "Burgundy Lace-Up Dr. Martens Style Boots",
        price: '$15.99'
    },
    {
        image: "images/shoe6.jpg",
        Title: "Black Winter Boots with Fur Cuff",
        price: '$17.99'
    },
    {
        image: "images/shoe7.jpg",
        Title: "Beige and White Nike Sneakers",
        price: '$11.99'
    },
    {
        image: "images/shoe8.jpg",
        Title: "Classic Red High-Top Converse Sneakers",
        price: '$8.99'
    },
    {
        image: "images/shoe9.jpg",
        Title: "Chunky White Running Sneakers",
        price: '$11.99'
    }
];

let shoe= '';
for (let i=0; i< shoes.length; i++){
    shoe +=` <div class="col-lg-4 col-md-6 col-sm-12 ">
                      <div class="product-card">
                        <div class="product-image py-5">
                            <img  src="${shoes[i].image}" alt="T-shirt" class="product-img" />
                        </div>
                        <p class="product-title mt-3 mb-1">${shoes[i].Title}</p>
                        <p class="price">${shoes[i].price}</p>
                        <button class="add-to-cart">Add To Cart</button>
                    </div>
                </div>`;
}

document.getElementById("shoe").innerHTML = shoe;


