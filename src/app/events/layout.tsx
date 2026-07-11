import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/events" },
  title: "Events & Exhibitions | Teckon™ Quality Spares",
  description:
    "Teckon™'s presence at major construction equipment trade shows and exhibitions across India.",
  keywords: [
    "Teckon exhibitions",
    "heavy machinery trade shows India",
    "Shreeji Hydraulics news",
    "construction equipment expo Gujarat",
    "Excon India parts supplier",
    "Teckon presence at heavy machinery expo India",
    "construction equipment exhibitions trade show Gujarat",
  ],
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <>{children}</>;
}
