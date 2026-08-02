# Dogwood Plumbing LLC — Website

A complete, ready-to-launch website for **Dogwood Plumbing LLC** (Front Royal, VA) —
a family-operated, veteran-owned residential plumbing company.

Built as a fast, dependency-free static site: plain HTML, CSS, and a little
JavaScript. No frameworks, no build step, nothing to maintain. Open
`index.html` in a browser and it just works.

## Pages

| File            | Purpose |
|-----------------|---------|
| `index.html`    | Homepage — hero, trust stats, services grid, reviews, military discount, service area, FAQ |
| `services.html` | Detailed sections for all 8 services with anchor links (`#water-heaters`, `#drain-cleaning`, …) |
| `about.html`    | Family/veteran story, "Why Dogwood" (Virginia's state flower), values, credentials |
| `reviews.html`  | Ratings summary, verified testimonials, review-platform links |
| `contact.html`  | Quote request form + phone/email/hours/service area |

Plus: `css/styles.css`, `js/main.js`, `images/` (logo + favicon SVGs),
`robots.txt`, `sitemap.xml`.

## Before launch — the owner's checklist

See **OWNER-HANDOFF.md** for the full list. The short version:

1. **Photos** — every dashed-border box on the site is a labeled placeholder.
   Replace each with a real photo from the company Facebook page
   (facebook.com/Dogwoodplumbingllc). Save photos to `images/` and swap the
   placeholder `<div class="photo-ph">…</div>` for
   `<img src="images/your-photo.jpg" alt="describe the photo" style="border-radius:14px;">`.
2. **Facebook recommendations** — paste real customer recommendations into the
   placeholder cards on `reviews.html` (marked with an HTML comment).
3. **License number** — add the Virginia contractor license number to the
   footer once confirmed.
4. **Quote form** — currently opens a pre-filled email (works with no backend).
   To receive submissions directly, create a free [Formspree](https://formspree.io)
   form and follow the comment at the top of the form handler in `js/main.js`.

## Hosting

Any static host works, most are free:

- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the folder or connect
  this repo; free SSL and custom-domain support.
- **GitHub Pages** — Settings → Pages → deploy from branch.

The company already owns **dogwoodplumbva.com** (currently on Wix) — the domain
can be pointed at the new host, or the sitemap/robots URLs updated if a
different domain is used.

## Editing tips

- All colors live in CSS variables at the top of `css/styles.css`.
- The phone number appears in many places — search-and-replace
  `(540) 497-3174` and `+15404973174` together if it ever changes.
- Each service section in `services.html` is self-contained and can be split
  into its own page later for stronger local SEO (recommended phase 2).
