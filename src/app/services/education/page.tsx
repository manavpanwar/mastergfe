import { SERVICES } from "@/data/services";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SERVICES.education.seoTitle,
  description: SERVICES.education.seoDescription,
  keywords: SERVICES.education.keywords,
};

export default function EducationPage() {
  const service = SERVICES.education;
  return <ServiceTemplate service={service} />;
}
