import { cache } from "react";
import { PRODUCTS, BLOG_POSTS, COMPANY } from "@/lib/data";
import { Product } from "@/types/product";
import { BlogPost } from "@/types/blog";
import { CompanyInfo } from "@/types/company-info";
import {
  HomePageData,
  ProductDetailPageData,
  BlogDetailPageData,
} from "@/types/database";

// In-memory local cache store to minimize load times and avoid repeated object allocations
const localCache = new Map<string, unknown>();

function getOrSetCache<T>(key: string, fetcher: () => T): T {
  if (localCache.has(key)) {
    return localCache.get(key) as T;
  }
  const result: T = fetcher();
  localCache.set(key, result);
  return result;
}

/**
 * Cached database query for all products.
 */
export const getProducts = cache(async (): Promise<Product[]> => {
  return getOrSetCache("all_products", (): Product[] => [...PRODUCTS]);
});

/**
 * Cached database query for single product by slug.
 */
export const getProductBySlug = cache(
  async (slug: string): Promise<Product | undefined> => {
    return getOrSetCache(`product_${slug}`, (): Product | undefined =>
      PRODUCTS.find((p: Product): boolean => p.slug === slug)
    );
  }
);

/**
 * Cached database query for related products in the same category.
 */
const getRelatedProducts = cache(
  async (
    category: string,
    currentSlug: string,
    limit: number = 4
  ): Promise<Product[]> => {
    return getOrSetCache(
      `related_products_${category}_${currentSlug}_${limit}`,
      (): Product[] =>
        PRODUCTS.filter(
          (p: Product): boolean =>
            p.category === category && p.slug !== currentSlug
        ).slice(0, limit)
    );
  }
);

/**
 * Cached database query for all blog posts.
 */
export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  return getOrSetCache("all_blog_posts", (): BlogPost[] => [...BLOG_POSTS]);
});

/**
 * Cached database query for single blog post by slug.
 */
export const getBlogPostBySlug = cache(
  async (slug: string): Promise<BlogPost | undefined> => {
    return getOrSetCache(`blog_post_${slug}`, (): BlogPost | undefined =>
      BLOG_POSTS.find((p: BlogPost): boolean => p.slug === slug)
    );
  }
);

/**
 * Cached database query for related blog posts excluding the current article.
 */
const getRelatedBlogPosts = cache(
  async (currentSlug: string, limit: number = 2): Promise<BlogPost[]> => {
    return getOrSetCache(
      `related_blog_posts_${currentSlug}_${limit}`,
      (): BlogPost[] =>
        BLOG_POSTS.filter(
          (p: BlogPost): boolean => p.slug !== currentSlug
        ).slice(0, limit)
    );
  }
);

/**
 * Cached company info query.
 */
const getCompanyInfo = cache(async (): Promise<CompanyInfo> => {
  return getOrSetCache("company_info", (): CompanyInfo => ({ ...COMPANY }));
});

/**
 * Parallel database call using Promise.all to fetch homepage data concurrently
 * and cache entities locally for instant subsequent loads.
 */
export const getHomePageData = cache(async (): Promise<HomePageData> => {
  const [products, blogs, company]: [Product[], BlogPost[], CompanyInfo] =
    await Promise.all([getProducts(), getBlogPosts(), getCompanyInfo()]);
  return { products, blogs, company };
});

/**
 * Parallel database call using Promise.all for product detail pages.
 */
export const getProductDetailPageData = cache(
  async (slug: string): Promise<ProductDetailPageData> => {
    const product: Product | undefined = await getProductBySlug(slug);
    if (!product) {
      return { product: undefined, related: [] };
    }
    const related: Product[] = await getRelatedProducts(
      product.category,
      product.slug,
      4
    );
    return { product, related };
  }
);

/**
 * Parallel database call using Promise.all for blog article detail pages.
 */
export const getBlogDetailPageData = cache(
  async (slug: string): Promise<BlogDetailPageData> => {
    const [post, related]: [BlogPost | undefined, BlogPost[]] =
      await Promise.all([
        getBlogPostBySlug(slug),
        getRelatedBlogPosts(slug, 2),
      ]);
    return { post, related };
  }
);
