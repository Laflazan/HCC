import { Building2, Scale, Lightbulb, Shield, Gavel, Landmark } from "lucide-react"

const services = [
  {
    icon: Scale,
    title: "Aile ve Miras Hukuku",
    description: "Miras planlaması, paylaşım ve aile hukukuna ilişkin uyuşmazlıklarda kapsamlı danışmanlık ve temsil.",
  },
  {
    icon: Lightbulb,
    title: "Bilgi Teknolojileri ve İnternet Hukuku",
    description: "E-ticaret, dijital platformlar ve bilişim hukuku kapsamında sözleşmeler ve hukuki süreç yönetimi.",
  },
  {
    icon: Gavel,
    title: "Dava Takibi ve Uyuşmazlık Çözümü",
    description: "Ticari, idari ve özel hukuk alanlarında dava takibi ve stratejik uyuşmazlık çözümü.",
  },
  {
    icon: Shield,
    title: "Fikri Mülkiyet Hukuku",
    description: "Marka, patent ve telif haklarının korunması ve ihlallerin önlenmesine yönelik hukuki hizmetler.",
  },
  {
    icon: Building2,
    title: "Gayrimenkul Hukuku",
    description: "Taşınmaz işlemleri, proje geliştirme ve kira ilişkilerine dair hukuki danışmanlık.",
  },
  {
    icon: Landmark,
    title: "İcra ve İflas Hukuku",
    description: "Alacak tahsili, icra takipleri ve iflas süreçlerinin etkin yönetimi.",
  },
  {
    icon: Scale,
    title: "İş Hukuku",
    description: "İşçi-işveren ilişkileri, sözleşmeler ve iş uyuşmazlıklarında hukuki destek.",
  },
  {
    icon: Shield,
    title: "Kişisel Verilerin Korunması",
    description: "KVKK uyum süreçleri, veri güvenliği ve hukuki risk yönetimi.",
  },
  {
    icon: Gavel,
    title: "Mali ve Beyaz Yaka Suçları",
    description: "Finansal suçlar ve ceza soruşturmalarında savunma ve danışmanlık.",
  },
  {
    icon: Building2,
    title: "Ticaret ve Şirketler Hukuku",
    description: "Şirket kuruluşları, birleşme ve devralmalar (M&A) ve ticari sözleşmeler.",
  },
  {
    icon: Scale,
    title: "Tüketici Hukuku",
    description: "Tüketici uyuşmazlıkları ve sözleşmelere ilişkin hukuki danışmanlık.",
  },
  {
    icon: Landmark,
    title: "Vergi ve Mali Hizmetler",
    description: "Vergi ihtilafları ve mali süreçlere ilişkin hukuki çözümler.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="h-px w-16 bg-gold" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground tracking-tight">
            Hizmet Alanlarımız
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            HCC Avukatlık Bürosu, müvekkillerine geniş kapsamlı hukuki danışmanlık ve avukatlık hizmetleri sunmaktadır. 
            Farklı hukuk alanlarında uzmanlaşmış ekibimizle, her ihtiyaca özel stratejik çözümler üretmekteyiz.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-8 lg:p-10 group hover:bg-secondary transition-colors duration-300"
            >
              <service.icon className="h-8 w-8 text-gold" strokeWidth={1.5} />

              <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                {service.title}
              </h3>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 h-px w-0 bg-gold group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}