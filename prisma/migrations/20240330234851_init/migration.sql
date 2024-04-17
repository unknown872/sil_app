-- CreateTable
CREATE TABLE "Facture" (
    "id" SERIAL NOT NULL,
    "structure" TEXT NOT NULL,
    "designation" TEXT[],
    "quantity" TEXT[],
    "nature" TEXT[],
    "prixU" TEXT[],
    "prixT" TEXT[],

    CONSTRAINT "Facture_pkey" PRIMARY KEY ("id")
);
