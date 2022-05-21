-- CreateTable
CREATE TABLE "Expenses" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "refId" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "amount" MONEY NOT NULL,
    "expenseDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Expenses_pkey" PRIMARY KEY ("id")
);
