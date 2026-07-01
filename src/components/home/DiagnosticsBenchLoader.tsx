"use client";

// Client boundary required because DiagnosticsBench uses browser-only APIs
// and must be lazy-loaded with ssr: false.
import dynamic from "next/dynamic";

const DiagnosticsBench = dynamic(
  () => import("@/components/home/DiagnosticsBench"),
  { ssr: false }
);

export default function DiagnosticsBenchLoader() {
  return <DiagnosticsBench />;
}
