import Product from "../models/product.model.js";

export const createProduct = async(req, res) => {
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
}

export const updateProduct =  async(req, res) => {
    const {id} = req.params;
    const product = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, data: updatedProduct});
    } catch (err) {
        console.log(err);
        res.status(500).json({success: false, message: "Internal server error!"})
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({total: products.length, products: products});
    } catch (err) {
        console.log(err, err.message)
        res.status(404).json({success: false, message: 'Products not found!'});
    }
}

export const getProduct = async(req, res) => {
    const {id} = req.params;

    try {
        const product = await Product.findById(id);
        res.status(200).json({success:true, product: product })
    } catch(err) {
        res.status(404).json({success:false, message: `Produce with id ${id} not found!`})
    }
}

export const deleteProduct = async(req, res) => {
    //first destructure the id from the url
    const {id} = req.params;

    //delete the product from the database
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message:'Product deleted successfully'})
    } catch (err) {
        console.log(err.message)
        res.status(404).json({success: false, message: 'Product not found!'})
    }
}