/**
 * A single section in a legal page (Privacy Policy or Terms).
 * Used by both PrivacyPolicyClient and TermsClient to render
 * accordion-style section content with a TL;DR summary.
 */
export interface Section {
  id: string;
  title: string;
  tldr: string;
  content: string;
}
