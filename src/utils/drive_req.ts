import config from "@/config/api.config";
const endpoint = "https://graph.microsoft.com/v1.0";

export const getItems = async (path?: string[]) => {
  const isRoot = path?.length ? `:`: ""
  const url = `${endpoint}/me/drive/root${isRoot}${path?.length ? `/${path.join("/")}`: ""}${isRoot}/children`;

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${config.ACCESS_TOKEN}` },
  }).then((res) => res.json());

  if (response.error && response.error.code !== "itemNotFound") {
    throw new Error(`${response.error.code}: ${response.error.message}`);
  }
  return response.value;
};
