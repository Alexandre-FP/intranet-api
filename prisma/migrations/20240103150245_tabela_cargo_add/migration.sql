/*
  Warnings:

  - A unique constraint covering the columns `[numero]` on the table `telefones` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "cargos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "situacao" "SituacaoEnum" NOT NULL DEFAULT 'ATIVADO',

    CONSTRAINT "cargos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "situacao" "SituacaoEnum" NOT NULL DEFAULT 'ATIVADO',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "telefones_numero_key" ON "telefones"("numero");
