import { ServicePage, generateServiceMetadata } from "@/components/templates/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = generateServiceMetadata("kitchens");

export default function Page() {
  return <ServicePage slug="kitchens" />;
}
