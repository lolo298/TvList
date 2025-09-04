-- AlterTable
ALTER TABLE "_EpisodeToUser" ADD CONSTRAINT "_EpisodeToUser_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_EpisodeToUser_AB_unique";

-- AlterTable
ALTER TABLE "_FollowedShows" ADD CONSTRAINT "_FollowedShows_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_FollowedShows_AB_unique";

-- AlterTable
ALTER TABLE "_LovedShows" ADD CONSTRAINT "_LovedShows_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_LovedShows_AB_unique";

-- CreateIndex
CREATE INDEX "Show_tmdbId_idx" ON "Show"("tmdbId");
