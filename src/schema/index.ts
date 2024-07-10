import { z } from "zod";

export const OrderSchema = z.object({
  name: z.string(),
  total: z.number(),
  order: z.array(z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    subTotal: z.number()
  }))
})