/*
  Warnings:

  - You are about to drop the column `cover` on the `Show` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Image_Type" AS ENUM ('POSTER', 'BACKDROP', 'STILL', 'PROFILE', 'LOGO');

-- CreateTable
CREATE TABLE "TMDBImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "type" "Image_Type" NOT NULL,
    "showId" INTEGER NOT NULL,
    "seasonId" INTEGER,
    "episodeId" INTEGER,

    CONSTRAINT "TMDBImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TMDBImage" ADD CONSTRAINT "TMDBImage_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TMDBImage" ADD CONSTRAINT "TMDBImage_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TMDBImage" ADD CONSTRAINT "TMDBImage_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "Episode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Move data from Show to TMDBImage
INSERT INTO "TMDBImage" ("url", "type", "showId") SELECT "cover", 'POSTER', "id" FROM "Show" WHERE "cover" IS NOT NULL;

-- AlterTable
ALTER TABLE "Show" DROP COLUMN "cover";