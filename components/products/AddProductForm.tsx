"use client"

import { ReactNode } from "react";
import ProductForm from "./ProductForm";
import { ProductSchema } from "@/src/schema";
import { toast } from "react-toastify";

export default async function AddProductForm({children}: {children: ReactNode}) {

  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      price: formData.get("price"),
      categoryId: formData.get("categoryId")
    }

    const result = ProductSchema.safeParse(data)
    if (!result.success) {
      result.error.issues.forEach(issue => toast.error(issue.message))
      return
    }
  }

  return (
    <div className="bg-white shadow rounded mt-10 px-5 py-10 max-w-3xl mx-auto">
      <form className="space-y-5" action={handleSubmit}>
        {children}

        <input
          type="submit"
          value="Agregar Producto" 
          className="p-3 rounded uppercase text-white bg-indigo-600 hover:bg-indigo-700 transition-all w-full cursor-pointer"
        />
      </form>
    </div>
  )
}
