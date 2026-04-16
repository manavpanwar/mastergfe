import AdvertisingAgencyPage from "@/components/AdvertisingAgencyPage";
import { Metadata } from "next";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: SERVICES.advertising.seoTitle,
  description: SERVICES.advertising.seoDescription,
  keywords: SERVICES.advertising.keywords,
};

export default function AdvertisingPage() {
  return <AdvertisingAgencyPage />;
}
