/*
  Warnings:

  - The primary key for the `Episode` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Episode` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Season` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Season` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Show` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Show` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `tmdbId` to the `Episode` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `seasonId` on the `Episode` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `showId` on the `Episode` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `tmdbId` to the `Season` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `showId` on the `Season` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `tmdbId` to the `Show` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `A` on the `_EpisodeToUser` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_FollowedShows` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_LovedShows` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Episode" DROP CONSTRAINT "Episode_seasonId_fkey";

-- DropForeignKey
ALTER TABLE "Episode" DROP CONSTRAINT "Episode_showId_fkey";

-- DropForeignKey
ALTER TABLE "Season" DROP CONSTRAINT "Season_showId_fkey";

-- DropForeignKey
ALTER TABLE "_EpisodeToUser" DROP CONSTRAINT "_EpisodeToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_FollowedShows" DROP CONSTRAINT "_FollowedShows_A_fkey";

-- DropForeignKey
ALTER TABLE "_LovedShows" DROP CONSTRAINT "_LovedShows_A_fkey";

-- AlterTable
ALTER TABLE "Episode" DROP CONSTRAINT "Episode_pkey",
ADD COLUMN     "tmdbId" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "seasonId",
ADD COLUMN     "seasonId" INTEGER NOT NULL,
DROP COLUMN "showId",
ADD COLUMN     "showId" INTEGER NOT NULL,
ADD CONSTRAINT "Episode_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Season" DROP CONSTRAINT "Season_pkey",
ADD COLUMN     "tmdbId" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "showId",
ADD COLUMN     "showId" INTEGER NOT NULL,
ADD CONSTRAINT "Season_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Show" DROP CONSTRAINT "Show_pkey",
ADD COLUMN     "tmdbId" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Show_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_EpisodeToUser" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "_FollowedShows" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "_LovedShows" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_EpisodeToUser_AB_unique" ON "_EpisodeToUser"("A", "B");

-- CreateIndex
CREATE UNIQUE INDEX "_FollowedShows_AB_unique" ON "_FollowedShows"("A", "B");

-- CreateIndex
CREATE UNIQUE INDEX "_LovedShows_AB_unique" ON "_LovedShows"("A", "B");

-- AddForeignKey
ALTER TABLE "Season" ADD CONSTRAINT "Season_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowedShows" ADD CONSTRAINT "_FollowedShows_A_fkey" FOREIGN KEY ("A") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LovedShows" ADD CONSTRAINT "_LovedShows_A_fkey" FOREIGN KEY ("A") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EpisodeToUser" ADD CONSTRAINT "_EpisodeToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Episode"("id") ON DELETE CASCADE ON UPDATE CASCADE;
