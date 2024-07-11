import Link from "next/link";

type ProductsPaginationProps = {
  currentPage: number
  totalPages: number
}

export default function ProductsPagination({ currentPage, totalPages }: ProductsPaginationProps) {

  return (
    <nav className="flex justify-center py-10">
      {currentPage < totalPages ? (
        <Link
          href={`/admin/products?page=${currentPage + 1}`}
          className="bg-amber-500 w-10 h-10 flex justify-center items-center rounded text-2xl"
        >
          &raquo;
        </Link>
      ) : (
        <Link
          href={`/admin/products?page=${currentPage - 1}`}
          className="bg-amber-500 py-2 px-4 flex justify-center items-center rounded text-2xl"
        >
          &laquo;
        </Link>
      )}
    </nav>
  )
}
