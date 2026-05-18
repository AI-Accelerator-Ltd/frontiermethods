export type NavItem = {
  href: string;
  label: string;
  short?: string;
  description?: string;
};

// Public Frontier Methods brand nav
export const PUBLIC_NAV: NavItem[] = [
  { href: "/", label: "Frontier Methods", short: "Home" },
  { href: "/methodology", label: "The Methods", short: "Methods" },
  { href: "/platform", label: "Platform", short: "Platform" },
  { href: "/skills", label: "Skills", short: "Skills" },
  { href: "/team", label: "Team", short: "Team" },
  { href: "/about", label: "About", short: "About" },
  { href: "/insights/launch", label: "Insights", short: "Insights" },
  { href: "/contact", label: "Contact", short: "Contact" },
];

// ARIA bid companion nav. Mixed paths: legacy bid pages stay at root paths,
// new bid pages live under /aria/*. All are noindexed.
export const ARIA_NAV: NavItem[] = [
  { href: "/aria", label: "Bid overview" },
  { href: "/why-aria", label: "Why ARIA, why now" },
  { href: "/solution", label: "The solution" },
  { href: "/programme", label: "The programme" },
  { href: "/consortium", label: "Consortium" },
  { href: "/aria/evidence", label: "Evidence" },
  { href: "/aria/programme-directors", label: "Programme Directors" },
  { href: "/aria/governance", label: "Governance" },
  { href: "/aria/open-source", label: "Open-source commitment" },
  { href: "/aria/cost", label: "Cost & commercials" },
  { href: "/aria/risks", label: "Risks" },
  { href: "/aria/faq", label: "Reviewer FAQ" },
  { href: "/aria/documents", label: "Documents" },
];

// Paths that count as "ARIA zone" for header/footer detection.
export const ARIA_ZONE_PATHS = [
  "/aria",
  "/why-aria",
  "/solution",
  "/programme",
  "/consortium",
];

// Legacy export — some pages may still reference these. Public + bid combined.
export const PRIMARY_NAV: NavItem[] = PUBLIC_NAV;
export const SECONDARY_NAV: NavItem[] = ARIA_NAV;

export const SITE = {
  name: "Frontier Methods",
  domain: "frontiermethods.com",
  title: "Frontier Methods",
  subtitle: "AI methods for the people building the next frontier of science",
  tagline: "Open-source AI capability for UK frontier R&D",
  // For the ARIA bid context
  bidWorkingTitle: "Frontier Methods · the UK Technique Library for AI-Accelerated Science",
  bidLead: "Mike Chatterton, AI Accelerator",
  ask: "£10m / 3 years · phase-gated",
  yearOneAsk: "£3m Year 1",
  deadline: "21 May 2026, 14:00 BST",
  shortlist: "8 July 2026",
  decision: "12 August 2026",
  contractStart: "1 September 2026",
  email: "hello@frontiermethods.com",
  founderEmail: "mike@aiaccelerator.uk",
  github: "github.com/AI-Accelerator-Ltd",
  githubRepo: "github.com/AI-Accelerator-Ltd/frontiermethods",
  githubSkillRepo: "github.com/AI-Accelerator-Ltd/peer-review-pre-check",
};
