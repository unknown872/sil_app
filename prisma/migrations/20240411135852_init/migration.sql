-- CreateTable
CREATE TABLE "employee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "tel" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "poste" TEXT NOT NULL,
    "salaire" INTEGER NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);
