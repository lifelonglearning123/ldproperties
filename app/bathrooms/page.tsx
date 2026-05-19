import { ServicePage, generateServiceMetadata } from "@/components/templates/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = generateServiceMetadata("bathrooms");

export default function Page() {
  return <ServicePage slug="bathrooms" />;
}
