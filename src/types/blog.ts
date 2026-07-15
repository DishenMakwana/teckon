/**
 * Shape for each blog post stored in the content system.
 */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO format: YYYY-MM-DD
  author: string;
  category: string;
  image: string;
  content: string;
}

export interface BlogCardProps {
  post: BlogPost;
  clickedSlug: string | null;
  setClickedSlug: (slug: string | null) => void;
}

export interface BlogListProps {
  posts: BlogPost[];
}
