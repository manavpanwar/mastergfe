import { SERVICES } from "@/data/services";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SERVICES.scrap.seoTitle,
  description: SERVICES.scrap.seoDescription,
  keywords: SERVICES.scrap.keywords,
};

export default function ScrapPage() {
  const service = SERVICES.scrap;
  return <ServiceTemplate service={service} />;
}
