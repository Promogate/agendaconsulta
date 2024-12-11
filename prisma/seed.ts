import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();
async function main() {
  const passwordHash = await hash("123456", 10);
  await prisma.administrators.upsert({
    where: { email: "admin@admin.com" },
    create: {
      email: "admin@admin.com",
      name: "Administrador",
      password_hash: passwordHash,
      admin_level: "ADMIN"
    },
    update: {}
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });