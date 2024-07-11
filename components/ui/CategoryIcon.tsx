"use client" // aca uso "use client" para usar useParams que solo funciona en componentes de cliente

import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

type CategoryIconProps = {
  category: Category
}

export default function CategoryIcon({ category }: CategoryIconProps) {

  const params = useParams<{ slug: string }>()
  const isActive = params.slug === category.slug

  return (
    <Link
      href={`/order/${category.slug}`}
      className={`${isActive ? "bg-amber-500" : ""} flex items-center gap-4 w-full border-t border-gray-100 last-of-type:border-b p-3`}>

      <div className="relative w-16 h-20">
        <Image
          src={`/icon_${category.slug}.svg`}
          alt={`Imagen de ${category.slug}`}
          fill
        />
      </div>

      <p className="text-lg font-bold">{category.name}</p>
    </Link>
  )
}
