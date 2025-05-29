/*
  Warnings:

  - Added the required column `adult` to the `Episode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adult` to the `Show` table without a default value. This is not possible if the table is not empty.
  - Added the required column `popularity` to the `Show` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Episode" ADD COLUMN     "adult" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Show" ADD COLUMN     "adult" BOOLEAN NOT NULL,
ADD COLUMN     "popularity" DOUBLE PRECISION NOT NULL;
