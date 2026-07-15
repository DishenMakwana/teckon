import type { ImageProps } from "next/image";

/** A single crumb entry rendered inside BreadcrumbBar. */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/** Props accepted by the BreadcrumbBar navigation component. */
export interface BreadcrumbBarProps {
  items: BreadcrumbItem[];
}

/**
 * Props for SafeImage — extends Next.js ImageProps but replaces
 * the built-in onError with a managed fallback via internal state.
 */
export interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackText?: string;
}
