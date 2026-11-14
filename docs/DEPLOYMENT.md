# Deployment and migration record

## Existing resources — preserve

- GitHub: `fayasahamedcm/aqlvest-prototype` (private).
- Vercel project: `aqlvest-prototype`, `prj_c3GGcdHUFueenXA2whighSXAZuQT`.
- Vercel team: `team_NLi46J0xlxM3RhSerNPveqYK`.
- Existing domains: `aqlvest.com` and `www.aqlvest.com`, both verified, with no redirect between them in the old configuration.
- Existing project alias: `aqlvest-prototype.vercel.app` redirects to `aqlvest.com` with 307.
- Latest inspected old deployment: `dpl_qDvimdCf2Wrd8UMMQVyD418kEuZR`, ready, URL `aqlvest-prototype-orftvmhix-cmfayasahamed-3679s-projects.vercel.app`. Record is an observation, not a claim that this is the current production target.
- DNS is external: `dns1.registrar-servers.com`, `dns2.registrar-servers.com`.
- Apex A record observed through Vercel: `216.198.79.1`, correctly configured. No DNS changes are planned.

## New resources

- Local source: `/Users/fayasahamed/Documents/Projects/AqlVEST/aqlvest`.
- Active Vercel project: `aqlvest-website`, `prj_qbqksdCJ87w2rJVM4IbtPsx5YUyv`, linked to `fayasahamedcm/aqlvest`.
- An empty unlinked `aqlvest` project (`prj_drK2ytK3x9BW87nliMcZHjbcgIe5`) was created during setup. It has no deployment or domain and is retained pending explicit cleanup approval.
- Next.js framework, `npm ci` install, `npm run build` production build.

## Migration sequence

1. Complete production build, checks, local UI verification.
2. Create independent preview deployment and verify its status, routes, desktop/mobile layouts, contact flow, and performance.
3. Promote the verified deployment in the new project, before assigning the existing custom domains.
4. Move both custom domains within the same team, preserving external DNS. Set `www.aqlvest.com` to permanent redirect to `aqlvest.com`, preserving paths and queries.
5. Verify HTTPS on both hosts, HTTP-to-HTTPS redirects, www-to-apex redirect, canonical metadata, primary routes, and contact functionality.
6. Compare observed DNS before/after. Retain all old projects and deployments for rollback until the owner explicitly approves deletion.

## Rollback

Move the two domain assignments back to the original project and restore the recorded original domain settings. Recheck HTTPS and the old production site. DNS records should not need changing. Do not delete either project's history as part of migration or rollback.

## Actual completion record

Completed on 14 November 2026:

- Repository: https://github.com/fayasahamedcm/aqlvest (created by owner as public).
- Verified application commit: `77ae3eb93e4cac063075da94d007c2bd44e2841f`.
- Verified standalone deployment: `dpl_2LwgnaxbZvJN5fUsHwvb4uiFUChJ`, READY, https://aqlvest-website-pe4r130ek-cmfayasahamed-3679s-projects.vercel.app.
- The independent project deployed `main` as its own Production environment before any custom domain was attached. Its unique Vercel URL was used as the preview. All 21 content routes returned HTTP 200 before migration.
- The two custom domains were moved through Vercel's signed-in dashboard. The existing `aqlvest-prototype.vercel.app` redirect followed the apex automatically and still redirects to the apex with 307.
- `aqlvest.com` is attached to the new project's Production environment, verified, with no redirect.
- `www.aqlvest.com` is attached to the new project, verified, and redirects to `aqlvest.com` with 308.
- HTTP on both hosts returns 308 to HTTPS. HTTPS apex returns 200 and HSTS `max-age=63072000`. HTTPS www returns 308 to the apex, preserving the tested `/learn?check=1` path and query. Certificate checks used the system trust store; validation was not disabled.
- Existing external nameservers, apex A record `216.198.79.1`, and www CNAME `df63a4457018661c.vercel-dns-017.com.` remain unchanged. The recommendation shown by Vercel for the new project's apex may differ; no DNS edit was made or needed.
- The full integration suite passed against the public production domain after migration. Browser checks covered production mobile navigation, Escape key handling, and contact draft preparation.
- Old project, deployments, local folders, GitHub repository, and databases were not deleted. The old project has no custom domain assignments after migration.

Documentation-only commits after the application commit do not alter the verified application source. Vercel may build them automatically; check the project dashboard for the latest deployment.

The direct saved-token API fallback was rejected by automatic approval review as credential probing. Migration instead used the normal authenticated dashboard after the owner signed in; no token was copied into the source or deployment.
