import express from 'express';
import dotenv from "dotenv";
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import userRoutes from "./Routes/userRoutes.js";
import postRoutes from "./Routes/postRoutes.js";
import messageRoutes from "./Routes/messageRoutes.js";
import {v2 as cloudinary} from "cloudinary";

// middle ware : it is a function that runs between request and response

dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
}); 

// 1st middleware
app.use(express.json({ limit : '5mb'}));        // it parse the incoming JSON data/bodies from the request object (req.body) (as sent by API clients)
app.use(express.urlencoded({limit: '5mb', extended : true}))      // to parse form data in the req.body
app.use(cookieParser());        // allows us to get the cookie from the request and set the cookie inside the response

// Routes
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));

