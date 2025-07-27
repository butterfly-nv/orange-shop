const clothes=[
    {
        image: "images/clothe1.png",
        Title: "Shirt",
        price: '$10.0'

    },
    {
        image: "images/clothe1.png",
        Title: "",
        price: ''
    },
    {
        image: "images/clothe1.png",
        Title: "",
        price: ''
    },
    {
        image: "images/clothe1.png",
        Title: "",
        price: ''
    },
    {
        image: "images/clothe1.png",
        Title: "",
        price: ''
    },
    {
        image: "images/clothe1.png",
        Title: "",
        price: ''
    }
];

let clothe= '';
for (let i=0; i< clothes.length; i++){
    clothe +=` <div class="col-lg-4 col-md-6 col-sm-12 ">
                      <div class="product-card">
                        <img class="product-img" src="${clothes[i].image}" alt="T-shirt" class="product-img" />
                        <p class="product-title mt-3 mb-1">${clothes[i].Title}</p>
                        <p class="price">${clothes[i].price}</p>
                        <button class="add-to-cart">Add To Cart</button>
                    </div>
                </div>`;
}

document.getElementById("clothes").innerHTML = clothe;


