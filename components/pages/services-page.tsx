import Link from "next/link";
import type { Locale } from "@/lib/site";
import { getDictionary, getPath } from "@/lib/site";
import { Services } from "@/components/law-firm/services";
import { Button } from "@/components/ui/button";

export function ServicesPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <Services locale={locale} />

      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {dictionary.pages.servicesCards.map((card) => (
              <div
                key={card.title}
                className="border border-border bg-background p-8 transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
              >
                <div className="h-px w-12 bg-gold" />
                <h2 className="mt-6 font-serif text-2xl text-foreground">
                  {card.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="border-gold bg-transparent text-foreground hover:bg-gold hover:text-primary-foreground"
            >
              <Link href={getPath(locale, "contact")}>
                {dictionary.pages.servicesCta}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}