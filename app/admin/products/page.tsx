import ProductsPagination from "@/components/products/ProductsPagination";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";

async function productCount() {
  return await prisma.product.count()
}

async function getProducts(currentPage: number, pageSize: number) {
  const skip = (currentPage - 1) * pageSize

  return prisma.product.findMany({
    take: pageSize, // equivalente a un LIMIT en sql
    skip,
    include: {
      category: true
    }
  })
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>

export default async function ProductsPage({ searchParams }: { searchParams: { page: string } }) {  

  const currentPage = +searchParams.page || 1
  const pageSize = 10

  if (currentPage < 1) redirect("/admin/products")
  const productsData = getProducts(currentPage, pageSize)
  const totalProductsData = productCount()  
  const [ products, totalProducts ] = await Promise.all([productsData, totalProductsData])
  const totalPages = Math.ceil(totalProducts / pageSize)

  if (currentPage > totalPages) redirect("/admin/products")

  return (
    <>
      <Heading label="Administrar Productos" />
      <ProductsTable products={products} />
      <ProductsPagination currentPage={currentPage} totalPages={totalPages} />
    </>
  )
}
