import { SERVICES } from "@/data/services";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SERVICES["business-legal"].seoTitle,
  description: SERVICES["business-legal"].seoDescription,
  keywords: SERVICES["business-legal"].keywords,
};

export default function BusinessLegalPage() {
  const service = SERVICES["business-legal"];
  return <ServiceTemplate service={service} />;
}
