import { blogPostsEn } from "@/content/blog.en";
import { blogPostsRu } from "@/content/blog.ru";
import { BlogPost } from "@/content/blog.types";
import { Locale } from "@/lib/i18n/config";

export function getBlogPosts(locale: Locale): BlogPost[] {
  const posts = locale === "ru" ? blogPostsRu : blogPostsEn;
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPostBySlug(
  locale: Locale,
  slug: string
): BlogPost | undefined {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}

export function getBlogCategories(locale: Locale) {
  const posts = getBlogPosts(locale);
  const categories = new Set(posts.map((p) => p.category));
  return Array.from(categories);
}
