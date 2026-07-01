import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/data";

/**
 * Generates the robots.txt file served at /robots.txt.
 *
 * Strategy: allow all crawlers by default, and add explicit allow rules for
 * the major AI search bots so they can index and cite Teckon content in
 * AI Overviews, ChatGPT, Perplexity, and Gemini answers.
 *
 * To block a specific AI crawler from training on your content while keeping
 * search citation active, change its rule to `disallow: "/"`. Note that
 * blocking GPTBot prevents OpenAI *training* use but not ChatGPT browsing
 * (ChatGPT-User handles that separately).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all web crawlers including Googlebot, Bingbot, etc.
      { userAgent: "*", allow: "/" },

      // OpenAI — GPTBot handles model training; ChatGPT-User handles real-time browsing
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },

      // Perplexity AI — always cites sources, high citation value for B2B content
      { userAgent: "PerplexityBot", allow: "/" },

      // Anthropic Claude — both the training crawler and the search crawler
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },

      // Google Gemini training (separate from Googlebot which handles Search)
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${COMPANY.url}/sitemap.xml`,
  };
}
