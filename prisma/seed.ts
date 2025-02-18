import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ✅ Delete all existing teams before seeding
  await prisma.team.deleteMany();  

  // ✅ Create teams
  const teamRed = await prisma.team.create({ data: { name: "Red Warriors" } });
  const teamBlue = await prisma.team.create({ data: { name: "Blue Knights" } });

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
