import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

const app = express();

dotenv.config()

const port = process.env.PORT;

app.listen(port || 5000 , () => {
    connectDB();
    console.log(`listening on port ${port}`)
});

