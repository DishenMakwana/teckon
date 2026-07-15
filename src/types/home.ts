import type { ComponentType } from "react";

/** A feature badge item in the About section. */
export interface Feature {
  icon: ComponentType<{ className?: string; size?: number }>;
  label: string;
}

/** Props for the animated counter widget in StatsStrip. */
export interface CounterProps {
  end: number;
  duration?: number;
}

/** A single statistic card entry in StatsStrip. */
export interface StatItem {
  end: number;
  suffix: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  tag: string;
  description: string;
}

/** A customer testimonial entry. */
export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  rating: number;
}

/** A unique selling point card in WhyChooseUs. */
export interface Usp {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

/** Highlighted state popup data on the IndiaMapChart. */
export interface StateInfo {
  name: string;
  city: string;
  role: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
}

/** A diagnostics bench machine preset configuration. */
export interface DiagnosticsPreset {
  id: string;
  name: string;
  machine: string;
  bore: number;
  rod: number;
  stroke: number;
  pressure: number;
  flow: number;
  partName: string;
  partRef: string;
  partSlug: string;
}
