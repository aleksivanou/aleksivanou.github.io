# aleksivanov.me

Source for [aleksivanov.me](https://aleksivanov.me), the multilingual portfolio and professional profile of Aliaksandr Ivanou, Senior Full-Stack Developer and founder of MyelophOne.

The site is intentionally framework-free: semantic HTML, modern CSS, and vanilla JavaScript keep the runtime small, transparent, and easy to audit. It is published as a static site through GitHub Pages with the custom apex domain `aleksivanov.me`.

## Architecture

- Static, dependency-free production runtime
- Critical CSS inlined in each page head
- Shared non-critical styles in `assets/css/styles.css`
- Shared behavior and locale-aware UI messages in `assets/js/scripts.js`
- Native responsive layout, light/dark themes, reduced-motion support, and accessible controls
- Localized static pages for English, Polish, Russian, German, Spanish, French, Italian, Portuguese, and Japanese
- Per-locale canonical URL, Open Graph locale, Dublin Core language, and complete reciprocal `hreflang` links
- XML sitemap containing every locale and its alternates
- Privacy-friendly analytics without cookies or cross-site tracking

## Project structure

```text
.
├── assets/
│   ├── css/styles.css
│   ├── favicon/
│   ├── img/
│   └── js/scripts.js
├── de/index.html
├── es/index.html
├── fr/index.html
├── it/index.html
├── ja/index.html
├── pl/index.html
├── pt/index.html
├── ru/index.html
├── index.html
├── CNAME
├── manifest.json
├── robots.txt
└── sitemap.xml
```

## Local development

Serve the repository root with any static HTTP server. Root-relative asset paths are used so localized routes behave exactly as they do on GitHub Pages.

```bash
npx serve .
```

Then open `http://localhost:3000`. Opening the HTML files directly with the `file:` protocol is not representative because root-relative URLs require an HTTP origin.

## Localization

English lives at `/`; other locales live in directories named by their ISO 639-1 language code. Each localized document contains translated HTML rather than relying on client-side rendering. Product names, package names, company names, standards, and technology trademarks remain unchanged.

Dynamic interface copy is selected from the translation table in `assets/js/scripts.js`. The primary subtag of the document's `lang` attribute is used when supported; invalid or unsupported values fall back to English.

When adding a locale, update all of the following together:

1. Add the localized `/<language>/index.html` page.
2. Add the locale to every page's reciprocal `hreflang` set and footer navigation.
3. Add the locale and its alternates to `sitemap.xml`.
4. Add dynamic UI strings and the locale path to `assets/js/scripts.js`.

## Deployment

Every push to `main` runs `.github/workflows/deploy-dist.yml`. The workflow checks out the complete source tree, minifies the existing CSS and JavaScript files in place without changing their names or paths, verifies the JavaScript syntax, creates a clean deployment commit, and force-updates the `dist` branch.

GitHub Pages should be configured as follows:

- Source: **Deploy from a branch**
- Branch: **dist**
- Folder: **/(root)**
- Custom domain: **aleksivanov.me**
- Enforce HTTPS: enabled after DNS verification

The repository includes `CNAME` and `.nojekyll`, so both are carried into every deployment. DNS for the apex domain must point to GitHub Pages using GitHub's current published records; configure `www` as a CNAME to the account's Pages hostname if the subdomain is also required.

## Release checks

Before merging into `main`, verify:

```bash
node --check assets/js/scripts.js
```

Also check that every local asset reference resolves, every page has the correct `lang`, canonical URL and Open Graph locale, all `hreflang` sets are reciprocal, and `sitemap.xml` contains all published URLs.

## Copyright

Copyright © 2026 Aliaksandr Ivanou (@aleksivanou). All rights reserved.
