import config from "@/config/api.config"
const endpoint = "https://graph.microsoft.com/v1.0"
import { OdItemsObject } from "@/types";

export const getItems = async (path?: string) => {
    const response: OdItemsObject = await fetch(`${endpoint}/me/drive/root${path ? `:${path}` : ""}/children`, {
        headers: { Authorization: `Bearer ${config.ACCESS_TOKEN}` },
    }).then(res => res.json());
    return response.value;
}