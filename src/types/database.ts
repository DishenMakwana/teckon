import { Product } from "./product";
import { BlogPost } from "./blog";
import { CompanyInfo } from "./company-info";

export interface HomePageData {
  products: Product[];
  blogs: BlogPost[];
  company: CompanyInfo;
}

export interface ProductDetailPageData {
  product: Product | undefined;
  related: Product[];
}

export interface BlogDetailPageData {
  post: BlogPost | undefined;
  related: BlogPost[];
}
