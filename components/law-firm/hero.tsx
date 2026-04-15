import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Hafif arka plan deseni */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Altın vurgu çizgisi */}
          <div className="flex justify-center mb-8">
            <div className="h-px w-24 bg-gold" />
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight text-foreground leading-[1.1] text-balance">
            Stratejik ve Güçlü
            <br />
            <span className="text-gold">Hukuki Çözümler</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Müvekkillerimize ticari bakış açısıyla, güvenilir ve yüksek nitelikli hukuki hizmetler sunuyoruz.
            Yerel ve uluslararası ölçekte karmaşık hukuki süreçlerde etkin danışmanlık sağlıyoruz.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base"
            >
              <Link href="#services">Hizmet Alanlarımız</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-muted px-8 py-6 text-base"
            >
              <Link href="#contact">İletişime Geçin</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Alt kaydırma göstergesi */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}