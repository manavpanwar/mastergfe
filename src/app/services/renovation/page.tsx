import { SERVICES } from "@/data/services";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SERVICES.renovation.seoTitle,
  description: SERVICES.renovation.seoDescription,
  keywords: SERVICES.renovation.keywords,
};

export default function RenovationPage() {
  const service = SERVICES.renovation;
  return <ServiceTemplate service={service} />;
}
