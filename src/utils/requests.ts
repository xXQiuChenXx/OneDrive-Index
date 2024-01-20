"use server";

export const testDBConnection = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth`, {
    cache: "no-store",
  }).then((res) => res.json());
  return data.success;
};

export type tokenResponse = {
  access_token?: string;
  refresh_token?: string;
  success: boolean;
};
export const getToken = async (): Promise<tokenResponse> => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify({
        test: "ok"
    })
  }).then((res) => res.json());
  return data;
};
