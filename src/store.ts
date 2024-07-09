import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";

interface Store {
  order: OrderItem[]
  addOrder: (product: Product) => void
}

export const useStore = create<Store>(() => ({
  order: [],
  addOrder: (product) => {
    console.log(`agregando: ${product}`);
    
  }
}))