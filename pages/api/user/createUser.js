import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default async function createUser(req, res) {
    const { email, password } = req.body
    if (!email || !password) res.status(400).json({ msg: "Data can't be empty" })
    try {
        await prisma.users.create({ data : { email: email, password: password }})
        res.status(200).json({ data : { email: email, password: password }})
    }
    catch(err) {
        res.status(404).json({ msg: "User already exists" })
    } finally {
        async () => {
          await prisma.$disconnect();
        };
      }

}