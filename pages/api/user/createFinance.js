import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function createFinance(req, res) {
  const { profit, value, description, user_id } = req.body;
  if (!value || !description || !user_id) {
    return res.status(400).json({
      error: "Please fill all the fields",
    });
  }

  const data = {
    profit: profit,
    value: value,
    description: description,
    user_id: user_id,
  };

  try {
    await prisma.finances.create({ data: data });
    console.log(`Successfully created`)
    return res.status(201).json({
      data: data,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({});
  }finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
