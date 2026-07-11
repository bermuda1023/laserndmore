import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo/StructuredData";
import { getBlogPosts } from "@/content/blog";
import { isLocale, Locale } from "@/lib/i18n/config";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";
import { createBreadcrumbSchema, createBlogListSchema } from "@/lib/seo/schema";
import { notFound } from "next/navigation";

const categoryLabelsEn: Record<string, string> = {
  laser: "Laser",
  facials: "Facials",
  skincare: "Skincare",
  body: "Body",
  treatments: "Treatments"
};

const categoryLabelsRu: Record<string, string> = {
  laser: "Лазер",
  facials: "Уходы",
  skincare: "Уход за кожей",
  body: "Тело",
  treatments: "Процедуры"
};

const categoryColors: Record<string, string> = {
  laser: "bg-rose/10 text-rose",
  facials: "bg-amber-50 text-gold",
  skincare: "bg-violet-50 text-violet-600",
  body: "bg-emerald-50 text-emerald-700",
  treatments: "bg-sky-50 text-sky-600"
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  return buildLocalizedMetadata({
    locale: localeParam,
    path: "/blog",
    title:
      localeParam === "ru"
        ? "Блог — советы по уходу за кожей"
        : "Skincare Blog — Tips & Guides",
    description:
      localeParam === "ru"
        ? "Экспертные советы по уходу за кожей, лазерным процедурам, анти-эйджингу и многому другому от Laser & More в Sunny Isles Beach."
        : "Expert skincare tips, laser treatment guides, anti-aging advice, and more from Laser & More in Sunny Isles Beach, Miami.",
    keywords: [
      "skincare blog",
      "laser hair removal tips",
      "aesthetic blog Miami",
      "skincare advice Sunny Isles Beach",
      "facial treatments guide"
    ]
  });
}

export default async function BlogPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  const posts = getBlogPosts(locale);
  const labels = locale === "ru" ? categoryLabelsRu : categoryLabelsEn;
  const breadcrumbs = [
    { name: locale === "ru" ? "Главная" : "Home", url: `/${locale}` },
    { name: locale === "ru" ? "Блог" : "Blog", url: `/${locale}/blog` }
  ];

  return (
    <div>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createBlogListSchema(posts, locale)} />
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
      <div className="space-y-12">
      <section>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {locale === "ru" ? "Блог" : "Skincare Blog"}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/60">
          {locale === "ru"
            ? "Экспертные советы по уходу за кожей, лазерным процедурам и wellness от Laser & More в Sunny Isles Beach."
            : "Expert tips on skincare, laser treatments, and wellness from Laser & More in Sunny Isles Beach, Miami."}
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col rounded-2xl border border-warm-200 bg-white p-6 transition-all hover:border-warm-300 hover:shadow-card"
          >
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
                  categoryColors[post.category] ?? "bg-warm-100 text-ink/50"
                }`}
              >
                {labels[post.category] ?? post.category}
              </span>
              <span className="text-xs text-ink/30">
                {post.readTime} {locale === "ru" ? "мин" : "min read"}
              </span>
            </div>

            <h2 className="mt-3 font-display text-lg font-bold leading-snug text-ink group-hover:text-rose transition-colors">
              <Link href={`/${locale}/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/55">
              {post.excerpt}
            </p>

            <div className="mt-4 flex items-center justify-between border-t border-warm-100 pt-3">
              <time className="text-xs text-ink/30" dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString(
                  locale === "ru" ? "ru-RU" : "en-US",
                  { month: "short", day: "numeric", year: "numeric" }
                )}
              </time>
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="text-xs font-semibold text-rose transition-colors hover:text-rose-dark"
              >
                {locale === "ru" ? "Читать" : "Read"} &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
      </div>
    </div>
  );
}
