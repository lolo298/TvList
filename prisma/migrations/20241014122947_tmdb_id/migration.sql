/*
  Warnings:

  - A unique constraint covering the columns `[tmdbId]` on the table `Episode` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tmdbId]` on the table `Season` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tmdbId]` on the table `Show` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Episode_tmdbId_key" ON "Episode"("tmdbId");

-- CreateIndex
CREATE UNIQUE INDEX "Season_tmdbId_key" ON "Season"("tmdbId");

-- CreateIndex
CREATE UNIQUE INDEX "Show_tmdbId_key" ON "Show"("tmdbId");
