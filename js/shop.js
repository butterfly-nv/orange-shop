const clothes=[
    {
        image: "images/clothe1.jpg",
        Title: "Shirt",
        price: '$10.0'

    },
    {
        image: "images/clothe2.jpg",
        Title: "Shirt",
        price: '$11.0'
    },
    {
        image: "images/clothe3.jpg",
        Title: "Shirt",
        price: '$9.0'
    },
    {
        image: "images/clothe4.jpg",
        Title: "Shirt",
        price: '$10$'
    },
    {
        image: "images/clothe5.jpg",
        Title: "Shirt",
        price: '$11.0'
    },
    {
        image: "images/clothe6.jpg",
        Title: "Shirt",
        price: '$9.0'
    },
    {
        image: "images/clothe7.jpg",
        Title: "Shirt",
        price: '$9.0'
    },
    {
        image: "images/clothe8.jpg",
        Title: "Shirt",
        price: '$7.99'
    },
    {
        image: "images/clothe9.jpg",
        Title: "Shirt",
        price: '$9.99'
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
        Title: "New Bag",
        price: '$10.99'

    },
    {
        image: "images/bag11.jpg",
        Title: "New Bag",
        price: '$11.99'
    },
    {
        image: "images/bag12.jpg",
        Title: "Shirt",
        price: '$9.99'
    },
    {
        image: "images/bag4.jpg",
        Title: "Shirt",
        price: '$10.99'
    },
    {
        image: "images/bag5.jpg",
        Title: "New Bag",
        price: '7.99'
    },
    {
        image: "images/bag6.jpg",
        Title: "New Bag",
        price: '$8.99'
    },
    {
        image: "images/bag7.jpg",
        Title: "New Bag",
        price: '$13.99'
    },
    {
        image: "images/bag8.jpg",
        Title: "New Bag",
        price: '$12.99'
    },
    {
        image: "images/bag9.jpg",
        Title: "New Bag",
        price: '$8.99'
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
        Title: "New Shoe",
        price: '$10.0'

    },
    {
        image: "images/shoe2.jpg",
        Title: "New Shoe",
        price: '$11.99'
    },
    {
        image: "images/shoe3.jpg",
        Title: "New Shoe",
        price: '$9.99'
    },
    {
        image: "images/shoe4.jpg",
        Title: "New Shoe",
        price: '$10.99'
    },
    {
        image: "images/shoe5.jpg",
        Title: "Best Seller",
        price: '$15.99'
    },
    {
        image: "images/shoe6.jpg",
        Title: "Best Seller",
        price: '$17.99'
    },
    {
        image: "images/shoe7.jpg",
        Title: "Best Seller",
        price: '$11.99'
    },
    {
        image: "images/shoe8.jpg",
        Title: "Best Seller",
        price: '$8.99'
    },
    {
        image: "images/shoe9.jpg",
        Title: "Best Seller",
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


