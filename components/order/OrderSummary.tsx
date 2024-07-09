"use client" // componente de cliente

import { useStore } from "@/src/store"


export default function OrderSummary() {
  
  const order = useStore((state) => state.order)

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-center text-4xl font-black">Mi Pedido</h1>
      {order.length === 0 ? (
        <p className="text-2xl text-center mt-5">La orden esta vacía</p>
      ) : (
        <p>hay</p>
      )}
    </aside>
  )
}
