//connect to mongodb
const mongoose = require("mongoose");

// models
const Product = require("./models/product");

mongoose.connect("mongodb://127.0.0.1/shop_db")

    .then((result) => {
        console.log("Connected to database");
    }).catch((err) => {
        console.log(err);
    }); 


const seedProducts = [
    {
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 260000,
        brand: "lois vuitton",
        color: "black",
        size: "L"
    },
    {
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 350000,
        brand: "lois vuitton",
        color: "black",
        size: "M"
    },
    {
        name: "Mens Cotton Jacket",
        price: 652000,
        brand: "lois vuitton",
        color: "black",
        size: "L"
    },
    {
        name: "Mens Casual Slim Fit",
        price: 210000,
        brand: "prada",
        color: "blue",
        size: "L"
    },
    {
        name: "Mens underwear",
        price: 60000,
        brand: "prada",
        color: "blue",
        size: "L"
    }   
]

Product.insertMany(seedProducts)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });