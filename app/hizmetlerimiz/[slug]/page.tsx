import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/pages/service-detail-page";
import {
  buildServiceMetadata,
  getServiceBySlug,
  getServiceStaticParams,
} from "@/lib/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getServiceStaticParams();
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  return buildServiceMetadata(slug) ?? {};
}

export default async function ServiceDetailRoute({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
