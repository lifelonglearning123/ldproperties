import { ServiceAreaPage, generateServiceAreaMetadata, generateServiceAreaParams } from "@/components/templates/ServiceAreaPage";
import type { Metadata } from "next";

type Params = Promise<{ area: string }>;

export const dynamicParams = false;
export const generateStaticParams = generateServiceAreaParams;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { area } = await params;
  return generateServiceAreaMetadata("garden-rooms", area);
}

export default async function Page({ params }: { params: Params }) {
  const { area } = await params;
  return <ServiceAreaPage service="garden-rooms" area={area} />;
}
