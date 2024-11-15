/*
  Warnings:

  - The primary key for the `MedicsOnClinics` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `clinicId` on the `MedicsOnClinics` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `MedicsOnClinics` table. All the data in the column will be lost.
  - You are about to drop the column `medicId` on the `MedicsOnClinics` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `clinics` table. All the data in the column will be lost.
  - You are about to drop the column `parentClinicId` on the `clinics` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `medics` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `medic_schedules` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `clinics` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `medics` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clinic_id` to the `MedicsOnClinics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medic_id` to the `MedicsOnClinics` table without a default value. This is not possible if the table is not empty.
  - Made the column `price` on table `MedicsOnClinics` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `name` to the `clinics` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('PATIENT', 'MEDIC', 'ADMIN');

-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED');

-- DropForeignKey
ALTER TABLE "MedicsOnClinics" DROP CONSTRAINT "MedicsOnClinics_clinicId_fkey";

-- DropForeignKey
ALTER TABLE "MedicsOnClinics" DROP CONSTRAINT "MedicsOnClinics_medicId_fkey";

-- DropForeignKey
ALTER TABLE "clinics" DROP CONSTRAINT "clinics_parentClinicId_fkey";

-- DropForeignKey
ALTER TABLE "medic_schedules" DROP CONSTRAINT "medic_schedules_clinicId_fkey";

-- DropForeignKey
ALTER TABLE "medic_schedules" DROP CONSTRAINT "medic_schedules_medicId_fkey";

-- AlterTable
ALTER TABLE "MedicsOnClinics" DROP CONSTRAINT "MedicsOnClinics_pkey",
DROP COLUMN "clinicId",
DROP COLUMN "deletedAt",
DROP COLUMN "medicId",
ADD COLUMN     "clinic_id" TEXT NOT NULL,
ADD COLUMN     "medic_id" TEXT NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
ADD CONSTRAINT "MedicsOnClinics_pkey" PRIMARY KEY ("medic_id", "clinic_id");

-- AlterTable
ALTER TABLE "clinics" DROP COLUMN "deletedAt",
DROP COLUMN "parentClinicId",
ADD COLUMN     "mainClinicId" TEXT,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "medics" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "deletedAt",
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'PATIENT',
ALTER COLUMN "phone" DROP NOT NULL;

-- DropTable
DROP TABLE "medic_schedules";

-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL,
    "medic_id" TEXT NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointments" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "medicId" TEXT NOT NULL,
    "clinicId" TEXT NOT NULL,
    "scheduleId" TEXT,
    "specialty" TEXT NOT NULL,
    "status" "AppointmentStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clinics_email_key" ON "clinics"("email");

-- CreateIndex
CREATE UNIQUE INDEX "medics_email_key" ON "medics"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "clinics" ADD CONSTRAINT "clinics_mainClinicId_fkey" FOREIGN KEY ("mainClinicId") REFERENCES "clinics"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicsOnClinics" ADD CONSTRAINT "MedicsOnClinics_medic_id_fkey" FOREIGN KEY ("medic_id") REFERENCES "medics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicsOnClinics" ADD CONSTRAINT "MedicsOnClinics_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "clinics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_medic_id_fkey" FOREIGN KEY ("medic_id") REFERENCES "medics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_medicId_fkey" FOREIGN KEY ("medicId") REFERENCES "medics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_clinicId_fkey" FOREIGN KEY ("clinicId") REFERENCES "clinics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "schedules"("id") ON DELETE SET NULL ON UPDATE CASCADE;
