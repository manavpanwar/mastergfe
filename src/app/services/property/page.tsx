import { SERVICES } from "@/data/services";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SERVICES.property.seoTitle,
  description: SERVICES.property.seoDescription,
  keywords: SERVICES.property.keywords,
};

export default function PropertyPage() {
  const service = SERVICES.property;
  return <ServiceTemplate service={service} />;
}
