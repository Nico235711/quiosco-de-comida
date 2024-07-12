
export default async function ProductForm() {

  return (
    <>
      <div className="space-y-2 mb-5">
        <label
          className="text-slate-800"
          htmlFor="name"
        >Nombre:</label>
        <input
          id="name"
          type="text"
          name="name"
          className="block w-full p-3"
          placeholder="Nombre Producto"
        />
      </div>

      <div className="space-y-2 mb-5">
        <label
          className="text-slate-800"
          htmlFor="price"
        >Precio:</label>
        <input
          id="price"
          name="price"
          className="block w-full p-3"
          placeholder="Precio Producto"
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-slate-800"
          htmlFor="categoryId"
        >Categoría:</label>
        <select
          className="block w-full p-3"
          id="categoryId"
          name="categoryId"
        >
          <option value="">-- Seleccione --</option>

        </select>
      </div>
    </>
  )
}