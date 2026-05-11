import { SERVICES } from "@/data/services";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SERVICES.advertising.seoTitle,
  description: SERVICES.advertising.seoDescription,
  keywords: SERVICES.advertising.keywords,
};

export default function AdvertisingPage() {
  return <ServiceTemplate service={SERVICES.advertising} />;
}
