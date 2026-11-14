# AqlVest 1.0

A fresh Islamic investment education and digital products website built with Next.js App Router, TypeScript, and Tailwind CSS. This project has no dependency on the former screening application, its APIs, or its database.

## Run

Use Node.js 24 LTS and npm.

```sh
npm ci
npm run dev
```

Open <http://127.0.0.1:3000>. For a production preview:

```sh
npm run build
npm start
```

The supported Webpack compiler is selected explicitly because Turbopack's local worker port was restricted in the development environment. Vercel uses the same build command. No environment variables or secrets are required.

## Verify

```sh
npm run typecheck
npm run lint
npm test
npm run build
# With the production server running:
SITE_TEST_URL=http://127.0.0.1:3000 npm test
```

Integration tests crawl all public routes, verify metadata and internal links/anchors, check product availability notices, security headers, redirects, 404s, and SEO assets. Browser verification additionally covers responsive layouts, navigation, filters, the contact composer, and keyboard interaction. See `docs/QA.md` for actual results.

## Content and architecture

- `src/app`: server-rendered, prerendered routes and SEO assets.
- `src/lib/content.ts`: typed educational guides and planned product catalogue.
- `src/lib/legal.ts`: privacy, terms, disclaimer, and publisher information.
- `src/lib/site.ts`: canonical URL, email, navigation, and metadata helper.
- `src/components`: shared layout, cards, previews, learning filters, and contact composer.
- `public/brand`: the recovered original emblem/vector logo and locally hosted licensed fonts.

Only navigation, library filters, and email composition need client JavaScript. Article and product detail routes are generated at build time. Add future guides or catalogue entries in the typed content module, then rebuild. Do not present a product as available until it exists and its terms, format, and limitations have been reviewed.

The contact form validates locally, prepares a `mailto:` draft, and offers a copyable fallback. Visitors send the message in their own email application. There is no server collection, mailing list, payment, authentication, analytics, financial API, or screening backend.

## Deployment

Use the independent `aqlvest` Vercel project. Verify a preview before promotion or domain migration. The canonical domain is `https://aqlvest.com`; `www` should redirect to the apex. See `docs/DEPLOYMENT.md` for the migration and rollback record. Never remove legacy resources without the owner's explicit deletion approval.

## Ownership and legal content

The original brand assets are retained with provenance in `docs/BRANDING.md`. Source and original AqlVest content are proprietary. DM Sans is distributed under the bundled SIL Open Font License. Operator address, legal identity, registration details, and any jurisdiction-specific disclosures must be supplied by the owner rather than invented. Update the legal notice with applicable details before conducting commercial sales.
