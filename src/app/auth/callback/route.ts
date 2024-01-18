import { exchangeCode } from "@/utils/OAUTH_handler";
import { notFound, redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error) {
    const desc = searchParams.get("error_description");
    return;
  }

  if (!code) return notFound();
  const { access_token, refresh_token } = await exchangeCode(code);
  const origin = request.url.split("/")[0];

  let response = await fetch(`${origin}/token`, {
    method: "POST",
    body: new URLSearchParams({
      access_token,
      refresh_token,
    }),
  }).then(res => res.json());

  if(response?.success) redirect("/home");
  notFound();
}

