

export default function ProductSearchForm() {

  return (
    <form className="flex items-center gap-5">
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
