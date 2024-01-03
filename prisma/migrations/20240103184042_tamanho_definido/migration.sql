/*
  Warnings:

  - You are about to alter the column `nome` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(60)`.
  - You are about to alter the column `senha` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(60)`.

*/
-- AlterTable
ALTER TABLE "usuarios" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(60),
ALTER COLUMN "senha" SET DATA TYPE VARCHAR(60);
