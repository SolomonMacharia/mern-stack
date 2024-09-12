import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
    {
    name: {
        type: "string",
        required: true,
    },
    price: {
        type: "number",
        required: true,
    },
    image: {
        type: "string",
        required: true,
    }
    },
    {
    timestamps: true //createdAt, updatedAt
    }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;