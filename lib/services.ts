import type { Metadata, MetadataRoute } from "next";
import { getDictionary, type Locale } from "@/lib/site";

const SITE_URL = "https://hcc.av.tr";

type ServiceSection = {
  heading?: string;
  paragraphs: string[];
};

type ServiceMeta = {
  slug: string;
  iconKey: string;
  longDescription: string;
  sections: ServiceSection[];
  relatedSlugs?: string[];
};

export type ServiceListItem = {
  title: string;
  slug: string;
  shortDescription: string;
  href?: string;
  iconKey: string;
};

export type ServiceDetail = ServiceListItem & {
  longDescription: string;
  sections: ServiceSection[];
  relatedServices: ServiceListItem[];
};

const serviceMeta: ServiceMeta[] = [
  {
    slug: "aile-ve-miras-hukuku",
    iconKey: "scale",
    longDescription:
      "Aile ve miras hukuku, kişisel ilişkiler ile malvarlığına ilişkin sonuçların birlikte değerlendirildiği hassas bir alandır. HCC Avukatlık Bürosu, aile içi uyuşmazlıklar ve mirasın paylaşımına ilişkin süreçlerde hakların korunmasını, sürecin mümkün olan en dengeli biçimde yönetilmesini ve kalıcı hukuki çözümler oluşturulmasını hedefleyen danışmanlık ve temsil hizmeti sunmaktadır.",
    sections: [
      {
        heading: "Hizmetin Kapsamı",
        paragraphs: [
          "Evlilik sözleşmeleri, boşanma süreçleri, nafaka, velayet, mal rejiminin tasfiyesi ve aile hukukuna ilişkin diğer uyuşmazlıklarda, somut olayın özelliklerine uygun hukuki yol haritaları oluşturuyoruz.",
          "Miras hukuku alanında ise vasiyetname hazırlanması, tereke tespiti, mirasın paylaşımı, tenkis ve mirasçılık ilişkilerine dair uyuşmazlıklarda kapsamlı hukuki destek sağlıyoruz.",
        ],
      },
      {
        heading: "Yaklaşımımız",
        paragraphs: [
          "Bu alandaki uyuşmazlıklarda yalnızca dava sürecine değil, taraflar arasındaki ilişkinin niteliğine ve gelecekte doğabilecek etkilerine de dikkat ediyoruz.",
          "Mümkün olan durumlarda uzlaşma ve alternatif çözüm yollarını değerlendiriyor; gerekli hâllerde ise müvekkillerimizin haklarını yargı mercileri önünde kararlılıkla temsil ediyoruz.",
        ],
      }
    ],
    relatedSlugs: ["tuketici-hukuku", "gayrimenkul-hukuku"],
  },
  {
    slug: "bilgi-teknolojileri-ve-internet-hukuku",
    iconKey: "lightbulb",
    longDescription:
      "Bilgi teknolojileri ve internet hukuku, dijital faaliyetlerin hızla çeşitlenmesiyle birlikte teknik ve hukuki değerlendirmeyi bir arada gerektiren bir çalışma alanı hâline gelmiştir. HCC Avukatlık Bürosu, dijital platformlar, e-ticaret faaliyetleri, çevrimiçi içerikler ve bilişim temelli iş modelleri bakımından güncel mevzuata uyumlu hukuki destek sunmaktadır.",
    sections: [
      {
        heading: "Danışmanlık Başlıkları",
        paragraphs: [
          "E-ticaret sitelerinde ve dijital platformlarda ihtiyaç duyulan kullanıcı sözleşmeleri, üyelik metinleri, gizlilik politikaları ve benzeri hukuki belgelerin hazırlanmasına destek veriyoruz.",
          "Ayrıca dijital sözleşmelerin kurulması ve uygulanması, içerik sorumluluğu, bilişim kaynaklı uyuşmazlıklar ve çevrimiçi faaliyetlerin hukuki çerçevesi konusunda danışmanlık sağlıyoruz.",
        ],
      },
      {
        heading: "Risk ve Uyum Yönetimi",
        paragraphs: [
          "Dijital mecralarda doğabilecek hukuki risklerin önceden tespiti, iş süreçlerinin hukuki açıdan değerlendirilmesi ve uyuşmazlıkların etkili biçimde yönetilmesi bakımından müvekkillerimize yol gösteriyoruz.",
        ],
      }
    ],
    relatedSlugs: ["kisisel-verilerin-korunmasi", "fikri-mulkiyet-hukuku"],
  },
  {
    slug: "dava-takibi-ve-uyusmazlik-cozumu",
    iconKey: "gavel",
    longDescription:
      "Uyuşmazlıkların doğru stratejiyle yönetilmesi, hak kayıplarının önlenmesi ve ticari ya da kişisel menfaatlerin korunması bakımından belirleyici önemdedir. HCC Avukatlık Bürosu, gerçek ve tüzel kişiler için dava takibi, hukuki danışmanlık ve uyuşmazlık çözümü süreçlerinde sistemli ve sonuç odaklı temsil sunmaktadır.",
    sections: [
      {
        heading: "Temsil ve Süreç Yönetimi",
        paragraphs: [
          "Adli ve idari yargı mercileri ile tahkim süreçlerinde dava öncesi değerlendirme, delil analizi, dava stratejisinin kurulması ve dosya takibi hizmetleri sunuyoruz.",
          "Her uyuşmazlıkta hukuki zemini, ticari etkileri ve sürecin olası sonuçlarını birlikte değerlendirerek müvekkillerimizin menfaatlerini koruyan bir yol haritası oluşturuyoruz.",
        ],
      },
      {
        heading: "Alternatif Çözüm Yolları",
        paragraphs: [
          "Arabuluculuk, uzlaştırma ve müzakere gibi alternatif çözüm yöntemlerini de uyuşmazlığın niteliğine göre değerlendiriyor; zaman, maliyet ve ilişki yönetimi bakımından en uygun çözüm modelini belirlemeye çalışıyoruz.",
        ],
      }
    ],
    relatedSlugs: ["is-hukuku", "ticaret-ve-sirketler-hukuku"],
  },
  {
    slug: "fikri-mulkiyet-hukuku",
    iconKey: "shield",
    longDescription:
      "Fikri mülkiyet hukuku, markaların, tasarımların, telif konusu eserlerin ve diğer fikri hakların korunması bakımından ticari değer taşıyan bir alandır. HCC Avukatlık Bürosu, müvekkillerinin fikri varlıklarını korumaya ve bu varlıklardan doğan hukuki riskleri yönetmeye yönelik danışmanlık ve temsil hizmeti sunmaktadır.",
    sections: [
      {
        heading: "Koruma ve Uyuşmazlık Yönetimi",
        paragraphs: [
          "Marka hakkına tecavüz, benzer marka uyuşmazlıkları, hükümsüzlük ve iptal süreçleri ile telif haklarının ihlali gibi konularda kapsamlı hukuki destek sağlıyoruz.",
          "Hak sahiplerinin fikri varlıklarını korumak kadar, bu varlıkların ticari kullanımı ve lisanslanması süreçlerinin de sağlam hukuki temellere oturtulmasını önemsiyoruz.",
        ],
      },
      {
        heading: "Stratejik Danışmanlık",
        paragraphs: [
          "Fikri mülkiyet portföyünün oluşturulması, hakların etkin biçimde yönetilmesi ve ihlal risklerine karşı önleyici adımların belirlenmesi konusunda müvekkillerimize stratejik danışmanlık veriyoruz.",
        ],
      }
    ],
    relatedSlugs: ["bilgi-teknolojileri-ve-internet-hukuku", "ticaret-ve-sirketler-hukuku"],
  },
  {
    slug: "gayrimenkul-hukuku",
    iconKey: "building2",
    longDescription:
      "Gayrimenkul hukuku, taşınmaz mülkiyetinin korunması, işlem güvenliğinin sağlanması ve proje süreçlerinin hukuka uygun şekilde yürütülmesi bakımından kapsamlı değerlendirme gerektirir. HCC Avukatlık Bürosu, taşınmaz işlemleri ve gayrimenkul yatırımlarına ilişkin süreçlerde hukuki güvenliği önceleyen danışmanlık sunmaktadır.",
    sections: [
      {
        heading: "İşlem ve Sözleşme Süreçleri",
        paragraphs: [
          "Taşınmaz alım satımı, kira ilişkileri, tapu işlemleri, ipotek tesisi ve proje geliştirme süreçlerinde sözleşmesel ve hukuki risklerin değerlendirilmesine destek veriyoruz.",
          "Kat karşılığı inşaat sözleşmeleri ve benzeri yapılandırmalarda tarafların hak ve yükümlülüklerinin açık, dengeli ve uygulanabilir biçimde düzenlenmesini hedefliyoruz.",
        ],
      },
      {
        heading: "Uyuşmazlık ve Dönüşüm Süreçleri",
        paragraphs: [
          "Gayrimenkul uyuşmazlıkları ile 6306 sayılı Kanun kapsamındaki dönüşüm süreçlerinde, müvekkillerimizin haklarını koruyan ve işlem güvenliğini güçlendiren hukuki çözümler geliştiriyoruz.",
        ],
      }
    ],
    relatedSlugs: ["aile-ve-miras-hukuku", "ticaret-ve-sirketler-hukuku"],
  },
  {
    slug: "icra-ve-iflas-hukuku",
    iconKey: "landmark",
    longDescription:
      "İcra ve iflas hukuku, alacaklı ile borçlu arasındaki ilişkinin etkin şekilde yönetilmesini ve mali süreçlerin hukuki çerçevede çözümlenmesini gerektirir. HCC Avukatlık Bürosu, alacak tahsili, icra takipleri, konkordato ve iflas süreçlerinde müvekkillerinin haklarını korumaya yönelik kapsamlı hukuki destek sunmaktadır.",
    sections: [
      {
        heading: "Takip ve Tahsil Süreçleri",
        paragraphs: [
          "Alacakların tahsili, icra takiplerinin başlatılması, itiraz süreçlerinin yönetilmesi ve takip işlemlerinin etkin şekilde yürütülmesi bakımından sistemli hukuki temsil sağlıyoruz.",
          "Borçlu taraf bakımından ise icra takibine karşı başvuru yolları, itiraz ve korunma mekanizmaları hakkında kapsamlı danışmanlık sunuyoruz.",
        ],
      },
      {
        heading: "Yapılandırma ve İflas Süreçleri",
        paragraphs: [
          "Konkordato, iflas ve yeniden yapılandırma süreçlerinde hukuki zeminin doğru kurulması, sürecin usule uygun ilerlemesi ve ticari menfaatlerin korunması amacıyla yol gösteriyoruz.",
        ],
      }
    ],
    relatedSlugs: ["dava-takibi-ve-uyusmazlik-cozumu", "ticaret-ve-sirketler-hukuku"],
  },
  {
    slug: "is-hukuku",
    iconKey: "scale",
    longDescription:
      "İş hukuku, işçi ile işveren arasındaki ilişkinin dengeli biçimde yürütülmesi ve çalışma hayatından doğan uyuşmazlıkların hukuka uygun şekilde çözümlenmesi bakımından önemli bir alandır. HCC Avukatlık Bürosu, iş ilişkilerinin kurulması, sürdürülmesi ve sona erdirilmesine ilişkin süreçlerde kapsamlı hukuki destek sunmaktadır.",
    sections: [
      {
        heading: "İş İlişkisinin Kurulması ve Yönetimi",
        paragraphs: [
          "İş sözleşmelerinin hazırlanması, işyeri uygulamalarının hukuki çerçevesinin belirlenmesi ve işveren-işçi ilişkilerinde doğabilecek risklerin önceden değerlendirilmesi konularında danışmanlık veriyoruz.",
          "Tarafların hak ve yükümlülüklerini açık şekilde ortaya koyan sözleşmesel ve kurumsal düzenlemelerle, ileride ortaya çıkabilecek uyuşmazlıkların azaltılmasını hedefliyoruz.",
        ],
      },
      {
        heading: "Uyuşmazlık ve Fesih Süreçleri",
        paragraphs: [
          "İş kazaları, işe iade davaları, tazminat talepleri, fesih süreçleri ve işçilik alacaklarına ilişkin uyuşmazlıklarda müvekkillerimizin haklarını etkin biçimde temsil ediyoruz.",
        ],
      }
    ],
    relatedSlugs: ["dava-takibi-ve-uyusmazlik-cozumu", "ticaret-ve-sirketler-hukuku"],
  },
  {
    slug: "kisisel-verilerin-korunmasi",
    iconKey: "shield",
    longDescription:
      "Kişisel verilerin korunması, yalnızca yasal yükümlülüklerin yerine getirilmesi değil, aynı zamanda kurumsal itibarın ve veri güvenliğinin korunması bakımından da önem taşır. HCC Avukatlık Bürosu, 6698 sayılı Kanun ve ilgili mevzuat çerçevesinde uyum süreçlerinin planlanması ve yürütülmesine yönelik hukuki danışmanlık sunmaktadır.",
    sections: [
      {
        heading: "Uyum ve Politika Süreçleri",
        paragraphs: [
          "Veri envanterinin oluşturulması, veri işleme faaliyetlerinin değerlendirilmesi, aydınlatma metinleri ve saklama politikalarının hazırlanması gibi uyum adımlarında müvekkillerimize rehberlik ediyoruz.",
          "Kuruluşların veri işleme süreçlerinin hukuki gerekliliklere uygun şekilde yapılandırılması ve güncellenmesi için somut uygulama desteği sağlıyoruz.",
        ],
      },
      {
        heading: "Veri Güvenliği ve İhlal Yönetimi",
        paragraphs: [
          "Teknik ve idari tedbirlerin değerlendirilmesi, veri güvenliği risklerinin analiz edilmesi ve veri ihlali durumunda izlenecek hukuki sürecin belirlenmesi bakımından kapsamlı destek sunuyoruz.",
        ],
      }
    ],
    relatedSlugs: ["bilgi-teknolojileri-ve-internet-hukuku", "ticaret-ve-sirketler-hukuku"],
  },
  {
    slug: "mali-ve-beyaz-yaka-suclari",
    iconKey: "gavel",
    longDescription:
      "Mali ve beyaz yaka suçları, şirketlerin mali yapısını, yöneticilerin sorumluluğunu ve kurumsal itibarı doğrudan etkileyebilen hassas süreçler doğurur. HCC Avukatlık Bürosu, bu nitelikteki soruşturma ve uyuşmazlıklarda teknik değerlendirme ile savunma stratejisini birlikte ele alan hukuki destek sunmaktadır.",
    sections: [
      {
        heading: "Soruşturma ve Savunma Süreci",
        paragraphs: [
          "Güveni kötüye kullanma, mali usulsüzlükler, veri hırsızlığı, belgede sahtecilik ve benzeri fiiller bakımından delil değerlendirmesi, hukuki analiz ve süreç planlaması yapıyoruz.",
          "Şirket yöneticileri, çalışanlar veya ilgili üçüncü kişiler bakımından ortaya çıkabilecek cezai ve hukuki riskleri bütüncül bir bakışla ele alıyoruz.",
        ],
      },
      {
        heading: "Kurumsal Etki ve Süreç Yönetimi",
        paragraphs: [
          "Bu alandaki dosyalarda yalnızca ceza hukuku boyutunu değil, aynı zamanda şirket itibarı, iş süreçleri ve operasyonel etkileri de dikkate alarak temsil ve danışmanlık hizmeti sunuyoruz.",
        ],
      }
    ],
    relatedSlugs: ["dava-takibi-ve-uyusmazlik-cozumu", "vergi-ve-mali-hizmetler"],
  },
  {
    slug: "ticaret-ve-sirketler-hukuku",
    iconKey: "building2",
    longDescription:
      "Ticaret ve şirketler hukuku, şirketlerin kuruluşundan günlük faaliyetlerine, ortaklık ilişkilerinden yeniden yapılanma süreçlerine kadar uzanan geniş bir alanı kapsar. HCC Avukatlık Bürosu, yerli ve yabancı sermayeli şirketlere kurumsal ihtiyaçlarına uygun hukuki danışmanlık sunmaktadır.",
    sections: [
      {
        heading: "Kuruluş ve Kurumsal Yapılanma",
        paragraphs: [
          "Şirket kuruluş işlemleri, gerekli belgelerin hazırlanması, yasal kayıt süreçleri ve kurumsal yapının hukuki zemininin oluşturulmasına ilişkin destek veriyoruz.",
          "Ortaklık yapıları, pay devri, genel kurul ve yönetim kurulu süreçleri gibi şirket içi ilişkilerin hukuka uygun biçimde yürütülmesini amaçlıyoruz.",
        ],
      },
      {
        heading: "İşlem ve Uyuşmazlık Yönetimi",
        paragraphs: [
          "Ticari sözleşmeler, birleşme ve devralmalar, ortaklar arası uyuşmazlıklar ve ticari karar alma süreçlerinde müvekkillerimizin menfaatlerini koruyan stratejik hukuki çözümler geliştiriyoruz.",
        ],
      }
    ],
    relatedSlugs: ["gayrimenkul-hukuku", "dava-takibi-ve-uyusmazlik-cozumu"],
  },
  {
    slug: "tuketici-hukuku",
    iconKey: "scale",
    longDescription:
      "Tüketici hukuku, günlük hayatta sık karşılaşılan sözleşmesel ilişkiler ve hizmet sunumları bakımından önemli hak ve yükümlülükler doğurur. HCC Avukatlık Bürosu, tüketicilerin korunmasına ilişkin uyuşmazlıklarda etkili, dengeli ve çözüm odaklı hukuki destek sunmaktadır.",
    sections: [
      {
        heading: "Uyuşmazlık Konuları",
        paragraphs: [
          "Ön ödemeli konut satışları, ayıplı mal ve hizmetler, elektronik ticaret kaynaklı uyuşmazlıklar ve tüketici sözleşmelerinden doğan sorunlarda kapsamlı değerlendirme yapıyoruz.",
          "Tüketici hakem heyeti başvuruları ile mahkeme süreçlerinde, somut olayın niteliğine uygun hukuki temsil ve danışmanlık hizmeti sağlıyoruz.",
        ],
      },
      {
        heading: "Hakların Korunması",
        paragraphs: [
          "Tüketicilerin yasal haklarının etkin biçimde kullanılması ve karşı tarafla olan hukuki ilişkinin doğru çerçevede değerlendirilmesi için süreci dikkatle yönetiyoruz.",
        ],
      }
    ],
    relatedSlugs: ["aile-ve-miras-hukuku", "gayrimenkul-hukuku"],
  },
  {
    slug: "vergi-ve-mali-hizmetler",
    iconKey: "landmark",
    longDescription:
      "Vergi ve mali hizmetler alanı, şirketlerin finansal kararları ile hukuki yükümlülüklerinin birlikte değerlendirilmesini gerektirir. HCC Avukatlık Bürosu, vergi uyuşmazlıkları ve mali süreçlerde teknik boyutu güçlü, ticari gerçeklikle uyumlu hukuki danışmanlık sunmaktadır.",
    sections: [
      {
        heading: "Mali Planlama ve Değerlendirme",
        paragraphs: [
          "Finansman ihtiyaçlarının belirlenmesi, kredi görüşmeleri öncesi hukuki ve mali çerçevenin değerlendirilmesi, mali tabloların analizi ve yeniden yapılandırma süreçlerine ilişkin destek veriyoruz.",
          "Şirketlerin mali sürdürülebilirliğini etkileyen hukuki başlıklarda riskleri önceden değerlendirmeye ve süreci planlı biçimde yönetmeye odaklanıyoruz.",
        ],
      },
      {
        heading: "Vergi Uyuşmazlıkları ve Başvurular",
        paragraphs: [
          "Vergi uyuşmazlıkları, idari başvurular, alacak tahsilat süreçleri ve ilgili dava aşamalarında müvekkillerimizin haklarını korumaya yönelik hukuki çözümler geliştiriyoruz.",
        ],
      }
    ],
    relatedSlugs: ["mali-ve-beyaz-yaka-suclari", "ticaret-ve-sirketler-hukuku"],
  },
];

