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
  return getArticleStaticParams("tr");
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  return buildArticleMetadata("tr", slug) ?? {};
}

export default async function TurkishArticleDetailPage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug("tr", slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailPage article={article} locale="tr" />;
}
