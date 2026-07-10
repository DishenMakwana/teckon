import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/data";

/**
 * Generates the robots.txt file served at /robots.txt.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * AEO / GEO Strategy — Answer Engine & Generative Engine Optimization
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 1. ALLOW  retrieval / citation bots — these fetch pages to ANSWER user
 *    queries in ChatGPT, Claude, Perplexity, Google AI Overviews, etc.
 *    We WANT these bots to index our content so Teckon gets cited.
 *
 * 2. BLOCK  training crawlers — these scrape content to train foundation
 *    models. We don't want our proprietary product data used as training
 *    data without consent.
 *
 * 3. Advertise llms.txt and llms-full.txt as structured AI-readable
 *    summaries of the brand so AI assistants can quickly understand us.
 * ═══════════════════════════════════════════════════════════════════════
 */
export default function robots(): MetadataRoute.Robots {
  const base = COMPANY.url;

  return {
    rules: [
      // ─── Default: allow all standard web crawlers ───────────────────
      { userAgent: "*", allow: "/", disallow: "/_next/image" },

      // ─── RETRIEVAL / CITATION BOTS (ALLOWED) ───────────────────────
      // These bots fetch content to answer user queries in real time.
      // Allowing them means Teckon appears in AI-generated answers.

      // ChatGPT browsing — fetches pages when users ask ChatGPT questions
      { userAgent: "ChatGPT-User", allow: "/", disallow: "/_next/image" },

      // Perplexity — always cites sources, high citation value for B2B
      { userAgent: "PerplexityBot", allow: "/", disallow: "/_next/image" },

      // Claude retrieval — fetches pages for real-time answers
      { userAgent: "ClaudeBot", allow: "/", disallow: "/_next/image" },

      // Google AI Overviews — served by regular Googlebot (allowed by *)
      // Bing Copilot — served by regular Bingbot (allowed by *)
      // Microsoft Copilot retrieval
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: "/_next/image",
      },

      // ─── AI TRAINING CRAWLERS (BLOCKED) ─────────────────────────────
      // These bots scrape content to train large language models.
      // Block them to prevent proprietary product data from being used
      // as training data without consent.

      // OpenAI model training crawler (separate from ChatGPT-User browsing)
      { userAgent: "GPTBot", disallow: "/" },

      // Google AI training crawler (separate from Googlebot search indexing)
      { userAgent: "Google-Extended", disallow: "/" },

      // Anthropic AI training crawler (separate from ClaudeBot retrieval)
      { userAgent: "anthropic-ai", disallow: "/" },

      // Common Crawl — open dataset used to train many LLMs
      { userAgent: "CCBot", disallow: "/" },

      // Meta AI training crawler
      { userAgent: "FacebookBot", disallow: "/" },
      { userAgent: "Meta-ExternalAgent", disallow: "/" },

      // ByteDance / TikTok AI training crawler
      { userAgent: "Bytespider", disallow: "/" },

      // Amazon AI training crawler
      { userAgent: "Amazonbot", disallow: "/" },

      // Cohere AI training crawler
      { userAgent: "cohere-ai", disallow: "/" },

      // AI2 (Allen Institute) training crawler
      { userAgent: "AI2Bot", disallow: "/" },

      // Diffbot — used for data extraction and model training
      { userAgent: "Diffbot", disallow: "/" },

      // Omgili / Webz.io data collector
      { userAgent: "omgili", disallow: "/" },

      // Scrapy-based generic scrapers
      { userAgent: "Scrapy", disallow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
