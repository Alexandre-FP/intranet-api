/*
  Warnings:

  - Added the required column `cargoId` to the `telefones` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "telefones" ADD COLUMN     "cargoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "telefones" ADD CONSTRAINT "telefones_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
