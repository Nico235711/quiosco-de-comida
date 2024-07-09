import { z } from "zod";

export const OrderSchema = z.object({
  name: z.string()
})