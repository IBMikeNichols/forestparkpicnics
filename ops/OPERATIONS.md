# Forest Park Picnics — Operations Guide

**Living document.** Updated nightly by Claude (Chief of Staff + CMO) during the 3 AM overnight review. Consolidated weekly on Sundays.

- **Last updated:** 2026-04-20
- **Version:** 1.0
- **Maintainer:** Claude
- **Source of truth:** Google Doc — Drive `Operations` subfolder
- **Mirror:** `ops/OPERATIONS.md` in the GitHub repo (not publicly served; Netlify 404s `/ops/*`)

---

## North Star

Reach a **rolling 2-month sold-out** period → add 2 baskets → repeat until we hit the **12-basket ceiling**. Currently at 6 baskets. Every decision routes back to this.

**Non-negotiables driving strategy:**
- Keep money in St. Louis. No paid Google/Meta ads. Budget under $500/mo.
- Growth levers we use: Instagram, TikTok, Google/SEO, word of mouth, affiliates, restaurant cross-promotion, Forest Park Forever partnership.

---

## Contents

1. [Change Log](#change-log)
2. [At a Glance](#at-a-glance)
3. [Daily Runbook (Wed–Sat)](#daily-runbook-wed-sat)
4. [Weekly Cadence](#weekly-cadence)
5. [Key SOPs](#key-sops)
6. [Systems & Resources](#systems--resources)
7. [Brand Rules](#brand-rules)
8. [How This Doc Is Maintained](#how-this-doc-is-maintained)

---

## Change Log

_Most recent entries at the top. Overnight review appends here. Sunday consolidation folds entries into the body and archives them below the cut-line._

### 2026-04-20
- v1.0 created. Initial structure based on existing state: 6 baskets, 1 confirmed restaurant partner (Havana's), 15 prospects in pipeline, Sintra 8-helper cadence active, site on GitHub→Netlify→Cloudflare, SSH-only deploy.

<!-- === CONSOLIDATED (archived) === -->

---

## At a Glance

| | |
|---|---|
| **What** | Curated 2-hour private picnic experience in Forest Park, STL |
| **Parent brand** | TourCWE — 4303 McPherson Ave, STL 63108 |
| **Lunch** | Art Hill · Wed–Sat · 11:30 AM · **April–October** |
| **Dinner** | Pagoda Lake · Wed–Sat · 5:30 PM · **May–September** |
| **Inventory** | 6 baskets (target: 12) |
| **Price point** | $100+ per booking |
| **Civic commitment** | $5/booking → Forest Park Forever |
| **Cancellation** | Free up to 24 hr prior |
| **Dietary policy** | Variety included. No specific dietary accommodations. |
| **Entrée box spec** | 5" × 7.5" × 3" |
| **Taglines** | "The Easiest Date Night in St. Louis." / "Life is Short • Have a Picnic." |

---

## Daily Runbook (Wed–Sat)

**Operating days only.** Sun–Tue are prep/admin days; no service runbook.

### 7:00 AM · Cowork daily brief
- Mac mini auto-sends daily brief to `tourcwe@gmail.com`.
- **Known issue:** Brief occasionally saves as draft instead of sending. Check Drafts folder; send manually if needed. (Root cause unresolved — tracked for fix.)

### 8:00–9:00 AM CT · Weatherman go/no-go
- **GO criteria:** Today's forecast is **65–95°F** AND **precipitation probability <50%**.
- **If GO:** Post Theo weatherman image + caption from the 20-caption rotating bank to Instagram.
  - Image URL: `https://forestparkpicnics.com/media/theo-weatherman.png`
  - Soshie generates 1–3 caption options → Mike approves one → Soshie schedules.
- **If NO-GO:** Skip the weatherman post. No substitute post required.

### Pre-service
- **Lunch (by 9:30 AM):** Verify today's Bokun bookings (lunch experience ID `1036656`).
- **Dinner (by 3:30 PM):** Verify today's Bokun bookings (dinner experience ID `1152332`).
- Confirm restaurant partner pickups for today's rotation.
- Basket prep: wicker basket, 3-course meal boxed, ice/drinks, utensils, napkins, blanket.

### Service window (2 hours)
- Handoff at location (Art Hill statue area for lunch, Pagoda Lake for dinner).
- Pickup at +2 hr.
- Note any issues (weather, partner delay, guest complaint) for post-service.

### Post-service
- Log issues in Task Queue sheet (column H: Notes).
- If any guest friction: draft follow-up via Cassie template (see SOP 4.2) — Mike reviews before send.
- Send review request to satisfied guests (template TBD — Q2 priority).

---

## Weekly Cadence

### Sintra helper schedule

| Helper | Role | Cadence | Notes |
|---|---|---|---|
| Seomi | SEO | Daily | SEO sprint sheet tracks tasks |
| Penn | Copywriting | Daily | Drafts for site, email, social |
| Commet | Web Dev | Daily | Site changes via proposal → Claude approval → deploy |
| Soshie | Social Media | Daily | **Narrowed scope:** Theo image creation + IG scheduling only |
| Emmie | Email Marketing | Tue, Thu | Campaign strategy — Mike hands-on |
| Cassie | Customer Support | Mon, Thu | Owns guest templates |
| Milli | Affiliate Development | Mon | — |
| Buddy | Business Development | Wed | — |
| Scouty | Talent | **Benched** | — |

### Claude cadence

- **Daily 3:00 AM · Overnight review** — Scan Drive root + all subfolders for new/changed proposals and strategic docs. Summarize deltas into the [Change Log](#change-log). Flag anything needing Mike's decision.
- **Sunday · Weekly consolidation** — Fold the week's Change Log entries into the body of this guide. Restructure affected sections. Archive consolidated entries below the cut-line.
- **Monthly · Channel review** — IG, TikTok, SEO, word-of-mouth, affiliate performance. Surface what's working vs. what to kill.

---

## Key SOPs

### 4.1 · Sintra proposal review
1. Helper writes a proposal to Sintra Brain AI, titled `[PROPOSAL] YYYY-MM-DD — [Helper] — [Short Title]`.
2. Claude reviews via Chrome at `app.sintra.ai/brain` (logged in as `tourcwe@gmail.com`, owner role).
3. **Approved:** Copy into Drive `Proposals` folder (`1DeXQRAA0tub3ANotXyvceKMU4x4rvC8A`).
4. **All reviewed (approved, deferred, rejected):** Move to `Archive` subfolder (`1eztNmUrVM-lDhsoDUgoMNdF0rN6BMF55`).
5. **Drive is winners-only** — only approved items survive in Proposals; rest go to Archive or get dropped.

### 4.2 · Guest cancellation + goodwill coupon
- Voice: warm, personal, founder tone. Placeholders: `[GUEST NAME]`, `[COUPON CODE]`.
- Structure: two options (rebook or full refund) + goodwill coupon code below both, framed as a separate gesture.
- Coupon applies to FPP *or* TourCWE walking tour.
- Template owner: **Cassie**. Until Cassie is active on this, Claude drafts → Mike reviews → Mike sends.

### 4.3 · Restaurant partner outreach
**Two tracks, run in parallel.**

**Track A — Confirmed partners** (MailerLite group `183476866833712911`)
- Current: Havana's Cuisine (contact: Tamara Landeiro).
- Cadence: season announcement → co-promo asks → relationship nurture.

**Track B — Prospects** (MailerLite group `183482206913562104`)
- Cold pitch → follow-up #1 (7 days) → follow-up #2 (14 days).
- Placeholder email format for unpublished contacts: `placeholder.[restaurantname]@forestparkpicnics.com`, status `unconfirmed`.
- **Priority single relationship: Kevin Brennan** (owns Brennan's, Maryland House, The Noble Crown, Marvel S. Fox). One yes from Kevin = 4 potential rotation slots.

**Mike owns execution.** Claude drafts; Mike sends. Email marketing is a hands-on initiative.

### 4.4 · Site deploy
- Stack: GitHub → Netlify → Cloudflare. Auto-deploy ~4 sec after push.
- Repo: `github.com/racon-tours/forestparkpicnics` · Remote: `https://github.com/racon-tours/forestparkpicnics.git`
- **Auth via `gh` CLI (HTTPS).** SSH deploy key `~/.ssh/fpp_deploy` remains on the repo as a fallback.
- Local working copy: `~/dev/forestparkpicnics`.
- Claude pushes autonomously via osascript from the container.
- Before any CSS/framework swap (e.g., Tailwind CDN → local), test on a branch. Previous attempt broke the site; revert reflex is correct.

### 4.5 · Media pipeline
- New assets go into `/media/` in the repo → push → live at `https://forestparkpicnics.com/media/[filename]`.
- **All Theo and brand images are passed by URL in every context — never as file attachments.**
- Current Theo image library (all at `forestparkpicnics.com/media/`):
  - `theo-weatherman.png`, `theo-weatherman-character.png`
  - `theo-beckoning.png`, `theo-romantic.png`, `theo-excited.png`
  - `theo-tourist.png`, `theo-partner.png`, `theo-picnic.png`
- Canonical basket asset: red-gingham-lined wicker picnic basket (`FPP_Basket_Asset.png`). Existing project copy has a green checkmark overlay — source a clean version for future uses.

### 4.6 · Weatherman post decision
- See the Daily Runbook 8–9 AM block for the decision flow.
- Caption source: 20-caption rotating bank. Always booking-driven (CTA to book).
- Never post without Mike's one-version approval.

### 4.7 · Drive folder discipline
- **Drive root** is the central hub. Subfolders created as needed.
- **Proposals** folder = winners-only archive. Anything not approved by Claude doesn't belong here.
- **Archive** subfolder under Proposals = everything reviewed, regardless of outcome, for audit trail.
- Drive MCP cannot *move* files — any move is a manual drag.
- **Operations** subfolder (this doc lives here): source of truth for the live Google Doc.

---

## Systems & Resources

### Drive
- **Root:** https://drive.google.com/drive/folders/12rhZNg7yXBMnrZxIZIYHEMnHKZer1tTi
- **Proposals:** `1DeXQRAA0tub3ANotXyvceKMU4x4rvC8A`
- **Archive (under Proposals):** `1eztNmUrVM-lDhsoDUgoMNdF0rN6BMF55`
- **Operations:** `1sBVrjkEb1POZwieqv7NgrJFm55uzyLys`

### MailerLite
- **Website Signups group:** `183608949676705180`
- **Restaurant Partners group:** `183476866833712911`
- **Restaurant Prospects group:** `183482206913562104`
- **Guest Signup form:** `183476840063567514`

### Bokun
- **Booking channel UUID:** `2e3a19f9-d8dc-489d-bf79-c59ea4fcbbe3`
- **Lunch experience ID:** `1036656`
- **Dinner experience ID:** `1152332`
- Public API does *not* support promo code or gift card creation — apply existing codes only. Promo/gift card setup via Chrome browser automation is on the horizon.

### Accounts
- `tourcwe@gmail.com` — primary; forwards to iCloud. Logged into Sintra (owner), Cowork.
- `forestparkpicnics@gmail.com` — operational/Sintra inbox.
- `mike@tourcwe.com` — iCloud / personal primary.

### Task sheets
- **FPP Task Queue:** https://docs.google.com/spreadsheets/d/1vQjY5axFuph5Sb5kvP6OU0hgkE9hiVv486iOvie9JOY
  - Columns: Task # (A), Date Added (B), Skillset (C), Title (D), Brief (E), Status (F), Date Completed (G), Notes (H).
  - "FPP Daily Ops Trigger" Apps Script reads PENDING rows, embeds task content in emails to `forestparkpicnics@gmail.com`. Completion reports → `tourcwe@gmail.com`.
- **SEO sprint sheet:** https://docs.google.com/spreadsheets/d/1hT1oNOQlo2PO-puwIloWDTGm4cMKZ80T88QaSTMi7bM/edit

### Cowork
- Runs on always-on Mac mini.
- Sends 7 AM daily brief to `tourcwe@gmail.com`.
- Draft-not-sent issue flagged; manual workaround until resolved.

### Sintra
- `app.sintra.ai` · Logged in as `tourcwe@gmail.com` (owner).
- Cannot read Google Docs — all task instructions must be self-contained in email body text.
- Cannot write to Drive without manual approval gates — Brain AI documents are the correct proposal format.

---

## Brand Rules

**Voice**
- Warm, romantic, confident with light wit. Punchy and direct. Never stiff or corporate.
- Key phrases in the kit: "Zero hassle. Pure romance. Easiest. Date. Ever."
- Civic angle woven in: sustainability + Forest Park Forever donation.

**Hard rules — never violate:**
1. **No gendered language.** All copy uses they/them, "your person," "your team," "someone who deserves a break." Never "boyfriend/girlfriend," "husband/wife," "ladies/gentlemen," etc.
2. **No AI photorealistic images.** Theo, illustrated assets, and real photography only.
3. **No competitor research or suggestions.** We compete by being *us*, better — not by reacting to anyone else.
4. **Original site copy is preserved verbatim** unless Mike explicitly approves a change.
5. **Theo is in development.** Do not reference Theo as an active/public-facing character until Mike signals otherwise.
6. **Images are passed by URL**, never as attachments, from `forestparkpicnics.com/media/`.

**Brand colors** — Steel Blue `#628395` · Warm Straw `#D6CE93` · Cream `#EFEBCE` · Near Black `#1C1C1C` · Forest Green `#607466`

---

## How This Doc Is Maintained

**Two mirrors, one source of truth.**
- **Source of truth:** Google Doc in Drive `Operations` subfolder. Claude edits directly.
- **Mirror:** `ops/OPERATIONS.md` in the GitHub repo. Netlify returns 404 for `/ops/*` so this is not publicly readable, but the raw file is still in the repo — treat as semi-private. **Do not commit credentials, tokens, or PII here.**

**Update rhythm:**
- **Daily (3 AM):** Overnight review appends Change Log entries for any new/changed Drive content.
- **Sunday:** Weekly consolidation — Claude rewrites affected sections, archives consolidated entries.
- **On-demand:** Mike requests a structural change → Claude edits both mirrors in the same session.

**Parity:** Any substantive edit lands in both the Google Doc and the GitHub mirror. Claude does not let the mirrors drift — if a session ends mid-edit on one, the other gets caught up at the start of the next session.
