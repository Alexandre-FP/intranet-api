-- CreateEnum
CREATE TYPE "SituacaoEnum" AS ENUM ('ATIVADO', 'DESATIVADO', 'EXCLUIDO');

-- CreateTable
CREATE TABLE "secretarias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "situacao" "SituacaoEnum" NOT NULL DEFAULT 'ATIVADO',
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "secretarias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departamentos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "situacao" "SituacaoEnum" NOT NULL DEFAULT 'ATIVADO',
    "secretariaId" INTEGER NOT NULL,

    CONSTRAINT "departamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "telefones" (
    "id" SERIAL NOT NULL,
    "numero" BIGINT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "situacao" "SituacaoEnum" NOT NULL DEFAULT 'ATIVADO',
    "departamentoId" INTEGER NOT NULL,

    CONSTRAINT "telefones_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "departamentos" ADD CONSTRAINT "departamentos_secretariaId_fkey" FOREIGN KEY ("secretariaId") REFERENCES "secretarias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "telefones" ADD CONSTRAINT "telefones_departamentoId_fkey" FOREIGN KEY ("departamentoId") REFERENCES "departamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
