import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

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
  const products = await getProducts(currentPage, pageSize)

  return (
    <>
      <Heading label="Administrar Productos" />
      <ProductsTable products={products} />
    </>
  )
}
