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
- Vercel project: `aqlvest`, `prj_drK2ytK3x9BW87nliMcZHjbcgIe5`.
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

Pending preview verification and migration. Update this section with the real deployment URL, commit, build status, migration result, and DNS/HTTPS checks; do not treat this runbook as evidence that those steps have occurred.
