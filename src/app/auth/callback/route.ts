import { exchangeCode } from "@/utils/graphAPI";
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  
  if (!code) return new Response(request.url);
  const data = await exchangeCode(code);

  return Response.json(data);
}
