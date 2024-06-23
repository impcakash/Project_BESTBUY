let data = [
    {
        name: "Apple - MacBook Pro - 16 Display with Touch Bar - Intel Core i9 - 16GB Memory - AMD Radeon Pro 5500M - 1TB SSD - Silver",
        rating: "5.0",
        currency: "$",
        price: "2399.99",
        size: "16",
        ram: "32",
        speed: "4.8",
        storage: "2048",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366581_sd.jpg;maxHeight=300;maxWidth=450",
    },
    {
        name: "Dell - XPS 13 2-in-1 Touch FHD+ Laptop - Intel Evo Platform Core i7- 8GB RAM- 256GB SSD - Platinum Silver with Black Palmrest",
        rating: "4.7",
        currency: "$",
        price: "1749.99",
        size: "15",
        ram: "24",
        speed: "4.5",
        storage: "1024",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443791_sd.jpg;maxHeight=300;maxWidth=450",
    },
    {
        name: "MacBook Air 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB SSD (Latest Model) - Space Gray",
        rating: "4.9",
        currency: "$",
        price: "899.99",
        size: "13",
        ram: "28",
        speed: "4.7",
        storage: "512",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=300;maxWidth=450",
    },
    {
        name: "Dell - XPS 13 Touch-Screen Laptop - Intel Core i7 - 8GB Memory - 512GB Solid State Drive - Platinum Silver",
        rating: "4.9",
        currency: "$",
        price: "1399.99",
        size: "14",
        ram: "20",
        speed: "4.4",
        storage: "520",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443792_sd.jpg;maxHeight=300;maxWidth=450",
    },
    {
        name: "Samsung - Galaxy Book Go - 14.0 LED Screen - Qualcomm® Snapdragon™ 7C Gen 2 Processor - 4GB Memory - 128GB eMMC - Silver",
        rating: "4.1",
        currency: "$",
        price: "279.99",
        size: "14",
        ram: "8",
        speed: "3.1",
        storage: "224",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6466/6466552_sd.jpg;maxHeight=300;maxWidth=450",
    },
    {
        name: "HP - 15.6 Laptop - Intel Core i5 - 8GB Memory - 256GB SSD - Natural Silver",
        rating: "4.8",
        currency: "$",
        price: "549.99",
        size: "15",
        ram: "12",
        speed: "3.3",
        storage: "330",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6479/6479500_sd.jpg;maxHeight=300;maxWidth=450",
    },
    {
        name: "Dell Inspiron 7501 15.6 FHD Laptop - Intel Core i5 - 8GB Memory - 256GB Solid State Drive - Silver",
        rating: "4.8",
        currency: "$",
        price: "599.99",
        size: "16",
        ram: "18",
        speed: "4.1",
        storage: "712",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6482/6482927_sd.jpg;maxHeight=300;maxWidth=450",
    },
    {
        name: "MacBook Air 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB SSD (Latest Model) - Space Gray",
        rating: "4.9",
        currency: "$",
        price: "899.99",
        size: "13",
        ram: "24",
        speed: "4.8",
        storage: "520",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=300;maxWidth=450",
    },
    {
        name: "Microsoft - Surface Laptop Go - 12.4 Touch-Screen - Intel 10th Generation Core i5 - 4GB Memory - 64GB eMMC - Platinum",
        rating: "4.6",
        currency: "$",
        price: "399.99",
        size: "13",
        ram: "10",
        speed: "3.8",
        storage: "670",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428991_sd.jpg;maxHeight=300;maxWidth=450",
    },
    {
        name: "Dell - Inspiron 7000 2-in-1 14 Touch-Screen Laptop - AMD Ryzen 7 - 16GB Memory - 512GB Solid State Drive - Blue",
        rating: "4.8",
        currency: "$",
        price: "949.99",
        size: "14",
        ram: "18",
        speed: "4.2",
        storage: "1270",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458906_sd.jpg;maxHeight=300;maxWidth=450",
    },
    {
        name: "HP - Pavilion x360 2-in-1 11.6 Touch-Screen Laptop - Intel Pentium Silver - 4GB Memory - 128 SSD - Natural Silver",
        rating: "4.7",
        currency: "$",
        price: "349.99",
        size: "11",
        ram: "4",
        speed: "2.7",
        storage: "156",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477414_sd.jpg;maxHeight=300;maxWidth=450",
    },
    {
        name: "Acer - Chromebook 311 11.6” HD Display MediaTek MT8183C Octa-Core 4GB LPDDR4X 32GB eMMC WiFi 5 USB Type-C",
        rating: "4.3",
        currency: "$",
        price: "109.99",
        size: "10",
        ram: "5",
        speed: "2.8",
        storage: "162",
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6471/6471196_sd.jpg;maxHeight=300;maxWidth=450",
    },
];

let parent = document.getElementById('products');

function showProducts(d) {
    parent.innerHTML = null;
    d.forEach(function (product) {

        let div = document.createElement("div");

        let img = document.createElement("img");

        img.src = product.img;

        let product_currency = document.createElement("p");
        product_currency.textContent = product.currency;

        let product_price = document.createElement("p");
        product_price.textContent = product.currency + " " + product.price;

        let product_name = document.createElement("p");
        product_name.textContent = product.name;

        let product_rating = document.createElement("p");
        product_rating.textContent = "Rating " + product.rating;

        let addtocart_btn = document.createElement("button");

        addtocart_btn.innerText = "Add to Cart";

        addtocart_btn.onclick = function () {
            addtoCart(product);
        };

        div.append(img, product_name, product_price, product_rating, addtocart_btn);

        parent.append(div);
    });

}

showProducts(data);


