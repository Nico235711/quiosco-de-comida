import { prisma } from "@/src/lib/prisma"

async function getCatories() {
  return await prisma.category.findMany()  
}

export default async function OrderSideBar() {

  const categories = await getCatories()  

  return (  
    <aside className="bg-white md:h-screen md:w-72">
      OrderSideBar
    </aside>
  )
}
