"use server"

import { prisma } from "@/src/lib/prisma";

export async function completeOrder(formData: FormData) {
  const orderId = formData.get("order_id")!
  try {
    await prisma.order.update({
      where: {
        id: +orderId
      },
      data: {
        status: true,
        orderReadyAt: new Date(Date.now())
      }
    })

  } catch (error) {
    console.log(error);
    
  }
}