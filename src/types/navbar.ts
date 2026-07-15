import type { ComponentType } from "react";

/** A product category entry used in the Navbar mega-menu dropdown. */
export interface ProductCategory {
  name: string;
  href: string;
  desc: string;
  icon: ComponentType<{ className?: string; size?: number }>;
}

/** A top-level navigation link, optionally with a product dropdown. */
export interface NavLink {
  name: string;
  href: string;
  dropdown?: ProductCategory[];
}
