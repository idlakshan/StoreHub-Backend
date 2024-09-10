import { z } from "zod";

export const productDto=z.object({
    categoryId: z.string(),
    image: z.string(),
    name: z.string(),
    price: z.string(),
    description: z.string(),
});


