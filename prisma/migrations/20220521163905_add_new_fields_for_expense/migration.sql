/*
  Warnings:

  - Added the required column `actionBy` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expenses" ADD COLUMN     "actionBy" VARCHAR(255) NOT NULL,
ADD COLUMN     "status" VARCHAR(255) NOT NULL;
