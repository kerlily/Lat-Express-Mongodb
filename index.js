const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//connect to mongodb
mongoose.connect("mongodb://127.0.0.1/shop_db")

    .then((result) => {
        console.log("Connected to database");
    }).catch((err) => {
        console.log(err);
    }); 

    
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");
    
    app.get("/", (req, res) => {
        res.send("heloow world");
    });

app.listen(3000, () => {
    console.log("Server started on port http://127.0.0.1:3000");
});