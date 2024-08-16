import express from 'express';
import dotenv from "dotenv";
import connectDB from './db/connectDB.js';

// middle ware : it is a function that runs between request and response

dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

// 1st middleware
app.use(express.json());        // it parse the incoming JSON data/bodies from the request object (req.body) (as sent by API clients)

app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));

