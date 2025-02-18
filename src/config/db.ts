import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const testDB = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};

testDB();

export default prisma;
