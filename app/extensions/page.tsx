import { ServicePage, generateServiceMetadata } from "@/components/templates/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = generateServiceMetadata("extensions");

export default function Page() {
  return <ServicePage slug="extensions" />;
}
