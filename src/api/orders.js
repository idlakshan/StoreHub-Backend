import express from "express"
import { handlePayment, createOrder, getOrderById, getOrderForUser } from "../application/orders.js";



const ordersRouter=express.Router();

ordersRouter.route("/").post(createOrder);
ordersRouter.route("/:id").get(getOrderById);
ordersRouter.route("/users/:userId").get(getOrderForUser);
ordersRouter.route("/webhook/payment").post(handlePayment);

export default ordersRouter;