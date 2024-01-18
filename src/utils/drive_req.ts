import { getUrlFromPath } from "@/libs/onedrive";
import { exchangeToken } from "./OAUTH_handler";

export const getItems = async (path?: string[]): Promise<any> => {
  const { access_token, refresh_token } = await fetch(process.env.NEXT_PUBLIC_URL + "/auth/token").then(
    (res) => res.json()
  );

  if (!access_token || refresh_token)
    throw new Error("Cannot Find Access Token");

  const url = getUrlFromPath(path?.join("/"));

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${access_token}` },
  }).then((res) => res.json());

  if (!response?.error || response?.error?.code === "itemNotFound")
    return response.value;
  if (response.error.code === "InvalidAuthenticationToken") {
    let response = await exchangeToken(refresh_token);
    await fetch(process.env.NEXT_PUBLIC_URL + "/auth/token", {
      method: "POST",
      body: new URLSearchParams({
        access_token: response.access_token,
        refresh_token: response.refresh_token,
      }),
    });
    return await getItems(path);
  } else {
    throw new Error(`${response.error.code}: ${response.error.message}`);
  }
};
