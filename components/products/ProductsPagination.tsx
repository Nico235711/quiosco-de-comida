import Link from "next/link";

export default function ProductsPagination({ currentPage }: { currentPage: number }) {

  return (
    <nav className="flex justify-center py-10">
      <Link href={`/admin/products?page=${currentPage + 1}`}>&raquo;</Link>
    </nav>
  )
}
