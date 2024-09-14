import { z } from "zod";

const orderDto = z.object({
    userId: z.string(),
    orderProducts: z.array(z.object({
        productId: z.string(),
        quantity: z.number()
    })),
    address: z.object({
        fname: z.string(),
        lname: z.string(),
        line_1: z.string(),
        line_2: z.string(),
        city: z.string(),
        phone: z.string(),
    })
})

export default orderDto