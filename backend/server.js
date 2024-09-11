import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config()

const port = process.env.PORT;

console.log(process.env.MONGO_URI)

app.listen(port || 5000 , () => console.log(`listening on port ${port}`));

