"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbBarProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbBar({ items }: BreadcrumbBarProps) {
  return (
    <nav
      className="flex flex-wrap items-center gap-2 text-sm"
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="flex items-center gap-1 text-white/70 hover:text-[#FFBE00] transition-colors"
      >
        <Home size={14} />
        <span>Home</span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight size={14} className="text-white/40" />
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className="text-white/70 hover:text-[#FFBE00] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#FFBE00] font-semibold">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
