import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default async function login(req, res) {
    const { email, password } = req.body
    if (!email || !password) res.status(400).json({ msg: "Data can't be empty" })

    const user = await prisma.users.findFirst({
        where: { email: email, password: password }
    })
    if (user) res.status(200).json({ data: user })
    else res.status(404).json({msg: "User not found"})
}