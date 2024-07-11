import Link from "next/link";

type ProductsPaginationProps = {
  currentPage: number
  totalPages: number
}

export default function ProductsPagination({ currentPage, totalPages }: ProductsPaginationProps) {

  const pages = Array.from({length: totalPages}, (_, index) => index + 1)

  return (
    <nav className="flex justify-center py-10 gap-5">

      {currentPage > 1 && (
        <Link
          href={`/admin/products?page=${currentPage - 1}`}
          className="bg-amber-500 py-2 px-4 flex justify-center items-center rounded text-2xl"
        >
          &laquo;
        </Link>
      )}

      {pages.map(page => (
        <Link
          href={`/admin/products?page=${page}`}
          key={page}
          className={`${page === currentPage ? "bg-amber-500" : ""} py-2 px-4 flex justify-center items-center rounded text-2xl`}
        >{page}</Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={`/admin/products?page=${currentPage + 1}`}
          className="bg-amber-500 py-2 px-4 flex justify-center items-center rounded text-2xl"
        >
          &raquo;
        </Link>
      )}
    </nav>
  )
}
