import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getArticles, getDictionary, getPath, type Locale } from "@/lib/site";

function ArticlePreviewAction({ label }: { label: string }) {
  return (
    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-gold">
      {label}
      <ArrowRight className="h-4 w-4" />
    </span>
  );
}

export function Insights({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const articles = getArticles(locale);

  return (
    <section id="insights" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-8 h-px w-16 bg-gold" />

            <h2 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              {dictionary.insights.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {dictionary.insights.description}
            </p>
          </div>

          <Link
            href={getPath(locale, "articles")}
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-gold"
          >
            {dictionary.insights.viewAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {articles.slice(0, 4).map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="group border border-border bg-background p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg"
            >
              <div className="relative mb-4 h-40 w-full overflow-hidden bg-muted">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <h3 className="font-serif text-lg font-medium leading-tight text-foreground transition-colors group-hover:text-gold [overflow-wrap:anywhere]">
                {article.title}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>

              <ArticlePreviewAction label={dictionary.insights.readMore} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
