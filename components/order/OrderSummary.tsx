"use client" // componente de cliente

import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails"
import { formatCurrency } from "@/src/utils"
import { useMemo } from "react"


export default function OrderSummary() {
  
  const order = useStore((state) => state.order)
  const total = useMemo(() => order.reduce((total, item) => total + item.subTotal, 0), [order])

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-center text-4xl font-black">Mi Pedido</h1>
      {order.length === 0 ? (
        <p className="text-2xl text-center mt-5">La orden esta vacía</p>
      ) : (
        <div className="mt-5">
          {order.map(item => (
            <ProductDetails key={item.id} item={item} />
          ))}
          <p className="mt-5 text-2xl">Total a Pagar: {""} 
            <span className="font-bold">{formatCurrency(total)}</span>
          </p>
        </div>
      )}
    </aside>
  )
}
