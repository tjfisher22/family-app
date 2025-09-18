-- CreateTable
CREATE TABLE "public"."Member" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "deathDate" TIMESTAMP(3),
    "gender" TEXT,
    "email" TEXT,
    "phone" TEXT,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Parent" (
    "parentId" INTEGER NOT NULL,
    "childId" INTEGER NOT NULL,

    CONSTRAINT "Parent_pkey" PRIMARY KEY ("parentId","childId")
);

-- CreateTable
CREATE TABLE "public"."Spouse" (
    "spouse1Id" INTEGER NOT NULL,
    "spouse2Id" INTEGER NOT NULL,
    "marriedAt" TIMESTAMP(3),
    "divorcedAt" TIMESTAMP(3),

    CONSTRAINT "Spouse_pkey" PRIMARY KEY ("spouse1Id","spouse2Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "public"."Member"("email");

-- AddForeignKey
ALTER TABLE "public"."Parent" ADD CONSTRAINT "Parent_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Parent" ADD CONSTRAINT "Parent_childId_fkey" FOREIGN KEY ("childId") REFERENCES "public"."Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Spouse" ADD CONSTRAINT "Spouse_spouse1Id_fkey" FOREIGN KEY ("spouse1Id") REFERENCES "public"."Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Spouse" ADD CONSTRAINT "Spouse_spouse2Id_fkey" FOREIGN KEY ("spouse2Id") REFERENCES "public"."Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
