import { notFound } from "next/navigation";
import { ArticleDetailPage } from "@/components/pages/article-detail-page";
import {
  buildArticleMetadata,
  getArticleBySlug,
  getArticleStaticParams,
} from "@/lib/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getArticleStaticParams("en");
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  return buildArticleMetadata("en", slug) ?? {};
}

export default async function EnglishArticleDetailPage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug("en", slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailPage article={article} locale="en" />;
}
