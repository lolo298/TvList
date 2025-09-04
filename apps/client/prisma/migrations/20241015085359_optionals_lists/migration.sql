-- DropForeignKey
ALTER TABLE "Show" DROP CONSTRAINT "Show_listId_fkey";

-- AlterTable
ALTER TABLE "Show" ALTER COLUMN "listId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Show" ADD CONSTRAINT "Show_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE SET NULL ON UPDATE CASCADE;
