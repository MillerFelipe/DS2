-- CreateTable
CREATE TABLE "CartaoCredito" (
    "id" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,
    "nomeTitular" TEXT NOT NULL,
    "dataValidade" TEXT NOT NULL,
    "cvv" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "CartaoCredito_pkey" PRIMARY KEY ("id")
);
