import { prisma } from "./prisma";

async function test() {
  const count = await prisma.project.count();
  console.log("Projects in DB:", count);
}

test();
