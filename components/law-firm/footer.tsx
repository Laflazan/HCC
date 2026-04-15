import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Şirketler Hukuku", href: "#" },
    { name: "Uyuşmazlık Çözümü", href: "#" },
    { name: "Fikri Mülkiyet Hukuku", href: "#" },
    { name: "Kişisel Verilerin Korunması", href: "#" },
    { name: "Rekabet Hukuku", href: "#" },
    { name: "Finans Hukuku", href: "#" },
  ],
  company: [
    { name: "Hakkımızda", href: "#about" },
    { name: "Ekibimiz", href: "#team" },
    { name: "Kariyer", href: "#" },
    { name: "Yayınlar", href: "#insights" },
    { name: "İletişim", href: "#contact" },
  ],
  legal: [
    { name: "Gizlilik Politikası", href: "#" },
    { name: "Kullanım Şartları", href: "#" },
    { name: "Çerez Politikası", href: "#" },
    { name: "Aydınlatma Metni", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LOGO + AÇIKLAMA */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-xl font-semibold tracking-tight">
              HCC<span className="text-gold">.</span>
            </Link>

            <p className="mt-4 text-sm text-background/60 leading-relaxed">
              HCC Avukatlık Bürosu, müvekkillerine etkin, güvenilir ve çözüm odaklı
              hukuki hizmetler sunmaktadır. Köklü geçmişi ve uzman kadrosu ile
              sürdürülebilir hukuki danışmanlık sağlamayı amaçlar.
            </p>

            {/* SOSYAL */}
            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="text-background/60 hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="text-background/60 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* HİZMETLER */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-background/40">
              Hizmetlerimiz
            </h3>

            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KURUMSAL */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-background/40">
              Kurumsal
            </h3>

            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HUKUKİ */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-background/40">
              Hukuki
            </h3>

            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ALT BAR */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} HCC Avukatlık Bürosu. Tüm hakları saklıdır.
          </p>

          <p className="text-sm text-background/40">
            Bu web sitesinde yer alan bilgiler yalnızca bilgilendirme amaçlıdır ve hukuki danışmanlık niteliği taşımaz.
          </p>

        </div>
      </div>
    </footer>
  )
}