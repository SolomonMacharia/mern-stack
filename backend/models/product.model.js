import mongoose from "mongoose";

const ProductSchema = mongoose.Schema.create(
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
    timestaps: true //createdAt, updatedAt
    }
);