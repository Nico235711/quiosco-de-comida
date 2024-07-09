import ProductCard from "@/components/products/ProductCard";
import { prisma } from "@/src/lib/prisma";

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: { slug: category }
    }
  })

  return products
}

export default async function OrderPage({ params }: { params: { slug: string } }) {

  const products = await getProducts(params.slug)

  return (
    <>
      <h1 className="text-4xl text-center font-black mb-5">Elige y personaliza tu pedido</h1>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
