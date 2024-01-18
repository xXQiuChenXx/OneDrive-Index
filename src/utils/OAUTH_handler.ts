import config from "@/config/api.config";

export const exchangeCode = async (code: string) => {
  let response = await fetch(
    "https://login.microsoftonline.com/common/oauth2/v2.0/token",
    {
      method: "post",
      body: new URLSearchParams({
        client_id: config.CLIENT_ID,
        client_secret: config.CLIENT_SECRET,
        redirect_uri: config.REDIRECT_URI,
        grant_type: "authorization_code",
        code: code,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  ).then((res) => (res.ok ? res.json() : ""));

  if (!response || response?.error)
    throw new Error(
      response?.error ||
        "Invalid exchange code or an error occured, please try again latter."
    );
  return response;
};

export const exchangeToken = async (refreshToken: string) => {
  let response = await fetch(
    "https://login.microsoftonline.com/common/oauth2/v2.0/token",
    {
      method: "post",
      body: new URLSearchParams({
        client_id: config.CLIENT_ID,
        client_secret: config.CLIENT_SECRET,
        redirect_uri: config.REDIRECT_URI,
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  ).then((res) => res.json());

  if (response?.error)
    throw new Error(
      response?.error ||
        "An error occured while exchanging token, please try again latter."
    );
  return response;
};
