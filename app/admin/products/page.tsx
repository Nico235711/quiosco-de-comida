import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getProducts() {
  return prisma.product.findMany()
}

export default async function ProductsPage() {  

  const products = await getProducts()

  return (
    <>
      <Heading label="Administrar Productos" />
      <ProductsTable products={products} />
    </>
  )
}
