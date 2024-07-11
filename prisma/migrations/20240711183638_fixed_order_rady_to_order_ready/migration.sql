/*
  Warnings:

  - You are about to drop the column `orderRadyAt` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderRadyAt",
ADD COLUMN     "orderReadyAt" TIMESTAMP(3);
