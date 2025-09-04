/*
  Warnings:

  - You are about to drop the column `adult` on the `Episode` table. All the data in the column will be lost.
  - You are about to drop the column `showId` on the `Episode` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Episode" DROP CONSTRAINT "Episode_showId_fkey";

-- AlterTable
ALTER TABLE "Episode" DROP COLUMN "adult",
DROP COLUMN "showId",
ALTER COLUMN "cover" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Show" ALTER COLUMN "cover" DROP NOT NULL;
