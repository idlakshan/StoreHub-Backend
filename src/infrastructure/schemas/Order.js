import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    userId: {
        type: String,

        required: true
    },
    orderProducts: {
        type: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true,
                    min: 1
                }
            }
        ]
    },
    address: {
        fname: {
            type: String,
            required: true
        },
        lname: {
            type: String,
            required: true
        },
        line_1: {
            type: String,
            required: true
        },
        line_2: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
    },
    paymentStatus: {
        type: String,
        required: true,
        enum: ["PENDING", "PAID", "CANCELLED"],
        default: "PENDING",

    }
});

const Order = mongoose.model("order", OrderSchema);
export default Order;