import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

  return (
    <div className="bg-white border p-5">
      <Image
        src={`/products/${product.image}.jpg`}
        alt={`image de ${product.name}`}
        width={400}
        height={400}
        className="block mx-auto"
      />

      <div>
        <h3 className="text-xl font-black mt-5 h-16">{product.name}</h3>
        <p className="text-2xl text-amber-500 font-black mt-5">{formatCurrency(product.price)}</p>
        <input
          type="button"
          value="Agregar al Pedido" 
          className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white py-1 px-4 mt-5 w-full text-xl cursor-pointer lg:text-lg"
        />
      </div>
    </div>
  )
}
