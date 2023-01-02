import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default async function main(req, res) {
    const { id } = req.body
    try {

        const item = await prisma.finances.delete({
          where: {
            id: id,
          },
        });
        return res.status(200).json(item);
      } catch (err) {
        console.log(err);
      } finally {
        async () => {
          await prisma.$disconnect();
        };
      }
}