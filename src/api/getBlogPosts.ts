import { client } from "./client";
import { readItems } from "@directus/sdk";
import { BlogPost } from "./types";

type GetBlogPostsProps = {
  limit: number;
  search?: string;
};

export const getBlogPosts = ({ limit, search }: GetBlogPostsProps) => {
  return client.request<BlogPost[]>(
    readItems("blog_posts" as any, {
      fields: ["*.*"],
      limit,
      sort: "-date_published",
      search: search ?? "",
    }),
  );
};
