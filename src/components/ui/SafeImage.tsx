"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackText?: string;
}

export default function SafeImage({
  src,
  alt,
  fallbackText,
  className = "",
  style,
  loading = "eager",
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false);

  // If the image fails to load, render a clean styled fallback container showing the description/name
  if (error || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold p-4 text-center text-sm w-full h-full border border-slate-200 dark:border-slate-700 rounded-xl ${className}`}
        style={style}
      >
        <span>{fallbackText || alt || "Image Not Available"}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onError={() => setError(true)}
      {...props}
    />
  );
}
