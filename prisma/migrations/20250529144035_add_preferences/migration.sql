/*
  Warnings:

  - A unique constraint covering the columns `[preferencesId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "DefaultPage" AS ENUM ('SERIES', 'MOVIES', 'SEARCH');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "preferencesId" TEXT;

-- CreateTable
CREATE TABLE "Preferences" (
    "id" TEXT NOT NULL,
    "gridView" BOOLEAN NOT NULL DEFAULT true,
    "toWatch" BOOLEAN NOT NULL DEFAULT true,
    "defaultPage" "DefaultPage" NOT NULL DEFAULT 'SERIES',

    CONSTRAINT "Preferences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_preferencesId_key" ON "User"("preferencesId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_preferencesId_fkey" FOREIGN KEY ("preferencesId") REFERENCES "Preferences"("id") ON DELETE SET NULL ON UPDATE CASCADE;
