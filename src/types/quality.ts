import React from "react";

export interface StepItem {
  num: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface CertItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}
