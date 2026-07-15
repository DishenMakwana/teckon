/**
 * Next.js dynamic route params for pages that receive a `slug` segment.
 * The params object is a Promise in Next.js 15+ App Router.
 */
export interface SlugPageProps {
  params: Promise<{ slug: string }>;
}

/** Props injected by Next.js into the root error.tsx boundary component. */
export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
