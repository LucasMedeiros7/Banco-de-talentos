-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL
);
INSERT INTO "new_products" ("createdAt", "id", "name", "price", "quantity") SELECT "createdAt", "id", "name", "price", "quantity" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
