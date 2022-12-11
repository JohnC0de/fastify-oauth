import { hash } from "argon2"
import prisma from "../src/utils/database/prisma.js"

async function main() {
  await prisma.user.create({
    data: {
      email: "ada@email.com",
      password: await hash("password")
    }
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
