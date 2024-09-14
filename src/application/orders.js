import Order from "../infrastructure/schemas/Order.js";
import orderDto from "./dto/orders.js"
import ValidationError from '../domain/errors/validation-error.js'
import NotFoundError from '../domain/errors/not-found-error.js'
const createOrder = async(req,res)=>{
    const order= orderDto.safeParse(req.body);

    if(!order.success){
     throw new ValidationError(order.error.message)
    }

   const createdOrder= await Order.create({
        userId:order.data.userId,
        orderProducts:order.data.orderProducts,
        address:order.data.address
    });

    return res.status(201).json(createdOrder);

}

const handlePayment =async(req,res)=>{
  const {orderId,status}=req.body;
  const order=await Order.findById(orderId);

  if(!order){
    throw new NotFoundError("Order not found")
   }

   if(status==="SUCCESS"){
    order.paymentStatus="PAID",
    await order.save();
    return res.status(200).send();
  }

   if(status==="FAILD"){
     return res.status(200).send();
   }

   
}

const getOrderById=async(req,res)=>{
  const orderId=req.params.id;
  const order=await Order.findById(orderId).populate({
    path:"orderProducts.productId",
    model:"Product",
  });

  if(!order){
   throw new NotFoundError("Order not found")
  }

  return res.status(200).json(order).send();
}

const getOrderForUser=async(req,res)=>{
    const userId=req.params.userId;
    console.log(userId);
    
    const orders=await Order.find({userId:userId});
    return res.status(200).json(orders).send()


}

export {createOrder,getOrderById,getOrderForUser,handlePayment}