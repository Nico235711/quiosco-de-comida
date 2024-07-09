import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";
import { devtools } from "zustand/middleware";

interface Store {
  order: OrderItem[]
  addOrder: (product: Product) => void
}

export const useStore = create<Store>()(devtools((set) => ({
  order: [],
  addOrder: (product) => {
    // saco las propiedades que no quiero
    const { categoryId, image, ...data } = product

    set((state) => ({
      order: [...state.order, {
        ...data,
        quantity: 1,
        subTotal: 1 * product.price
      }]
    }))
  }
})))