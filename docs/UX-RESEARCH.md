# UOLV2 — UX Research Brief

A persona-led analysis of the typical organic-eCommerce shopper, used to inform design and content decisions.

> Synthesis brief, not field research. Personas are composed from publicly available category research on natural-product eCommerce. When real user data is collected, run `scripts/persona_generator.py` against it and replace this doc.

---

## Persona 1 · The Conscious Stocker

**Background.** 32–45 yr old urban professional. Buys for self and household. Already eats organic where convenient and has tried subscription boxes before.

**Goals.** Stock the pantry without spending Saturday at three different stores. Trust that "organic" is real, not marketing.

**Pain points.** Suspicious of label claims. Hates rebuying after running out. Skeptical of carbon-and-glass-bottle gestures unless they tally up.

**Top tasks on first visit.**
1. Skim the catalogue to gauge breadth — does the site cover *enough* to replace one of their existing trips?
2. Read provenance and certification on 1–2 specific items they trust.
3. Check delivery cost and threshold before committing to a basket.

**Design implications.**
- Free-shipping progress bar in the cart drawer is high leverage — answers their #3 question before they ask it.
- Producer block on the PDP is the credibility lever. Without it, the rest reads as marketing.
- Subscribe-and-save is a fit, but only after a successful first order — don't lead with it.

---

## Persona 2 · The Specific-Need Buyer

**Background.** 28–55 yr old, comes via a Google search like *"hydrolysed marine collagen vs gelatin"* or *"non-aluminium deodorant brand"*.

**Goals.** Compare 2–3 specific products on ingredient quality, sourcing, and price-per-gram. Make the right choice, not the cheapest.

**Pain points.** Price isn't comparable across pack sizes. Most sites bury ingredients behind a tab. Reviews are generic and unhelpful.

**Top tasks on first visit.**
1. Open the PDP, scan: ingredients, certification, country of origin, weight.
2. Cross-check reviews — looking specifically for anyone with a comparable health context.
3. Decide whether to leave for a competitor.

**Design implications.**
- Per-unit pricing ("$0.21 / g") would meaningfully differentiate UOLV2. Not yet in the schema.
- Ingredient panel as a top-level fact, not behind an accordion. Currently the PDP buries it inside "About this product".
- First-party reviews with a structured field (e.g. "what condition / use case did you buy this for") so this persona can find a similar buyer's view.

---

## Persona 3 · The Gift Buyer

**Background.** 24–60 yr old, infrequent visitor. Looking for a thoughtful, photogenic gift in the $30–80 range.

**Goals.** Find something genuinely nice, packaged well, that they can ship direct or pick up at the physical market.

**Pain points.** Doesn't know the brand. Has 8 minutes. Anxious that the wrapping will look like an Amazon padded mailer.

**Top tasks on first visit.**
1. See "gift sets" or curated bundles on the home page.
2. Confirm packaging looks giftable (need a photo of it).
3. Check if there's a gift note option at checkout.

**Design implications.**
- No bundles in the catalogue today — should add a "Gift sets" category.
- Lifestyle photography missing — every product shows the SKU shot only. Need one "in context" image per gift-friendly product.
- Gift note + gift wrap toggle in checkout — currently absent.

---

## Cross-persona journey friction (UOLV2 today)

| Step | What works | What doesn't |
|---|---|---|
| Land on home | Hero is clear, category tiles obvious | No social proof above the fold; no "as seen in" or rating count |
| Browse PLP | Filtering + sort work | No persistent sort indicator on cards (no badge for "best seller", "new this week") |
| Open PDP | Producer block, facts table, accordions are good | **Single image** — kills perceived quality. Ingredients hidden in accordion. No per-unit price |
| Add to bag | Drawer opens cleanly, free-shipping bar is excellent | No "frequently bought with" upsell |
| Checkout | One-page, clean | No gift note option; no order-status-by-WhatsApp opt-in |
| Thanks | Order summary good | No "track this order" or "share with a friend / referral" hook |

---

## Top 5 recommended next actions (impact ÷ effort)

1. **Expand each product gallery to 3 images** (one product shot + one detail + one lifestyle). Helps Personas 1 and 3 directly. *(In flight.)*
2. **Promote ingredients out of the accordion** to the right-rail fact stack. Direct win for Persona 2.
3. **Per-unit pricing** on product cards and PDP. Schema change: add `unitPrice` and `unit` fields.
4. **Bundle / gift-set category** with 3–5 curated combinations ($30–80). Unlocks Persona 3.
5. **First-party reviews** with a structured "what did you buy this for" field. Conversion lever for Persona 2; also feeds `AggregateRating` schema for SEO.

All slot into the current scaffold without architectural changes.
