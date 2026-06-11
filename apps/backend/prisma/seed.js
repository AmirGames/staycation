import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  
  // Create default admin user
  const admin = await prisma.user.upsert({
    where: { email: 'admin@staycation.com' },
    update: {},
    create: {
      email: 'admin@staycation.com',
      password: 'hashed_password_here',
      name: 'Admin User',
      role: 'admin'
    }
  });

  console.log('✅ Database seeded:', { admin });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
