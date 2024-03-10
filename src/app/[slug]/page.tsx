import { getDynamicPage } from "@/api/getDynamicPage";
import ReactMarkdown from "react-markdown";

const DynamicPage = async ({ params }: { params: { slug: string } }) => {
  const page = await getDynamicPage({ slug: params.slug });
  if (!page) return null;
  return (
    <div className="container flex max-w-[56rem] flex-col gap-8 py-16">
      <h1 className="text-5xl font-semibold leading-[4rem]">{page.name}</h1>
      <ReactMarkdown className="prose lg:prose-lg dark:prose-invert max-w-none">
        {page.content}
      </ReactMarkdown>
    </div>
  );
};

export default DynamicPage;
