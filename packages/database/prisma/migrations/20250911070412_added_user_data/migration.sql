/*
  Warnings:

  - You are about to drop the column `userId` on the `List` table. All the data in the column will be lost.
  - You are about to drop the column `preferencesId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `statsId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `_EpisodeToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userDataId` to the `List` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."List" DROP CONSTRAINT "List_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_EpisodeToUser" DROP CONSTRAINT "_EpisodeToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_EpisodeToUser" DROP CONSTRAINT "_EpisodeToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_FollowedShows" DROP CONSTRAINT "_FollowedShows_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_LovedShows" DROP CONSTRAINT "_LovedShows_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_preferencesId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_statsId_fkey";

-- DropIndex
DROP INDEX "public"."user_preferencesId_key";

-- DropIndex
DROP INDEX "public"."user_statsId_key";

-- AlterTable
ALTER TABLE "public"."List" DROP COLUMN "userId",
ADD COLUMN     "userDataId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."user" DROP COLUMN "preferencesId",
DROP COLUMN "statsId";

-- DropTable
DROP TABLE "public"."_EpisodeToUser";

-- CreateTable
CREATE TABLE "public"."UserData" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "statsId" TEXT NOT NULL,
    "preferencesId" TEXT NOT NULL,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_EpisodeToUserData" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EpisodeToUserData_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserData_userId_key" ON "public"."UserData"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserData_statsId_key" ON "public"."UserData"("statsId");

-- CreateIndex
CREATE UNIQUE INDEX "UserData_preferencesId_key" ON "public"."UserData"("preferencesId");

-- CreateIndex
CREATE INDEX "_EpisodeToUserData_B_index" ON "public"."_EpisodeToUserData"("B");

-- AddForeignKey
ALTER TABLE "public"."UserData" ADD CONSTRAINT "UserData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserData" ADD CONSTRAINT "UserData_statsId_fkey" FOREIGN KEY ("statsId") REFERENCES "public"."Stats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserData" ADD CONSTRAINT "UserData_preferencesId_fkey" FOREIGN KEY ("preferencesId") REFERENCES "public"."Preferences"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."List" ADD CONSTRAINT "List_userDataId_fkey" FOREIGN KEY ("userDataId") REFERENCES "public"."UserData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_FollowedShows" ADD CONSTRAINT "_FollowedShows_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."UserData"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_LovedShows" ADD CONSTRAINT "_LovedShows_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."UserData"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_EpisodeToUserData" ADD CONSTRAINT "_EpisodeToUserData_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Episode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_EpisodeToUserData" ADD CONSTRAINT "_EpisodeToUserData_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."UserData"("id") ON DELETE CASCADE ON UPDATE CASCADE;
