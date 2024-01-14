import { exchangeCode } from "@/utils/graphAPI";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  if (!code) return Response.redirect("/auth", 301);
  const data = await exchangeCode(code);

  return Response.json(data);
}
