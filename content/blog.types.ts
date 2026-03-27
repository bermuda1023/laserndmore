export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: "laser" | "facials" | "skincare" | "body" | "treatments";
  tags: string[];
  readTime: number;
  publishedAt: string;
};
