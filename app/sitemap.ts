import type { MetadataRoute } from "next";
import { getArticleSitemapEntries } from "@/lib/articles";
import { getServiceSitemapEntries } from "@/lib/services";
import { routeMap } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = Object.values(routeMap).flatMap((localizedPaths) => {
    return (["tr", "en"] as const).map((locale) => ({
      url: `https://hcc.av.tr${localizedPaths[locale]}`,
      lastModified,
      changeFrequency: locale === "en" ? ("monthly" as const) : ("weekly" as const),
      priority: localizedPaths[locale] === "/" ? 1 : 0.8,
      alternates: {
        languages: {
          tr: `https://hcc.av.tr${localizedPaths.tr}`,
          en: `https://hcc.av.tr${localizedPaths.en}`,
        },
      },
    }));
  });

  return [...staticEntries, ...getArticleSitemapEntries(), ...getServiceSitemapEntries()];
}
