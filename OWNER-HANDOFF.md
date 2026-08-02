# Presenting This Website to the Owner — Notes & Fact Sheet

This document explains where every piece of content came from, what still needs
the owner's input, and what to say when presenting the site.

## Where the content came from

Everything on the site is based on **publicly available information** about
Dogwood Plumbing LLC of Front Royal, VA. Nothing was invented about the
business itself.

| Fact on the site | Source |
|---|---|
| Family-operated, veteran-owned; "highest level of integrity and expertise"; 6+ years experience; all phases of residential plumbing | Company profile text on HomeAdvisor / Angi |
| Phone (540) 497-3174 · email dogwoodplumbingva@gmail.com | Public listings tied to the Facebook page |
| 5.0 rating on HomeAdvisor and Angi | HomeAdvisor & Angi profiles |
| 100% recommended on Facebook | Facebook page (facebook.com/Dogwoodplumbingllc) |
| "Trusted by more than 1,000 customers" · 24/7 availability | The company's existing site (dogwoodplumbva.com) |
| Hours Mon–Fri 9–5 · credit cards accepted | HomeAdvisor profile |
| "Fast estimates" wording | Owner's preference — note that the HomeAdvisor/Angi profiles advertise *free* estimates, so those listings should be updated to match, or they'll contradict the site |
| 10% military / veteran / first responder discount | HomeAdvisor / Angi profiles |
| Services: drain cleaning, toilet repair, copper repiping, residential plumbing | The company's existing site pages |
| Services: water heaters, leak repair, sump/sewage/septic pumps | Company service descriptions in public listings |
| "Patrick…" testimonial | HomeAdvisor review (public) |
| "Absolute pleasure to work with…" testimonial | Thumbtack review (public, lightly condensed) |
| "Why Dogwood" — state flower angle | The flowering dogwood is Virginia's state flower & tree (marketing angle we added — confirm the owner likes it) |

## Things the owner must confirm or provide

1. **Photos.** Facebook blocks automated photo downloads, so every image spot is
   a clearly-labeled placeholder. The owner has all these photos on their
   Facebook page already — they just need to be dropped in (see README).
   Priority order: (1) owner/family photo on the About page, (2) team/truck
   photo on the homepage, (3) job photos on the Services page.
2. **Names.** Public reviews mention **Patrick** (HomeAdvisor) and a
   review praising the plumber on Thumbtack. We deliberately did NOT put an
   owner name on the site until the owner confirms how they want to be
   introduced ("Owned by …" on the About page would be a great addition).
3. **License number.** The site says "Licensed & Insured" (standard for a VA
   plumbing contractor and consistent with their listings). Add the license
   number to the footer for maximum trust — it's a top trust signal.
4. **Service-area towns.** Front Royal + Warren County are confirmed. The
   nearby towns listed (Linden, Bentonville, Browntown, Riverton, Middletown,
   Strasburg) are reasonable neighbors clearly labeled "call to confirm" —
   the owner should confirm or edit the list.
5. **Business address.** The LLC's registered address (241 Cedar Top Lane) was
   deliberately left OFF the site — home-based service businesses generally
   shouldn't publish a home address. Service-area wording is used instead.
6. **Facebook recommendations.** Six recommendations exist on the Facebook
   page. Placeholder cards on the Reviews page are ready for them (get
   reviewers' OK before naming them).
7. **Quote form delivery.** The form currently opens the visitor's email app,
   pre-filled, addressed to the company Gmail — functional with zero setup.
   Connecting a free Formspree account makes it submit silently in-page
   (instructions in `js/main.js`).

## Design decisions worth mentioning in the pitch

- **Phone-first design.** Most plumbing customers are on a phone with an
  urgent problem. The number is clickable in the header, hero, every section,
  and a sticky bottom bar on mobile.
- **Dogwood blossom branding.** Custom logo drawn for the company — the
  dogwood is Virginia's state flower, which ties the name to local pride.
  It's an SVG, so it stays crisp at any size and can go on business cards too.
- **Trust signals everywhere** — veteran-owned badge, 5.0 ratings, fast
  estimates, the military discount — because reviews and credibility are the
  #1 driver for choosing a local plumber.
- **Real reviews only.** Every quote on the site is from an actual public
  review. No fabricated testimonials.
- **SEO-ready.** Every page has proper titles/descriptions, the homepage has
  Plumber schema markup (helps Google show hours/phone/ratings), plus a
  sitemap and robots.txt. Phase 2: split each service into its own page and
  set up a Google Business Profile for map-pack rankings.
- **No monthly cost.** Pure static site — hosts free on Netlify/GitHub Pages;
  the only cost is the domain they already own.
