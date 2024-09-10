import { z } from "zod";

const orderDto = z.object({
    userId: z.string(),
    orderProducts: z.array(z.object({
        productId: z.string(),
        quantity: z.number()
    }))
})

export default orderDto