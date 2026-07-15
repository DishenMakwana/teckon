import React from "react";

export interface CultureValue {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}
