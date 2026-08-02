# Presenting This Website to the Owner — Notes & Fact Sheet

This document explains where every piece of content came from, what still needs
the owner's input, and what to say when presenting the site.

## Where the content came from

Everything on the site is based on **publicly available information** about
Dogwood Plumbing LLC of Front Royal, VA. Nothing was invented about the
business itself.

> **Note on sources (updated at the owner's request):** HomeAdvisor, Angi, and
> Thumbtack are no longer active for this company, so all references to them —
> the 5.0 ratings, the platform badges, the review links, and the two
> testimonials taken from those sites — have been **removed from the site**.
> Reviews should now come from the Google Business Profile, with Facebook as a
> secondary source. Several remaining facts below were *originally* sourced
> from those now-inactive listings; they are flagged so the owner can confirm
> they are still accurate.

| Fact on the site | Source |
|---|---|
| Family-operated, veteran-owned; "highest level of integrity and expertise"; 6+ years experience; all phases of residential plumbing | Originally from the HomeAdvisor/Angi profile text — **confirm still accurate** |
| Phone (540) 497-3174 · email dogwoodplumbingva@gmail.com | Public listings tied to the Facebook page |
| 100% recommended on Facebook | Facebook page (facebook.com/Dogwoodplumbingllc) |
| 4.9-star Google rating | Reported by the owner from the Google Business Profile. Google blocks automated access, so this was not independently verified — **re-check before launch**, and add the review count next to it if the profile shows one |
| "Hundreds of customers" · 24/7 availability | 24/7 availability is from the company's existing site (dogwoodplumbva.com), which also claimed "trusted by more than 1,000 customers." The owner revised that figure down to hundreds, and the site now says hundreds. **The old site still says 1,000+ — update it to match.** |
| Hours Mon–Fri 9–5 · credit cards accepted | Originally from the HomeAdvisor profile — **confirm still accurate** |
| "Fast estimates" wording | Owner's preference |
| 10% military / veteran / first responder discount | Originally from the HomeAdvisor/Angi profiles — **confirm still offered** |
| Services: drain cleaning, toilet repair, residential plumbing | The company's existing site pages. (Copper repiping was listed there too, but the owner confirmed it is no longer offered, so it has been removed from the site.) |
| Services: water heaters, leak repair, sump/sewage/septic pumps | Company service descriptions in public listings |
| "Why Dogwood" — state flower angle | The flowering dogwood is Virginia's state flower & tree (marketing angle we added — confirm the owner likes it) |

## Things the owner must confirm or provide

1. **Photos.** Facebook blocks automated photo downloads, so every image spot is
   a clearly-labeled placeholder. The owner has all these photos on their
   Facebook page already — they just need to be dropped in (see README).
   Priority order: (1) owner/family photo on the About page, (2) team/truck
   photo on the homepage, (3) job photos on the Services page.
2. **Names.** We deliberately did NOT put an owner name on the site until the
   owner confirms how they want to be introduced ("Owned by …" on the About
   page would be a great addition).
2b. **Reviews — the biggest open item.** With the HomeAdvisor/Angi/Thumbtack
   content removed, the only verifiable social proof left on the site is the
   Facebook "100% recommended" line. The Reviews page and the homepage review
   section now hold clearly-marked placeholder cards. To fill them in:
   paste real reviews from the **Google Business Profile** (preferred) or
   Facebook, and add the Google star rating and review count to the placeholder
   stat on the Reviews page. Also drop the Google review link into the
   "Review us on Google" button (currently `href="#"`).
3. ~~**License number.**~~ **DONE** — Virginia License **#2705193552**, confirmed
   by the owner, now appears in the footer of all five pages, in the About page
   credentials list, and in the homepage structured data.

   *(Original note kept for context:)* The site says "Licensed & Insured" (standard for a VA
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
