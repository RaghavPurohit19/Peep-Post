import express from 'express';
import dotenv from "dotenv";
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import userRoutes from "./Routes/userRoutes.js";
import postRoute from "./Routes/postRoutes.js";

// middle ware : it is a function that runs between request and response

dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

// 1st middleware
app.use(express.json());        // it parse the incoming JSON data/bodies from the request object (req.body) (as sent by API clients)
app.use(express.urlencoded({extended : true}))      // to parse form data in the req.body
app.use(cookieParser());        // allows us to get the cookie from the request and set the cookie inside the response

// Routes
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoute);

app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));

