# DECORA INDUSTRIES — Static Website

A complete, static, corporate + product-catalogue website for **Decora Industries** (steel furniture, storage systems, retail shelving, lockers, racks and fencing solutions).

Built with **HTML5, CSS3 and vanilla JavaScript only**. No Node.js, no build step, no backend, no database. It runs by opening `index.html` in a browser and by uploading the files to shared hosting / cPanel.

---

## Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage (hero, categories, featured products, solutions, manufacturing, gallery, FAQ, CTA) |
| `products.html` | Filterable product catalogue |
| `product-details.html` | Single product view (`?id=…`) |
| `industries.html` | Industries served |
| `about.html` | About the company |
| `contact.html` | Quote / enquiry form |
| `404.html` | Not-found page |

---

## Local preview

Just **double-click `index.html`** — the whole site works from `file://`, including the catalogue, filters and product pages (product data is a JavaScript file, not a fetched JSON, so there are no browser security errors).

A few notes:
- The hero shows a **poster image** until you add the hero video files (below). This is intentional and not an error.
- URL query-parameter updates on the catalogue only rewrite the address bar when served over `http/https` (skipped on `file://` to avoid errors) — filtering still works locally.

---

## Editing guide

### Replace the logo
The logo is temporary, text-based. Edit the `.brand` block (search for `class="brand"`) in **every** `*.html` file — it appears in the header and footer. Replace the `<span class="brand__mark">…</span>` and wordmark with your own `<img src="assets/images/brand/your-logo.svg" …>`.

### Update contact information
**Phone, WhatsApp and email are set in ONE file: `js/site-config.js`.**
```js
window.DECORA_CONFIG = {
  phone:    "+91 99999 99999",    // as visitors see it; the call link is built from it
  whatsapp: "919999999999",       // country code + number, digits only
  email:    "sales@example.com"
};
```
Edit, save, refresh — every page (top bar, mobile menu, footer, contact page, sticky call button, WhatsApp/email enquiry buttons, homepage search-engine schema) updates automatically.

How it works: links in the HTML carry `data-contact-link="phone|email|whatsapp"` (href is set) and/or `data-contact-text="phone|email"` (visible text is set); `js/script.js` fills them from the config. The placeholder values still written in the HTML are only a fallback for browsers with JavaScript disabled — you don't need to edit them. When adding a new phone/email link to a page, add these attributes and make sure the page loads `js/site-config.js` before `js/script.js`.

Still edited directly in the HTML:
- **Address** — `[Your business address], India`
- **Social links** — the `href="#"` values in the footer `.footer__social`

### Add or edit products
Open **`data/products-data.js`**. Copy any product object, paste it into the `window.DECORA_PRODUCTS` array and edit its fields. The file header explains every field. Key points:
- `id` must be unique — it becomes `product-details.html?id=YOUR-ID`.
- `category` must match one of the entries in `window.DECORA_CATEGORIES` (same file).
- `featured: true` shows the product on the homepage.

### Replace product / section images
Images live under `assets/images/…` in clearly named folders (`products/`, `categories/`, `industries/`, `manufacturing/`, `projects/`). Every image ships as an on-brand **`.svg` placeholder**. To use real photography, save your file with the **same name** but change references, or simply overwrite the placeholder. Recommended:
- Format: **WebP** preferred (JPG fallback fine), SVG for icons/logos.
- Products: square (e.g. 800×800). Categories/industries/projects: 4:3 (e.g. 800×600).
- Keep `width`/`height` attributes and `alt` text meaningful.
- If an image is missing, the site automatically swaps in a local placeholder (no broken images).

### Replace the hero video
Add these to `assets/videos/` (see `assets/videos/README-hero-video.txt`):
```
hero-showroom.webm    (preferred — VP9/AV1)
hero-showroom.mp4     (fallback — H.264)
hero-poster.webp      (still image; replace hero-poster.svg reference in index.html)
```
Recommended: 1920×1080 (or 1280×720 for smaller size), 8–15 s seamless loop, muted, no embedded text, darker/neutral area behind the hero copy, optimised bitrate (~2–4 Mbps). **The site is fully complete without the video** — the poster and a CSS backdrop render instead.

### Edit colours and typography
All design tokens are CSS custom properties at the top of **`css/style.css`** under `/* Design Tokens */` — colours, fonts, spacing, radius, shadows, container width, transitions, z-index. Change a value once and it updates site-wide.

### Update statistics and testimonials
- **Statistics** — in `index.html` and `about.html`, the "Statistics band" uses `data-count="…"` values (marked with a comment to replace with **verified** figures). The number animates up to that value.
- **Testimonials** — in `index.html`, the "Testimonials" section. Names are generic roles (no fake named endorsements); replace with verified quotes when available.

### Catalogue download (PDF)
Replace `assets/documents/decora-industries-catalogue.pdf` with your real catalogue (same filename). Until then, the "Download Catalogue" links 404 harmlessly and never break a page. See `assets/documents/README-catalogue.txt`.

---

## Shared hosting deployment (cPanel)

1. Confirm `index.html` is at the root of the website folder.
2. Test locally by opening `index.html`.
3. Compress the **contents** of the project folder into a ZIP file.
4. Log in to cPanel.
5. Open **File Manager**.
6. Navigate to `public_html`.
7. Remove or back up the existing default `index.html`, if present.
8. Upload the ZIP file.
9. Extract it inside `public_html`.
10. Ensure the final path is `public_html/index.html` — **not** `public_html/decora-industries/index.html` (unless you intend a subfolder install).
11. Confirm file permissions — Folders: `755`, Files: `644`.
12. Open your domain in a browser.
13. Test: navigation, hero fallback, forms, WhatsApp link, email link, images, mobile layout.
14. Clear the browser cache (or cPanel cache) after replacing assets.
15. Enable HTTPS through your host, then update the `canonical` / Open Graph URL placeholders (`https://www.example.com/`) in each page's `<head>`.

### Installing into a subdirectory
Because **all paths are relative**, you can install into e.g. `public_html/decora/` and the site keeps working — access it at `https://yourdomain.com/decora/`. Just update the canonical/OG URLs accordingly.

---

## Notes
- **No claims to verify:** copy avoids unsupported superlatives; statistics are clearly placeholder.
- **Accessibility:** skip link, keyboard-accessible menus/tabs/accordion/modal, focus trapping, `prefers-reduced-motion` support, semantic HTML.
- **Performance:** deferred scripts, lazy-loaded below-fold images, `preload="metadata"` on the video, poster-first on small screens / save-data, IntersectionObserver reveals.
- **`.htaccess`** is optional (caching, compression, security headers, custom 404). The site works without it.

© Decora Industries. Replace placeholder brand, contact and legal content before launch.
