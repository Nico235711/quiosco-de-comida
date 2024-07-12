"use client"

import { SearchSchema } from "@/src/schema"
import { useRouter } from "next/navigation"
// import { redirect } from "next/navigation" => componentes de servidor

import { toast } from "react-toastify"

export default function ProductSearchForm() {
  const router = useRouter()

  const handleSearchForm = (formData: FormData) => {
    const data = {
      search: formData.get("search")
    }
    const result = SearchSchema.safeParse(data)
    if (!result.success) {
      result.error.issues.forEach(issue => toast.error(issue.message))
      return
    }
    router.push(`/admin/products/search?search=${result.data.search}`)
  }

  return (
    <form className="flex items-center gap-5" action={handleSearchForm}>
      <input
        type="text"
        placeholder="Buscar producto" 
        className="border border-gray-200 w-full lg:w-auto p-1 text-sm"
        name="search"
      />

      <input
        type="submit"
        value="Buscar" 
        className="p-1 rounded uppercase text-white bg-black w-full lg:w-auto cursor-pointer"
      />
    </form>
  )
}
