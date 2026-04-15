const stats = [
  { value: "1955", label: "KÖKLÜ HUKUK GELENEĞİ" },
  { value: "3 Kuşak", label: "MESLEKİ BİRİKİM" },
  { value: "Etkin", label: "ÇÖZÜM ODAKLI YAKLAŞIM" },
  { value: "Güvenilir", label: "HİZMET ANLAYIŞI" },
]

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/about-bg.png"
          alt="Hakkımızda arka plan"
          className="h-full w-full object-cover opacity-25 scale-105"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/65 to-black/75" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div>
            <div className="h-px w-16 bg-gold mb-8" />

            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
              Köklü Miras,
              <br />
              <span className="text-gold">Güvenilir Hukuki Yaklaşım</span>
            </h2>

            <p className="mt-8 text-lg text-white/80 leading-relaxed">
              HCC Avukatlık Bürosu, hukukun evrensel ilkelerini temel alan, müvekkillerine
              etkin, güvenilir ve sürdürülebilir çözümler sunmayı amaçlayan bir hukuk
              bürosudur. Büromuzun kökleri, 1955 yılında mesleğe adım atan Avukat Ömer Baş
              ile başlayan ve üç kuşağa yayılan güçlü bir hukuk geleneğine dayanmaktadır.
            </p>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Bu köklü mirasın kazandırdığı değerler ve mesleki bakış açısıyla hareket eden
              HCC Avukatlık Bürosu, bireyler ve şirketler başta olmak üzere geniş bir
              müvekkil kitlesine çeşitli hukuk alanlarında danışmanlık ve dava avukatlığı
              hizmeti sunmaktadır.
            </p>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Büromuz, yalnızca mevcut uyuşmazlıkların çözümüne odaklanmakla kalmayıp,
              önleyici hukuk anlayışıyla olası riskleri önceden tespit etmeyi ve hukuki
              süreçleri stratejik biçimde yönetmeyi hedeflemektedir. Her dosyada özgün
              değerlendirme yaparak müvekkil odaklı ve çözüm temelli bir yaklaşım benimser.
            </p>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              İnsan ilişkilerini merkeze alan çalışma kültürümüz doğrultusunda; güvene
              dayalı, şeffaf ve etik ilkelere bağlı bir hizmet anlayışıyla hareket ediyor,
              hukuki temsilin ötesinde müvekkillerimizle uzun soluklu bir çözüm ortaklığı
              kurmayı amaçlıyoruz.
            </p>

            {/* Trust indicators */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-sm text-white/75">
                <div className="h-2 w-2 bg-gold shrink-0" />
                <span>Şeffaf iletişim ve süreç yönetimi</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/75">
                <div className="h-2 w-2 bg-gold shrink-0" />
                <span>Müvekkil odaklı hizmet anlayışı</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/75">
                <div className="h-2 w-2 bg-gold shrink-0" />
                <span>Hızlı ve etkili çözümler</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/75">
                <div className="h-2 w-2 bg-gold shrink-0" />
                <span>Deneyimli ve uzman ekip</span>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm p-8 border border-white/15 rounded-2xl"
              >
                <div className="font-serif text-3xl md:text-4xl font-medium text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-white/65 uppercase tracking-wider leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}