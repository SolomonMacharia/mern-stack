import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config()

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(port || 5000 , () => {
    connectDB();
    console.log(`listening on port ${port}`)
});

