import express from "express"
import { createOrder, getOrderById, getOrderForUser } from "../application/orders.js";



const ordersRouter=express.Router();

ordersRouter.route("/").post(createOrder);
ordersRouter.route("/:id").get(getOrderById);
ordersRouter.route("/users/:userId").get(getOrderForUser);

export default ordersRouter;