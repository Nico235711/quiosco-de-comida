"use client"

import { useStore } from "@/src/store";
import { Product } from "@prisma/client";

type AddProductButtonProps = {
  product: Product
}

export default function AddProductButton({ product }: AddProductButtonProps) {

  const addToOrder = useStore((state) => state.addToOrder)

  return (
    <input
      type="button"
      value="Agregar al Pedido"
      className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white py-1 px-4 mt-5 w-full text-xl cursor-pointer lg:text-lg"
      onClick={() => addToOrder(product)}
    />
  )
}
