import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function getFinance(req, res) {
  const { user_id } = req.body;
  let gain = 0
  let loss = 0
  try {
    const data = await prisma.finances.findMany({
      where: {
        user_id:  user_id
      },
    });
    data.forEach((item) => {
      if(item.profit) {
        gain += item.value
        console.log("ok", gain)
      }
      else {
        loss += item.value
        console.log("not ok", loss)
      }
    })
    let cash = gain - loss
    console.log(data);
    return res.status(200).json({data: data, gain: gain, loss: loss, cash: cash});
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: true,
      data: {
        message: err.message,
      },
    });
  }finally {
    async () => {
      await prisma.$disconnect();
    };
  }
  
}
