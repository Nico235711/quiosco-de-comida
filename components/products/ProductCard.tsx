import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

  return (
    <div className="bg-white border p-5">
      <div className="relative w-60 h-60">
        <Image
          src={`/products/${product.image}.jpg`}
          alt={`image de ${product.name}`}
          fill
        />
      </div>

      <div>
        <h3 className="text-xl font-black">{product.name}</h3>
        <p className="text-lg text-amber-400 font-black mt-5">{formatCurrency(product.price)}</p>
      </div>
    </div>
  )
}
