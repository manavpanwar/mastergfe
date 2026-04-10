import { SERVICES } from "@/data/services";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SERVICES.solar.seoTitle,
  description: SERVICES.solar.seoDescription,
  keywords: SERVICES.solar.keywords,
};

export default function SolarPage() {
  const service = SERVICES.solar;
  return <ServiceTemplate service={service} />;
}