function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

export function getServicePath(slug: string) {
  return `/hizmetlerimiz/${slug}`;
}

function mapService(locale: Locale, index: number): ServiceListItem & ServiceMeta {
  const dictionary = getDictionary(locale);
  const service = dictionary.services.items[index];
  const meta = serviceMeta[index];

  return {
    title: service.title,
    shortDescription: service.description,
    slug: meta.slug,
    href: locale === "tr" ? getServicePath(meta.slug) : undefined,
    iconKey: meta.iconKey,
    longDescription: meta.longDescription,
    sections: meta.sections,
    relatedSlugs: meta.relatedSlugs,
  };
}

export function getAllServices(locale: Locale): ServiceListItem[] {
  return serviceMeta.map((_, index) => {
    const mapped = mapService(locale, index);

    return {
      title: mapped.title,
      shortDescription: mapped.shortDescription,
      slug: mapped.slug,
      href: mapped.href,
      iconKey: mapped.iconKey,
    };
  });
}

export function getServiceBySlug(slug: string): ServiceDetail | null {
  const index = serviceMeta.findIndex((service) => service.slug === slug);

  if (index === -1) {
    return null;
  }

  const mapped = mapService("tr", index);
  const relatedServices = (mapped.relatedSlugs ?? [])
    .map((relatedSlug) => getAllServices("tr").find((service) => service.slug === relatedSlug))
    .filter((service): service is ServiceListItem => Boolean(service));

  return {
    title: mapped.title,
    shortDescription: mapped.shortDescription,
    slug: mapped.slug,
    href: mapped.href,
    iconKey: mapped.iconKey,
    longDescription: mapped.longDescription,
    sections: mapped.sections,
    relatedServices,
  };
}

export function getServiceStaticParams() {
  return serviceMeta.map((service) => ({
    slug: service.slug,
  }));
}

export function buildServiceMetadata(slug: string): Metadata | null {
  const service = getServiceBySlug(slug);

  if (!service) {
    return null;
  }

  const canonical = getServicePath(service.slug);

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      url: absoluteUrl(canonical),
      siteName: "HCC Avukatlık Bürosu",
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: "/HCC_LOGO-removebg-preview.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.shortDescription,
      images: ["/HCC_LOGO-removebg-preview.png"],
    },
  };
}

export function getServiceSitemapEntries(): MetadataRoute.Sitemap {
  return serviceMeta.map((service) => ({
    url: absoluteUrl(getServicePath(service.slug)),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
}
