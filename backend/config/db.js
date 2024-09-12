import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: $(conn.connection.host)`)
    }
    catch(err) {
        console.log(`Error connecting to database`, err.message)
        process.exit(1) // 1 means faliure, 0 means success
    }
};
