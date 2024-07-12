import { z } from "zod";

export const OrderSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  total: z.number(),
  order: z.array(z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    subTotal: z.number()
  }))
})

export const SearchSchema = z.object({
  search: z.string().trim() // .trim() => elimina los espacios al inicio y al final
    .min(1, { message: "La búsqueda no puede ir vacía" })
})