import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo/StructuredData";
import { getBlogPostBySlug, getBlogPosts } from "@/content/blog";
import { businessInfo } from "@/content/business";
import { isLocale, Locale } from "@/lib/i18n/config";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";
import { createBlogPostingSchema, createBreadcrumbSchema } from "@/lib/seo/schema";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const enPosts = getBlogPosts("en");
  const ruPosts = getBlogPosts("ru");

  return [
    ...enPosts.map((p) => ({ locale: "en", slug: p.slug })),
    ...ruPosts.map((p) => ({ locale: "ru", slug: p.slug }))
  ];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};

  const post = getBlogPostBySlug(localeParam, slug);
  if (!post) return {};

  return buildLocalizedMetadata({
    locale: localeParam,
    path: `/blog/${slug}`,
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.publishedAt,
    authors: [businessInfo.owner]
  });
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  const post = getBlogPostBySlug(locale, slug);
  if (!post) notFound();

  const allPosts = getBlogPosts(locale);
  const related = allPosts
    .filter((p) => p.slug !== post.slug)
    .filter(
      (p) =>
        p.category === post.category ||
        p.tags.some((t) => post.tags.includes(t))
    )
    .slice(0, 3);
  const breadcrumbs = [
    { name: locale === "ru" ? "Главная" : "Home", url: `/${locale}` },
    { name: locale === "ru" ? "Блог" : "Blog", url: `/${locale}/blog` },
    { name: post.title, url: `/${locale}/blog/${post.slug}` }
  ];

  return (
    <div className="mx-auto max-w-3xl">
      <StructuredData data={createBlogPostingSchema(post, locale)} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <nav className="mb-3 flex items-center gap-2 text-xs text-ink/40">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.url} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            {i < breadcrumbs.length - 1 ? (
              <Link href={crumb.url} className="transition-colors hover:text-ink">
                {crumb.name}
              </Link>
            ) : (
              <span className="text-ink/60">{crumb.name}</span>
            )}
          </span>
        ))}
      </nav>
      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/40 transition-colors hover:text-ink"
      >
        &larr; {locale === "ru" ? "Все статьи" : "All Posts"}
      </Link>

      <article className="mt-6">
        <header>
          <div className="flex items-center gap-3">
            <span className="inline-flex rounded-full bg-rose/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-rose">
              {post.category}
            </span>
            <span className="text-xs text-ink/30">
              {post.readTime} {locale === "ru" ? "мин чтения" : "min read"}
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-ink/40">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString(
                locale === "ru" ? "ru-RU" : "en-US",
                { month: "long", day: "numeric", year: "numeric" }
              )}
            </time>
            <span>&middot;</span>
            <span>{businessInfo.owner}, Laser &amp; More</span>
          </div>
        </header>

        <div className="mt-10 space-y-6">
          {post.content.map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="mt-10 font-display text-xl font-bold text-ink sm:text-2xl"
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} className="text-base leading-relaxed text-ink/70">
                {block}
              </p>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-warm-200 bg-gradient-to-br from-warm-50 to-blush p-8 text-center">
          <p className="font-display text-xl font-bold text-ink">
            {locale === "ru"
              ? "Готовы начать? Запишитесь на консультацию"
              : "Ready to get started? Book a consultation"}
          </p>
          <p className="mt-2 text-sm text-ink/50">
            {locale === "ru"
              ? "Бесплатная 15-минутная консультация в Sunny Isles Beach"
              : "Free 15-minute consultation at our Sunny Isles Beach studio"}
          </p>
          <Link
            href={businessInfo.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-ink/85 hover:shadow-glow"
          >
            {locale === "ru" ? "Записаться" : "Book Now"} &rarr;
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-ink">
            {locale === "ru" ? "Похожие статьи" : "Related Articles"}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${locale}/blog/${r.slug}`}
                className="group rounded-xl border border-warm-200 bg-white p-4 transition-all hover:border-warm-300 hover:shadow-card"
              >
                <h3 className="text-sm font-bold leading-snug text-ink group-hover:text-rose transition-colors">
                  {r.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink/45">
                  {r.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
