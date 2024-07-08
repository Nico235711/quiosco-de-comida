import { Category } from "@prisma/client"
import Image from "next/image"

type CategoryIconProps = {
  category: Category
}

export default function CategoryIcon({ category }: CategoryIconProps) {

  return (
    <div className={`flex items-center gap-4 w-full border-t border-gray-100 last-of-type:border-b p-3`}>

      <div className="relative w-16 h-20">
        <Image
          src={`/icon_${category.slug}.svg`}
          alt={`Imagen de ${category.slug}`}
          fill
        />
      </div>

      <p className="text-lg font-bold">{category.name}</p>
    </div>
  )
}
