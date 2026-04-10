import { SERVICES } from "@/data/services";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SERVICES.travel.seoTitle,
  description: SERVICES.travel.seoDescription,
  keywords: SERVICES.travel.keywords,
};

export default function TravelPage() {
  const service = SERVICES.travel;
  return <ServiceTemplate service={service} />;
}
