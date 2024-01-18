import { exchangeCode } from "@/utils/OAUTH_handler";
import { notFound, redirect } from "next/navigation";

export async function GET(request: Request) {

  const { searchParams, host, origin } = new URL(request.url);

  if(!origin.includes(host)) return;

  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error) {
    const desc = searchParams.get("error_description");
    return;
  }

  if (!code) return notFound();
  const { access_token, refresh_token } = await exchangeCode(code);

  let response = await fetch(`${origin}/auth/token`, {
    method: "POST",
    body: JSON.stringify({
      access_token,
      refresh_token,
    }),
  }).then(res => res.json())

  if (response?.success) redirect("/home");
  notFound();
}
