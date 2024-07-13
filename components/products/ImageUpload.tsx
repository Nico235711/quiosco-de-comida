"use client"

import { CldUploadWidget } from "next-cloudinary"
import { TbPhotoPlus } from 'react-icons/tb'

export default function ImageUpload() {

  return (
    <CldUploadWidget
      onSuccess={(result, {widget}) => {
        console.log(result);
        
      }}
      uploadPreset="quiosco-de-comida-nextjs"
      options={{
        maxFiles:1
      }}>
      {({open}) => (
        <>
          <div className="space-y-2">
            <label className="text-lg font-bold text-slate-800">Imagen del Producto</label>
            <div
              className="relative cursor-pointer hover:opacity-70 transition-all border-neutral-300 p-10 bg-slate-100 text-neutral-600 flex flex-col justify-center items-center gap-4"
              onClick={() => open()}
            >
              <TbPhotoPlus size={50} />
              <p>Agregar Imagen</p>
            </div>
          </div>
        </>
      )}
    </CldUploadWidget>
  )
}
