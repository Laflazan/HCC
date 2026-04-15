import Link from "next/link"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "Beyaza İmza ve Okunmadan İmzalanan Belge",
    excerpt: "Beyaza imza kavramı, hukuki sonuçları ve bu tür belgelerin geçerliliğine ilişkin önemli değerlendirmeler.",
  },
  {
    title: "Kötü Niyet Tazminatı",
    excerpt: "İş hukukunda kötü niyet tazminatının şartları, kapsamı ve uygulamadaki yeri hakkında genel bir inceleme.",
  },
  {
    title: "Ön Ödemeli Konut Satış Sözleşmesi",
    excerpt: "Tüketicilerin korunması kapsamında ön ödemeli konut satış sözleşmelerine ilişkin hukuki çerçeve.",
  },
  {
    title: "Şirketlerde Yapısal Değişiklikler ve Ticaret Siciline Tescil",
    excerpt: "Şirket birleşmeleri, devralmalar ve yapısal değişikliklerin ticaret siciline tescil süreçleri.",
  },
]

export function Insights() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="h-px w-16 bg-gold mb-8" />

            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground tracking-tight">
              Makalelerimiz
            </h2>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              HCC Avukatlık Bürosu olarak, hukukun farklı alanlarında hazırladığımız 
              makaleler bu sayfada yer almaktadır. Aşağıda, güncel içeriklerimize 
              ulaşabilirsiniz.
            </p>
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold transition-colors group"
          >
            Tüm Makaleleri Gör
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* MAKALE GRID */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-background border border-border p-6 group hover:border-gold/30 transition-colors"
            >
              
              {/* IMAGE PLACEHOLDER */}
              <div className="w-full h-40 bg-muted mb-4 flex items-center justify-center text-sm text-muted-foreground">
                Görsel
              </div>

              <h3 className="font-serif text-lg font-medium text-foreground leading-tight group-hover:text-gold transition-colors">
                <Link href="#">{article.title}</Link>
              </h3>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              <Link
                href="#"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold transition-colors"
              >
                Devamı
                <ArrowRight className="h-4 w-4" />
              </Link>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}