"use client"

import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.min.css"

export default function ToastNotification() {

  return (
    <ToastContainer 
      autoClose={3500}
      pauseOnHover={false}
      theme="dark"
    />
  )
}
