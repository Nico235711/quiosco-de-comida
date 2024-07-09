import { prisma } from "@/src/lib/prisma"
import CategoryIcon from "../ui/CategoryIcon"

async function getCatories() {
  return await prisma.category.findMany()  
}

export default async function OrderSideBar() {

  const categories = await getCatories()  

  return (  
    <aside className="bg-white lg:h-screen lg:w-72">
      <nav className="mt-10">
        {categories.map(category => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  )
}
