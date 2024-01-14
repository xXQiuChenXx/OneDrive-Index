import { exchangeCode } from "@/utils/graphAPI";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error) {
    const desc = searchParams.get("error_description");
    return;
  }

  if (!code) return redirect("/auth");
  try {
    const data = await exchangeCode(code);

    return Response.json(data);
  } catch (error) {
    return redirect("/auth");
  }
}
