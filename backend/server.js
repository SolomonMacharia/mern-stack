import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

const app = express();

app.use(express.json());

dotenv.config()

const port = process.env.PORT;

app.post("/api/products", async(req, res) => {
    const product = req.body;
    // check for all required fields
    if (!product.name || !product.price || !product.image) {
        return res.status(404).json({success: false, message:"Please provide all fields."});
    }
    // create a new product with the Product model
    const newProduct = new Product(product);

    // save the product to the Products collection
    try {
        await newProduct.save(newProduct);
        return res.status(201).json({success: true, message: "Product saved successfully.", data: newProduct});
    } catch (err) {
        console.log("Error in create product", err.message);
        return res.status(500).json({success: false, message: "Server error"});
    }
})

app.listen(port || 5000 , () => {
    connectDB();
    console.log(`listening on port ${port}`)
});

