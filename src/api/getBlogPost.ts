import { client } from "./client";
import { readItems } from "@directus/sdk";
import { BlogPost } from "./types";

type GetBlogPostProps = {
  slug: string;
};

export const getBlogPost = async ({ slug }: GetBlogPostProps) => {
  const matching = await client.request<BlogPost[]>(
    readItems("blog_posts" as any, {
      filter: { slug: slug as any },
      fields: ["*.*"],
    }),
  );
  return matching[0];
};
