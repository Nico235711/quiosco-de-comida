"use client"

import { ReactNode } from "react";
import ProductForm from "./ProductForm";

export default async function AddProductForm({children}: {children: ReactNode}) {

  const handleSubmit = async (formData: FormData) => {
    console.log("🚀 ~ handleSubmit ~ handleSubmit")
  }

  return (
    <div className="bg-white shadow rounded mt-10 px-5 py-10 max-w-3xl mx-auto">
      <form className="space-y-5" action={handleSubmit}>
        {children}

        <input
          type="submit"
          value="Agregar Producto" 
          className="p-3 rounded uppercase text-white bg-black w-full cursor-pointer"
        />
      </form>
    </div>
  )
}
