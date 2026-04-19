import Image from "next/image";
import Link from "next/link";
import {
  getRelatedArticles,
  type ArticleDetail,
} from "@/lib/articles";
import { getPath, type Locale } from "@/lib/site";

export function ArticleDetailPage({
  article,
  locale,
}: {
  article: ArticleDetail;
  locale: Locale;
}) {
  const backLabel = locale === "tr" ? "Makalelere Dön" : "Back to Articles";
  const relatedLabel = locale === "tr" ? "Diğer Makaleler" : "Other Articles";
  const summaryLabel = locale === "tr" ? "Kısa Özet" : "Summary";
  const relatedArticles = getRelatedArticles(locale, article.slug, 3);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30 selection:text-foreground">
      <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-6 md:px-10 xl:px-12">
        <article className="mx-auto max-w-5xl">
          <header className="border-b border-border pb-10 md:pb-12">
            <Link
              href={getPath(locale, "articles")}
              className="mb-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-gold transition hover:text-foreground"
            >
              <span aria-hidden="true">←</span>
              {backLabel}
            </Link>

            <div className="max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-block rounded-sm border border-gold/25 bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                  {article.category}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {article.date}
                </span>
              </div>

              <h1 className="font-serif text-4xl leading-[1.04] tracking-[-0.03em] text-foreground md:text-6xl xl:text-[72px]">
                {article.title}
              </h1>

              <p className="mt-6 max-w-3xl text-[16px] leading-8 text-muted-foreground md:text-[17px]">
                {article.introduction}
              </p>
            </div>
          </header>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-background shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <div className="relative aspect-[16/9]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <div className="mb-12 rounded-2xl border border-border bg-background p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                {summaryLabel}
              </p>
              <p className="mt-4 text-[15px] leading-8 text-muted-foreground md:text-base">
                {article.excerpt}
              </p>
            </div>

            <div className="space-y-12">
              {article.sections.map((section, index) => (
                <section key={`${article.slug}-${index}`}>
                  {section.heading ? (
                    <>
                      <div className="mb-5 h-px w-14 bg-gold" />
                      <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-foreground">
                        {section.heading}
                      </h2>
                    </>
                  ) : null}

                  <div
                    className={`space-y-5 text-[15px] leading-8 text-muted-foreground md:text-base ${
                      section.heading ? "mt-5" : ""
                    }`}
                  >
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <section className="mx-auto mt-20 max-w-6xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-gold/70" />
              <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
                {relatedLabel}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  href={relatedArticle.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
                    <div className="mb-5 flex items-center justify-between gap-4 border-b border-border pb-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                        {relatedArticle.category}
                      </span>
                      <span className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {relatedArticle.date}
                      </span>
                    </div>

                    <h3 className="font-serif text-[28px] leading-[1.16] tracking-[-0.02em] text-foreground transition-colors group-hover:text-gold">
                      {relatedArticle.title}
                    </h3>

                    <p className="mt-4 flex-1 text-[15px] leading-7 text-muted-foreground">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
