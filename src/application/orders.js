import Order from "../infrastructure/schemas/Order.js";
import orderDto from "./dto/orders.js"

const createOrder = async(req,res)=>{
    const order= orderDto.safeParse(req.body);

    if(!order.success){
        return res.status(400).json({ message: order.error.errors }).send();
    }

    await Order.create({
        userId:order.data.userId,
        orderProducts:order.data.orderProducts
    });

    return res.status(201).send();

}

const getOrderById=async(req,res)=>{
  const orderId=req.params.id;
  const order=await Order.findById(orderId).populate({
    path:"orderProducts.productId",
    model:"Product",
  });

  if(!order){
    return res.status(404).json({message:"Order not found"}).send();
  }

  return res.status(200).json(order).send();
}

const getOrderForUser=async(req,res)=>{
    const userId=req.params.userId;
    console.log(userId);
    
    const orders=await Order.find({userId:userId});
    return res.status(200).json(orders).send()


}

export {createOrder,getOrderById,getOrderForUser}