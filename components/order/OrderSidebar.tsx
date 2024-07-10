import { prisma } from "@/src/lib/prisma"
import CategoryIcon from "../ui/CategoryIcon"
import Logo from "../ui/Logo"

async function getCatories() {
  return await prisma.category.findMany()  
}

export default async function OrderSideBar() {

  const categories = await getCatories()  

  return (  
    <aside className="bg-white md:w-72">
      <Logo />
      <nav className="mt-10">
        {categories.map(category => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  )
}
