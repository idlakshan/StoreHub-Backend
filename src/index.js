import 'dotenv/config'
import express from "express";
import productRouter from "./api/products.js";
import categoriesRouter from "./api/categories.js";
import { connectDB } from "./infrastructure/db.js";
import ordersRouter from "./api/orders.js";
import globalErrorHandler from "./middleware/global-error-handler.js";
import cors from 'cors'

const app=express();
app.use(express.json());
app.use(cors({origin:"http://localhost:5173"}))


app.use("/api/products",productRouter);
app.use("/api/categories",categoriesRouter);
app.use("/api/orders",ordersRouter);

app.use(globalErrorHandler);

const PORT=8000;

connectDB();

app.listen(PORT,()=>{
    console.log(`server is listen on port ${PORT}`);
})





