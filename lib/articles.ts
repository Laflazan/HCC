import type { Metadata, MetadataRoute } from "next";
import type { Locale } from "@/lib/site";

const SITE_URL = "https://hcc.av.tr";

type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

type ArticleLocaleContent = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  introduction: string;
  sections: ArticleSection[];
};

type ArticleRecord = {
  id: string;
  image: string;
  publishedAt: string;
  featured?: boolean;
  locales: Record<Locale, ArticleLocaleContent>;
};

export type ArticleListItem = {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  href: string;
};

export type ArticleDetail = ArticleListItem & {
  publishedAt: string;
  introduction: string;
  sections: ArticleSection[];
  alternateHref: string;
};

const articleRecords: ArticleRecord[] = [
  {
    id: "blank-signature",
    image: "/articles/beyaza-imza.jpg",
    publishedAt: "2024-05-12",
    locales: {
      tr: {
        slug: "beyaza-imza-ve-okunmadan-imzalanan-belge",
        title: "Beyaza İmza ve Okunmadan İmzalanan Belge",
        category: "Borçlar Hukuku",
        date: "12 Mayıs 2024",
        excerpt:
          "Beyaza atılan imzanın hukuki sonuçları, okunmadan imzalanan belgelerde sorumluluk ve uygulamadaki temel riskler üzerine değerlendirme.",
        introduction:
          "Bu içerik, beyaza imza ve okunmadan imzalanan belge uyuşmazlıklarına ilişkin yayına hazır makale düzenini oluşturmak amacıyla yapılandırılmış örnek metindir. Nihai değerlendirmeler ve somut içtihat atıfları daha sonra aynı şablon içine kolayca eklenebilir.",
        sections: [
          {
            heading: "Konuya Genel Bakış",
            paragraphs: [
              "Beyaza imza ve okunmadan imzalanan belge uyuşmazlıkları, ispat hukuku ile sözleşme serbestisinin kesiştiği alanlarda yoğunlaşmaktadır. Tarafların gerçek iradesi ile imzalanan metnin kapsamı arasındaki fark, uyuşmazlığın temelini oluşturur.",
              "Bu şablon, ileride eklenecek tam makale metni için düzenli bir içerik alanı sunar. Somut olay özelliklerine, içtihatlara ve uygulama notlarına göre genişletilmeye uygundur.",
            ],
          },
          {
            heading: "Uygulamada Dikkat Edilecek Noktalar",
            paragraphs: [
              "Belge akışının yazılı kayıtlarla desteklenmesi, boş alan bırakılmaması ve imza öncesi metnin son halinin teyit edilmesi, uyuşmazlık riskini azaltan başlıca tedbirlerdir.",
              "Bu bölümde daha sonra detaylı hukuki analiz, yargı kararları ve uygulama örnekleri eklenebilir.",
            ],
          },
          {
            heading: "Editör Notu",
            paragraphs: [
              "Buradaki metinler yer tutucu olarak hazırlanmıştır. Nihai makale yayınlandığında yalnızca bu paragraflar güncellenerek sayfa yapısı korunabilir.",
            ],
          },
        ],
      },
      en: {
        slug: "blank-signature-and-signing-without-reading",
        title: "Blank Signature and Signing Without Reading",
        category: "Law of Obligations",
        date: "12 May 2024",
        excerpt:
          "An overview of the legal consequences of a blank signature, liability in documents signed without reading, and the main practical risks involved.",
        introduction:
          "This page provides a publication-ready article structure for disputes concerning blank signatures and documents signed without being reviewed. Final legal analysis and case law references can later be added within the same template.",
        sections: [
          {
            heading: "General Overview",
            paragraphs: [
              "Disputes involving blank signatures and documents signed without review generally arise at the intersection of evidence law and contractual intent. The gap between the parties' true intent and the signed text becomes the core issue.",
              "This structure is designed as an editable template so the final article may be added later without changing the page design.",
            ],
          },
          {
            heading: "Practical Considerations",
            paragraphs: [
              "Maintaining written approval trails, avoiding blank spaces and confirming final document versions are among the most important practical safeguards.",
              "Detailed legal analysis, case law references and practical commentary can later be inserted here.",
            ],
          },
          {
            heading: "Editorial Note",
            paragraphs: [
              "The current text is placeholder content intended to keep the page production-safe until the full article is ready.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "bad-faith-compensation",
    image: "/articles/kotu-niyet-tazminati.jpg",
    publishedAt: "2024-04-08",
    locales: {
      tr: {
        slug: "kotu-niyet-tazminati",
        title: "Kötü Niyet Tazminatı",
        category: "İş Hukuku",
        date: "08 Nisan 2024",
        excerpt:
          "İş ilişkisinin sona ermesinde kötü niyet tazminatının şartları, uygulama alanı ve işçi ile işveren bakımından hukuki sonuçları.",
        introduction:
          "Bu örnek içerik, kötü niyet tazminatına ilişkin makale detay sayfasının yayın düzenini oluşturur. Gerçek değerlendirme metni daha sonra aynı başlık yapısı korunarak eklenebilir.",
        sections: [
          {
            heading: "Hukuki Çerçeve",
            paragraphs: [
              "Kötü niyet tazminatı, fesih hakkının dürüstlük kuralına aykırı kullanıldığı iddialarında önem taşıyan özel bir başlıktır. İş güvencesi sistemiyle ilişkisi, her somut olayda ayrıca değerlendirilmelidir.",
              "Bu alan, sonradan kapsamlı mevzuat ve yargı uygulaması değerlendirmeleri ile genişletilebilecek şekilde hazırlanmıştır.",
            ],
          },
          {
            heading: "İspat ve Süreç Yönetimi",
            paragraphs: [
              "Yazışmalar, performans kayıtları ve fesih gerekçesine ilişkin belgeler, uyuşmazlığın çözümünde belirleyici olabilir. Tarafların dava öncesi hazırlığı, çoğu zaman yargılama sonucunu doğrudan etkiler.",
            ],
          },
          {
            paragraphs: [
              "Bu makale gövdesi şu aşamada yer tutucu niteliktedir. Nihai içerik hazır olduğunda yalnızca bölüm metinleri değiştirilerek yayıma alınabilir.",
            ],
          },
        ],
      },
      en: {
        slug: "bad-faith-compensation",
        title: "Bad Faith Compensation",
        category: "Employment Law",
        date: "08 April 2024",
        excerpt:
          "A concise review of the conditions, scope and legal consequences of bad faith compensation in employment relationships.",
        introduction:
          "This sample article body provides a production-ready detail page structure for bad faith compensation. The final legal text may later replace the placeholders without changing the page layout.",
        sections: [
          {
            heading: "Legal Framework",
            paragraphs: [
              "Bad faith compensation becomes relevant where the right of termination is alleged to have been exercised contrary to good faith. Its relationship with the broader job security framework requires case-specific analysis.",
              "This area is intentionally structured so that final statutory analysis and case law discussion can be added later.",
            ],
          },
          {
            heading: "Evidence and Process",
            paragraphs: [
              "Correspondence, performance records and documented reasons for termination often shape the outcome of the dispute. Early process review is therefore essential.",
            ],
          },
          {
            paragraphs: [
              "The current body text is placeholder content. Once the final article is ready, these sections can be updated directly.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "prepaid-housing-sale",
    image: "/articles/on-odemeli-konut-satis-sozlesmesi.jpg",
    publishedAt: "2024-03-21",
    locales: {
      tr: {
        slug: "on-odemeli-konut-satis-sozlesmesi",
        title: "Ön Ödemeli Konut Satış Sözleşmesi",
        category: "Tüketici Hukuku",
        date: "21 Mart 2024",
        excerpt:
          "Ön ödemeli konut satış sözleşmelerinin hukuki niteliği, tüketicinin korunması ve cayma hakkı bakımından dikkat edilmesi gereken başlıca noktalar.",
        introduction:
          "Bu sayfa, ön ödemeli konut satış sözleşmelerine ilişkin içeriğin sonradan rahatça güncellenebilmesi için yapılandırılmış örnek makale şablonudur.",
        sections: [
          {
            heading: "Sözleşme Yapısına Giriş",
            paragraphs: [
              "Ön ödemeli konut satış sözleşmeleri, tüketicinin korunmasına ilişkin özel kuralların sıkı biçimde uygulandığı sözleşme tipleri arasında yer alır. Teslim süresi, bedel yapısı ve cayma hakkı gibi başlıklar öne çıkar.",
              "Buradaki paragraflar, ileride eklenecek ayrıntılı hukukî açıklamalar için düzenli bir gövde alanı sunmaktadır.",
            ],
          },
          {
            heading: "Risk Alanları",
            paragraphs: [
              "Tanıtım dokümanları, sözleşme öncesi bilgilendirme ve sözleşme metni birlikte değerlendirilmelidir. Uygulamada en çok teslim süresi, bedel iadesi ve cayma hakkının kullanımı tartışma konusu olur.",
            ],
          },
          {
            paragraphs: [
              "Bu metinler placeholder niteliğindedir ve daha sonra gerçek makale içeriği ile değiştirilebilir.",
            ],
          },
        ],
      },
      en: {
        slug: "prepaid-housing-sale-agreement",
        title: "Prepaid Housing Sale Agreement",
        category: "Consumer Law",
        date: "21 March 2024",
        excerpt:
          "Key points regarding the legal nature of prepaid housing sale agreements, consumer protection and the right of withdrawal.",
        introduction:
          "This page is structured as a clean article template so the final content on prepaid housing sale agreements can later be added without revisiting the page design.",
        sections: [
          {
            heading: "Introduction to the Contract Structure",
            paragraphs: [
              "Prepaid housing sale agreements are subject to strict consumer protection rules. Delivery timing, price structure and withdrawal rights usually become central issues.",
              "These paragraphs are placeholders intended to preserve a publication-ready page structure.",
            ],
          },
          {
            heading: "Key Risk Areas",
            paragraphs: [
              "Promotional materials, pre-contractual disclosures and the contract text should be reviewed together. Delivery timing, refunds and withdrawal rights remain among the most disputed issues in practice.",
            ],
          },
          {
            paragraphs: [
              "The current content is editable placeholder text and may later be replaced with the final article.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "structural-changes",
    image: "/articles/sirketlerde-yapisal-degisiklikler.jpg",
    publishedAt: "2024-03-05",
    locales: {
      tr: {
        slug: "sirketlerde-yapisal-degisiklikler-ve-ticaret-siciline-tescil",
        title: "Şirketlerde Yapısal Değişiklikler ve Ticaret Siciline Tescil",
        category: "Ticaret Hukuku",
        date: "05 Mart 2024",
        excerpt:
          "Birleşme, bölünme, tür değiştirme ve benzeri yapısal değişikliklerin ticaret siciline tescil süreci ile hukuki etkilerine genel bakış.",
        introduction:
          "Bu örnek makale düzeni, şirketlerde yapısal değişiklikler başlığındaki içeriğin daha sonra detaylandırılabilmesi için hazırlanmış sürdürülebilir bir yayın şablonudur.",
        sections: [
          {
            heading: "İşlem Yapısının Temel Unsurları",
            paragraphs: [
              "Birleşme, bölünme ve tür değiştirme gibi işlemler, yalnızca şirket içi kararlarla sınırlı kalmayıp alacaklılar, pay sahipleri ve kamu kayıtları bakımından da sonuç doğurur.",
              "Bu şablon, işlem süreçleri, tescil adımları ve uyum gerekliliklerine ilişkin nihai açıklamaların eklenmesine uygundur.",
            ],
          },
          {
            heading: "Tescil Süreci",
            paragraphs: [
              "Ticaret siciline yapılacak başvurularda belge setinin eksiksiz hazırlanması ve süreç sıralamasının doğru kurgulanması kritik önem taşır. Uygulamadaki farklılıklar somut olay bazında ayrıca değerlendirilmelidir.",
            ],
          },
          {
            paragraphs: [
              "Bu gövde içeriği yer tutucu niteliktedir; sonradan tam makale metni ile güncellenebilir.",
            ],
          },
        ],
      },
      en: {
        slug: "structural-changes-in-companies-and-trade-registry-registration",
        title: "Structural Changes in Companies and Trade Registry Registration",
        category: "Commercial Law",
        date: "05 March 2024",
        excerpt:
          "A general overview of the registration process and legal effects of mergers, demergers, conversion and other structural changes in companies.",
        introduction:
          "This sample article layout is designed so the final content on structural corporate changes can later be added in a clean and maintainable format.",
        sections: [
          {
            heading: "Core Elements of the Transaction",
            paragraphs: [
              "Mergers, demergers and conversions affect not only internal company approvals but also creditors, shareholders and public registries.",
              "The current structure is intended for later expansion with final legal analysis and process notes.",
            ],
          },
          {
            heading: "Registration Process",
            paragraphs: [
              "Trade registry applications require complete documentation and proper sequencing. Practical differences should always be evaluated on a case-specific basis.",
            ],
          },
          {
            paragraphs: [
              "This body text is placeholder content and may be replaced with the final article at any time.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "annulment-mediation",
    image: "/articles/makale-5.jpg",
    publishedAt: "2024-02-18",
    featured: true,
    locales: {
      tr: {
        slug: "tasarrufun-iptali-davalarinda-arabuluculuk",
        title: "Tasarrufun İptali Davalarında Arabuluculuk",
        category: "İcra ve İflas Hukuku",
        date: "18 Şubat 2024",
        excerpt:
          "Tasarrufun iptali davalarında arabuluculuğun sınırları, dava süreçlerine etkisi ve uygulamada karşılaşılan temel tartışma başlıkları.",
        introduction:
          "Bu örnek metin, tasarrufun iptali davalarında arabuluculuk başlığındaki makalenin detay sayfasını üretim güvenli hale getirmek için hazırlanmıştır. Sonradan tam metin aynı yapıda kolaylıkla eklenebilir.",
        sections: [
          {
            heading: "Uyuşmazlığın Niteliği",
            paragraphs: [
              "Tasarrufun iptali davaları, alacaklının cebri icra sistemindeki korunma araçlarından biri olarak değerlendirilir. Bu nedenle arabuluculuk ile ilişkisinin ayrıca ve dikkatle ele alınması gerekir.",
              "Bu alan, ileride eklenecek detaylı mevzuat incelemesi ve uygulama notları için temiz bir iskelet sunmaktadır.",
            ],
          },
          {
            heading: "Arabuluculuğun Kapsamı",
            paragraphs: [
              "Arabuluculuğun hangi uyuşmazlıklarda dava şartı niteliği taşıdığı veya tarafların serbestçe tasarruf edebileceği alanın sınırları, bu başlıkta belirleyicidir. Somut olaya göre farklı değerlendirmeler yapılabilir.",
            ],
          },
          {
            paragraphs: [
              "Buradaki metinler yer tutucu olarak bırakılmıştır. Nihai makale içerikleri sonradan düzenli biçimde eklenebilir.",
            ],
          },
        ],
      },
      en: {
        slug: "mediation-in-actions-for-annulment-of-disposition",
        title: "Mediation in Actions for Annulment of Disposition",
        category: "Enforcement and Bankruptcy Law",
        date: "18 February 2024",
        excerpt:
          "A review of the limits of mediation in annulment actions, its impact on litigation and the key issues encountered in practice.",
        introduction:
          "This sample text is designed to keep the article detail page production-safe until the final content on mediation in annulment actions is ready.",
        sections: [
          {
            heading: "Nature of the Dispute",
            paragraphs: [
              "Actions for annulment of disposition are commonly treated as creditor-protective instruments within enforcement law. Their relationship with mediation therefore requires careful and separate analysis.",
              "This area provides a clean structure for later insertion of final legal commentary and practice notes.",
            ],
          },
          {
            heading: "Scope of Mediation",
            paragraphs: [
              "Whether mediation is mandatory or suitable in a given dispute depends on the scope of party disposition and the legal nature of the claim. The answer may differ from case to case.",
            ],
          },
          {
            paragraphs: [
              "The current content is placeholder text intended for later editorial replacement.",
            ],
          },
        ],
      },
    },
  },
];

function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

export function getArticlePath(locale: Locale, slug: string) {
  return locale === "tr" ? `/makalelerimiz/${slug}` : `/en/articles/${slug}`;
}

function mapArticle(locale: Locale, article: ArticleRecord): ArticleDetail {
  const localized = article.locales[locale];
  const alternateLocale = locale === "tr" ? "en" : "tr";
  const alternate = article.locales[alternateLocale];

  return {
    id: article.id,
    title: localized.title,
    slug: localized.slug,
    category: localized.category,
    date: localized.date,
    image: article.image,
    excerpt: localized.excerpt,
    href: getArticlePath(locale, localized.slug),
    publishedAt: article.publishedAt,
    introduction: localized.introduction,
    sections: localized.sections,
    alternateHref: getArticlePath(alternateLocale, alternate.slug),
  };
}

export function getAllArticles(locale: Locale): ArticleListItem[] {
  return articleRecords.map((article) => {
    const mapped = mapArticle(locale, article);

    return {
      id: mapped.id,
      title: mapped.title,
      slug: mapped.slug,
      category: mapped.category,
      date: mapped.date,
      image: mapped.image,
      excerpt: mapped.excerpt,
      href: mapped.href,
    };
  });
}

export function getFeaturedArticle(locale: Locale): ArticleListItem {
  const featured = articleRecords.find((article) => article.featured) ?? articleRecords[0];
  const mapped = mapArticle(locale, featured);

  return {
    id: mapped.id,
    title: mapped.title,
    slug: mapped.slug,
    category: mapped.category,
    date: mapped.date,
    image: mapped.image,
    excerpt: mapped.excerpt,
    href: mapped.href,
  };
}

export function getArticleBySlug(locale: Locale, slug: string) {
  const article = articleRecords.find((item) => item.locales[locale].slug === slug);
  return article ? mapArticle(locale, article) : null;
}

export function getRelatedArticles(locale: Locale, slug: string, limit = 3) {
  return getAllArticles(locale).filter((article) => article.slug !== slug).slice(0, limit);
}

export function getArticleStaticParams(locale: Locale) {
  return articleRecords.map((article) => ({
    slug: article.locales[locale].slug,
  }));
}

export function translateArticlePath(pathname: string, targetLocale: Locale) {
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  for (const article of articleRecords) {
    const trPath = getArticlePath("tr", article.locales.tr.slug);
    const enPath = getArticlePath("en", article.locales.en.slug);

    if (normalizedPath === trPath || normalizedPath === enPath) {
      return targetLocale === "tr" ? trPath : enPath;
    }
  }

  return null;
}

export function buildArticleMetadata(locale: Locale, slug: string): Metadata | null {
  const article = getArticleBySlug(locale, slug);

  if (!article) {
    return null;
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: article.href,
      languages: {
        tr: locale === "tr" ? article.href : article.alternateHref,
        en: locale === "en" ? article.href : article.alternateHref,
        "x-default": locale === "tr" ? article.href : article.alternateHref,
      },
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: absoluteUrl(article.href),
      siteName: locale === "tr" ? "HCC Avukatlık Bürosu" : "HCC Law Office",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "article",
      publishedTime: article.publishedAt,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export function getArticleSitemapEntries(): MetadataRoute.Sitemap {
  return articleRecords.flatMap((article) => {
    const trPath = getArticlePath("tr", article.locales.tr.slug);
    const enPath = getArticlePath("en", article.locales.en.slug);
    const lastModified = new Date(article.publishedAt);

    return [
      {
        url: absoluteUrl(trPath),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            tr: absoluteUrl(trPath),
            en: absoluteUrl(enPath),
          },
        },
      },
      {
        url: absoluteUrl(enPath),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            tr: absoluteUrl(trPath),
            en: absoluteUrl(enPath),
          },
        },
      },
    ];
  });
}
