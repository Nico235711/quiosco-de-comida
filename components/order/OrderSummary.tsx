"use client" // componente de cliente

import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails"
import { formatCurrency } from "@/src/utils"
import { useMemo } from "react"
import { createOrder } from "@/actions/create-order-action"


export default function OrderSummary() {
  
  const order = useStore((state) => state.order)
  const total = useMemo(() => order.reduce((total, item) => total + item.subTotal, 0), [order])

  const handleCreateOrder = () => {
    createOrder()
  }

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-center text-4xl font-black">Mi Pedido</h1>
      {order.length === 0 ? (
        <p className="text-2xl text-center mt-5">El pedido esta vacío</p>
      ) : (
        <div className="mt-5">
          {order.map(item => (
            <ProductDetails key={item.id} item={item} />
          ))}
          <p className="mt-5 text-2xl">Total a Pagar: {""} 
            <span className="font-bold">{formatCurrency(total)}</span>
          </p>

          <form className="w-full mt-10 space-y-5" action={handleCreateOrder}>
            <input
              type="submit"
              value="Confirmar Pedido" 
              className="py-3 rounded uppercase text-white bg-black w-full cursor-pointer"
            />
          </form>
        </div>
      )}
    </aside>
  )
}
