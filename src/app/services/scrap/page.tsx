import { SERVICES } from "@/data/services";
import ScrapManagementPage from "@/components/ScrapManagementPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SERVICES.scrap.seoTitle,
  description: SERVICES.scrap.seoDescription,
  keywords: SERVICES.scrap.keywords,
};

export default function ScrapPage() {
  return <ScrapManagementPage />;
}
