"use client"

import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useState } from "react"
import { TbPhotoPlus } from 'react-icons/tb'

export default function ImageUpload() {

  const [imageURL, setImageURL] = useState("")

  return (
    <CldUploadWidget
      onSuccess={(result, {widget}) => {
        if (result.event === "success") {
          widget.close()
          // @ts-ignore
          setImageURL(result.info.secure_url)
        }
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

              {imageURL && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    fill
                    src={imageURL}
                    alt="imagen del producto" 
                    style={{objectFit: "contain"}}
                  />
                </div>
              )}
            </div>
          </div>

          <input
            type="hidden"
            name="image" 
            value={imageURL}
          />
        </>
      )}
    </CldUploadWidget>
  )
}
