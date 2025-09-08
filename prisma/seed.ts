// prisma/seed.ts
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data (optional)
  await prisma.project.deleteMany();
  await prisma.user.deleteMany();

  // Create Users
  const user1 = await prisma.user.create({
    data: {
      email: "alice@example.com",
      password: "hashedpassword123", // replace with actual hashed password
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "bob@example.com",
      password: "hashedpassword456",
    },
  });

  // Create Projects
  const project1 = await prisma.project.create({
    data: {
      name: "Project Alpha",
    },
  });

  const project2 = await prisma.project.create({
    data: {
      name: "Project Beta",
    },
  });

  console.log({ user1, user2, project1, project2 });
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
