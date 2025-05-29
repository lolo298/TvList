-- DropIndex
DROP INDEX "Show_tmdbId_idx";

-- CreateIndex
CREATE INDEX "tmdb_type_index" ON "Show"("tmdbId", "type");
