# Laser & More Website

SEO-first bilingual website for Laser & More (`www.laserndmore.com`) built with Next.js.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Localized routes (`/en`, `/ru`)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checklist

- Set real business phone/email in `content/business.ts`.
- Replace placeholder photos in `public/images/placeholders/`.
- Verify domain DNS and connect hosting to `www.laserndmore.com`.
- Submit sitemap URL: `https://www.laserndmore.com/sitemap.xml`.
- Connect GA4 / GTM and confirm booking click events.

## Implemented SEO features

- Locale-aware metadata and canonical URLs
- `hreflang` alternates for English/Russian
- XML sitemap and robots file
- JSON-LD structured data (`BeautySalon`, FAQ)
- Service landing pages for local-intent treatments
