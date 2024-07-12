import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function searchProducts(searchTerm: string) {
  return await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: "insensitive"
      }
    },
    include: {
      category: true
    }
  })
}

export default async function SearchPage({ searchParams }: { searchParams: { search: string } }) {

  const products = await searchProducts(searchParams.search)  

  return (
    <>
      <Heading label={`Resultados de Búsqueda de la Categoría: ${searchParams.search}`} />
      <div className="flex flex-col lg:flex-row lg:justify-end">
        <ProductSearchForm />
      </div>
      {products.length === 0 ? (
        <p className="text-2xl mt-5">No hay productos en esta categoría</p>
      ) : (
        <ProductsTable products={products} />

      )}
    </>
  )
}
