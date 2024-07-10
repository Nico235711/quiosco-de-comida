import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";
import { devtools, persist } from "zustand/middleware";

interface Store {
  order: OrderItem[]
  addToOrder: (product: Product) => void
  removeFromOrder: (id: OrderItem["id"]) => void
  increaseQuantity: (id: OrderItem["id"]) => void
  decreaseQuantity: (id: OrderItem["id"]) => void
  cleanOrder: () => void
}

export const useStore = create<Store>()(
  devtools(
    persist((set, get) => ({
      order: [],
      addToOrder: (product) => {
        // saco las propiedades que no quiero
        const { categoryId, image, ...data } = product
        let order: OrderItem[] = []

        if (get().order.find(item => item.id === product.id)) {
          // localizo el item que debo modificar la cantidad y el subTotal
          order = get().order.map(item => item.id === product.id ? {
            ...item,
            quantity: item.quantity + 1,
            subTotal: (item.quantity + 1) * item.price
          } : item)
        } else {
          order = [...get().order, {
            ...data,
            quantity: 1,
            subTotal: 1 * product.price
          }]
        }
        set(({
          order
        }))
      },
      removeFromOrder: (id) => {
        set((state) => ({
          order: state.order.filter(item => item.id !== id)
        })
        )
      },
      increaseQuantity: (id) => {
        set((state) => ({
          order: get().order.map(item => item.id === id ? {
            ...item,
            quantity: item.quantity + 1,
            subTotal: (item.quantity + 1) * item.price
          } : item)
        }))
      },
      decreaseQuantity: (id) => {
        const order = get().order.map(item => item.id === id ? {
          ...item,
          quantity: item.quantity - 1,
          subTotal: (item.quantity - 1) * item.price
        } : item)
        set((state) => ({
          order 
        }))
      },
      cleanOrder: () => {
        set({
          order: []
        })
      }
    }),
      {
        name: "order-storage"
      }
    )
  )
)