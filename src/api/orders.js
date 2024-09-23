import express from "express"
import { handlePayment, createOrder, getOrderById, getOrderForUser } from "../application/orders.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";


const ordersRouter=express.Router();

ordersRouter.route("/").post(ClerkExpressRequireAuth(),createOrder);
ordersRouter.route("/:id").get(ClerkExpressRequireAuth(),getOrderById);
ordersRouter.route("/users/:userId").get(ClerkExpressRequireAuth(),getOrderForUser);
ordersRouter.route("/webhook/payment").post(handlePayment);

export default ordersRouter;