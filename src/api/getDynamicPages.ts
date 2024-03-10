import { client } from "./client";
import { readItems } from "@directus/sdk";
import { Page } from "./types";

export const getDynamicPages = async () => {
  return client.request<Page[]>(readItems("pages" as any, { fields: ["*.*"] }));
};
