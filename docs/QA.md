# AqlVest 1.0 launch verification

Verified on 14 November 2026. Application commit: `77ae3eb93e4cac063075da94d007c2bd44e2841f`.

## Checks completed

- Next.js production build: passed, 27 generated pages/assets, all content prerendered.
- TypeScript and ESLint: passed without warnings.
- npm audit: zero reported advisories after a compatible minimatch override in the development lint dependency tree. Production dependency audit also passed.
- Four automated test groups passed locally and against `https://aqlvest.com` after migration, with zero skipped tests in the integration run.
- All 21 content routes returned HTTP 200 on the independent hosted preview before migration.
- Tests validate unique metadata, canonical URLs, one main heading per content page, language attributes, internal route and anchor destinations, legal links, explicit Coming Soon notices, security headers, legacy redirects, 404s, sitemap, robots, and social image responses.
- Browser checks covered desktop and mobile layouts, 320px and 390px widths, 1280px desktop, mobile menu links, Escape key behaviour, category filters, search, empty results and reset, article reading, product interest routing, and contact preparation.
- No horizontal page overflow was found on the mobile routes checked, including main, legal, article, tool, and workbook detail pages. The 320px hero tagline and actions were refined to fit.
- Required contact fields reject incomplete input. A product interest carries its name into the contact message and selects the relevant topic. The form correctly encodes a mailto draft and offers a working copy fallback. No test message was sent.
- Production mobile navigation, Escape handling, and contact preparation were verified after the domain move.
- HTTPS, HTTP redirects, www-to-apex 308, path/query preservation, HSTS, and unchanged external DNS were verified. See `DEPLOYMENT.md`.

## Production Lighthouse results

| Audit | Mobile | Desktop |
| --- | ---: | ---: |
| Performance | 99 | 100 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| Largest contentful paint | 0.9 s | 0.3 s |
| Total blocking time | 150 ms | 0 ms |
| Cumulative layout shift | 0 | 0 |

These are lab measurements, not field Core Web Vitals or guarantees for every device/network. Earlier local desktop measurements varied from 61 to 99 while first paint remained fast. A diagnostic trace showed no large application task in the final run; the final production runs above are recorded in `audit-summary.json`. Initial low-contrast labels and an expensive traced-vector emblem were corrected before release. The original PNG is now optimised by Next.js.

Full local Lighthouse HTML/JSON reports, a desktop diagnostic trace, and production screenshots are retained in the ignored `artifacts/` directory. They are not deployed or published with the source repository.

## Scope and remaining owner details

- No authentication, payments, analytics, database, stock screening engine, financial API, or email delivery backend was introduced.
- Tools and downloadable products are concept previews, clearly marked Coming Soon. No product pricing or availability date is promised.
- Introductory educational guides link to checked original AAOIFI, MSCI, and Investor.gov sources. AqlVest does not claim scholarly review, affiliation, certification, or a religious ruling.
- Legal and privacy pages name AqlVest and the owner-approved founder email. The owner has not supplied a legal/operator identity, country, mailing address, or registration information. Jurisdiction-specific publisher disclosures still need to be supplied by the owner. No address or entity details were invented.
- Contact functionality prepares a draft in the visitor's email app. It does not deliver email from the server, and mailbox delivery was not tested.
- Automated accessibility scores supplement keyboard and layout checks; they are not a comprehensive accessibility certification.
- All legacy resources remain intact. Deletion requires the owner's explicit approval, including cleanup of the unused empty setup project.
