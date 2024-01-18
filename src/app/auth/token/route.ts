import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { refresh_token, access_token } = await request.json();
  if (!refresh_token || !access_token)
    return Response.json({ error: "Bad Request" });
  // refresh_token access_token
  await prisma.auth.deleteMany();
  try {
    await prisma.auth.create({
      data: {
        refresh_token: refresh_token,
        access_token: access_token,
      },
    });
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Internal Server Error" });
  }
}

export async function GET(req: Request) {
  const data = await prisma.auth.findMany();

  return Response.json(data[0]);
}
