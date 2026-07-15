import React from "react";

export interface Industry {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}
