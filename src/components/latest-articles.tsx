import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import NextImage from "next/image";
import { getBlogPosts } from "@/api/getBlogPosts";
import { ArticleCard } from "./article-card";

export const LatestArticles = async () => {
  const articles = await getBlogPosts({ limit: 3 });
  return (
    <section id="blog" className="w-full snap-start border-t py-24">
      <div className="container relative flex flex-1 flex-col gap-16">
        <NextImage
          src="/blog.png"
          width={600}
          height={300}
          alt="Blog"
          className="absolute left-1/2 top-24 -translate-x-1/2 transform lg:top-8"
        />
        <div className="relative mt-8 flex items-center justify-start lg:justify-center">
          <h2 className="text-5xl font-semibold">
            Latest <span className="text-primary">Articles</span>
          </h2>
        </div>
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-3">
          {articles.map((article, i) => (
            <NextLink key={i} href={`/blog/${article.slug}`}>
              <ArticleCard
                coverImageId={article.cover_image.id}
                datePublished={article.date_published}
                title={article.title}
              />
            </NextLink>
          ))}
        </div>
        <div className="flex items-center justify-start lg:justify-center">
          <Button variant="secondary" size="lg" asChild>
            <NextLink href="/blog">See more</NextLink>
          </Button>
        </div>
      </div>
    </section>
  );
};
