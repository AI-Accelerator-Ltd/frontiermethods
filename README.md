# ARIA Cohort 2 — Bid Companion Microsite

A Next.js microsite that accompanies AI Accelerator's bid for the ARIA Activation Partners Cohort 2 call. Designed for evaluators who want to step into the bid in more detail — part sales pitch, part detailed information, fully interactive.

**Working title of the proposed activity:** The UK Technique Library for AI-Accelerated Science.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (AIA brand tokens)
- lucide-react icons
- Static-friendly — deploys to Vercel as zero-config

## Run locally

```bash
npm install
npm run dev
```

Opens at <http://localhost:3000>.

## Deploy to Vercel

```bash
# from this directory
npx vercel
```

Or push to a GitHub repo and connect via the Vercel dashboard. Suggested production domain: `aria.aiaccelerator.uk`.

## Pages

```
/                       Home — reviewer roadmap + the seven critique vectors
/why-aria               Opportunity, AI capability gap, political moment
/solution               Platform overview (5 things, 8 components)
/methodology            Interactive methodology walkthrough
/platform               Interactive platform demo
/programme              3-year roadmap, Year 1 month-by-month
/team                   AIA core team + Mike spotlight
/consortium             4 partners + governance diagram
/evidence               14 seed use cases + client track record
/programme-directors    3 named PD partnerships
/governance             Highest Tide, IP, conflicts
/open-source            Skills release roadmap
/cost                   Phase-gated commercials + unit economics
/risks                  Named risks + mitigations
/faq                    Reviewer questions answered
/documents              Downloads library
```

## Brand

- Gable Green `#1B2F3C` (primary)
- Bright Turquoise `#00FFBC` (callouts only — never as text on light)
- Accessible Turquoise `#007A5E` (text on light surfaces, WCAG AA)
- Dodger Blue `#00B1FF` (accents)
- Cream `#F7F3EB` / Paper `#FCFAF5` (light surfaces)

UK English throughout.
