import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { refresh_token, access_token } = await request.json();
  if (!refresh_token || !access_token) {
    const data = (await prisma.auth.findMany())[0];
    if (!data) {
      return Response.json({ success: false });
    } else {
      return Response.json({ ...data, success: true });
    }
  } else {
    // refresh_token access_token
    await prisma.auth.deleteMany();
    try {
      await prisma.auth.create({
        data: {
          refresh_token,
          access_token,
        },
      });
      return Response.json({ success: true });
    } catch (error) {
      return Response.json({ success: false, error: "Internal Server Error" });
    }
  }
}

export async function GET(req: Request) {
  // Test Database Connection
  try {
    await prisma.$connect();
  } catch (error) {
    return Response.json({ success: true });
  }

  return Response.json({ success: true });
}
