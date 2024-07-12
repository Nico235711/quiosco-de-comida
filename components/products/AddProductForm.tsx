import ProductForm from "./ProductForm";

export default function AddProductForm() {

  return (
    <div className="bg-white shadow rounded mt-10 px-5 py-10 max-w-3xl mx-auto">
      <form className="space-y-5">
        <ProductForm />

        <input
          type="submit"
          value="Agregar Producto" 
          className="p-3 rounded uppercase text-white bg-black w-full cursor-pointer"
        />
      </form>
    </div>
  )
}
