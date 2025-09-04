-- CreateEnum
CREATE TYPE "Image_Type" AS ENUM ('POSTER', 'BACKDROP', 'STILL', 'PROFILE', 'LOGO');

-- CreateTable
CREATE TABLE "TMDBImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "type" "Image_Type" NOT NULL,
    "showId" INTEGER,
    "seasonId" INTEGER,
    "episodeId" INTEGER,

    CONSTRAINT "TMDBImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TMDBImage" ADD CONSTRAINT "TMDBImage_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TMDBImage" ADD CONSTRAINT "TMDBImage_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TMDBImage" ADD CONSTRAINT "TMDBImage_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "Episode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "Show" DROP COLUMN "cover";