import { GRAPH_API_ENDPOINT } from "@/constant";

export const getUrlFromPath = (path?: string): string => {
  const isRoot = path?.length ? `:` : "";
  return `${GRAPH_API_ENDPOINT}/me/drive/root${isRoot}${
    path?.length ? `/${path}` : ""
  }${isRoot}/children`;
};
