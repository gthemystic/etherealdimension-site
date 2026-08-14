export type NavItem = {
  label: string;
  href: string;
};

export type ProductItem = {
  label: string;
  desc: string;
  href: string;
  enabled?: boolean;
};

export type SiteConfig = {
  navItems: NavItem[];
  products: ProductItem[];
  cta: NavItem;
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: NavItem;
    secondaryCta: NavItem;
  };
  flags: Record<string, boolean>;
};

export const defaultSiteConfig: SiteConfig = {
  navItems: [
    { label: "Work", href: "#work" },
    { label: "Hylios", href: "#hylios" },
    { label: "Ethereal Search", href: "#ethereal-search" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#cta" },
  ],
  products: [
    { label: "Hylios", desc: "AR + ML room scanner for iPhone", href: "#hylios" },
    { label: "Ethereal Search", desc: "Agentic RAG for engineering teams", href: "#ethereal-search" },
    { label: "TracePass", desc: "Supply-chain provenance, RAG-powered", href: "#tracepass" },
    { label: "GovSlack", desc: "Governed AI workspaces for agencies", href: "#govslack" },
  ],
  cta: { label: "Partner with us", href: "#cta" },
  hero: {
    eyebrow: "Frontier AI for the built environment · Austin, TX",
    title: "Intelligence that reads, remembers — and acts on the built world.",
    body: "We build agentic systems that search, reason, and orchestrate across engineering documents, city infrastructure, supply chains, and physical space.",
    primaryCta: { label: "See our work", href: "#work" },
    secondaryCta: { label: "Explore Ethereal Search →", href: "#ethereal-search" },
  },
  flags: { productsDropdown: false },
};

type VercelEnv = {
  key: string;
  value?: string;
  type?: string;
  target?: string[];
};

const projectId = process.env.ETHD_VERCEL_PROJECT_ID;
const teamId = process.env.ETHD_VERCEL_TEAM_ID;
const vercelToken = process.env.VERCEL_API_TOKEN;

function safeJson<T>(value: string | undefined): T | undefined {
  if (!value) return undefined;
  try {
    return JSON.parse(value) as T;
  } catch {
    return undefined;
  }
}

function envTargetMatches(env: VercelEnv) {
  const current = process.env.VERCEL_ENV || "production";
  return !env.target?.length || env.target.includes(current) || env.target.includes("production");
}

async function readVercelPlainEnv() {
  if (!projectId || !teamId || !vercelToken) return {} as Record<string, string>;

  const url = `https://api.vercel.com/v10/projects/${projectId}/env?teamId=${teamId}`;
  const response = await fetch(url, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${vercelToken}` },
  });

  if (!response.ok) return {} as Record<string, string>;

  const data = (await response.json()) as { envs?: VercelEnv[] };
  const values: Record<string, string> = {};
  for (const env of data.envs || []) {
    if (env.type !== "plain" || !env.key.startsWith("ETHD_") || !envTargetMatches(env)) continue;
    if (typeof env.value === "string") values[env.key] = env.value;
  }
  return values;
}

function mergeConfig(values: Record<string, string>): SiteConfig {
  const blob = safeJson<Partial<SiteConfig>>(values.ETHD_RUNTIME_CONFIG_JSON || process.env.ETHD_RUNTIME_CONFIG_JSON);
  const navItems = safeJson<NavItem[]>(values.ETHD_NAV_ITEMS_JSON || process.env.ETHD_NAV_ITEMS_JSON);
  const products = safeJson<ProductItem[]>(values.ETHD_PRODUCTS_JSON || process.env.ETHD_PRODUCTS_JSON);
  const flags = safeJson<Record<string, boolean>>(values.ETHD_FEATURE_FLAGS_JSON || process.env.ETHD_FEATURE_FLAGS_JSON);

  return {
    ...defaultSiteConfig,
    ...blob,
    navItems: navItems || blob?.navItems || defaultSiteConfig.navItems,
    products: (products || blob?.products || defaultSiteConfig.products).filter((item) => item.enabled !== false),
    cta: {
      ...defaultSiteConfig.cta,
      ...blob?.cta,
      label: values.ETHD_NAV_CTA_LABEL || process.env.ETHD_NAV_CTA_LABEL || blob?.cta?.label || defaultSiteConfig.cta.label,
      href: values.ETHD_NAV_CTA_HREF || process.env.ETHD_NAV_CTA_HREF || blob?.cta?.href || defaultSiteConfig.cta.href,
    },
    hero: {
      ...defaultSiteConfig.hero,
      ...blob?.hero,
      eyebrow: values.ETHD_HERO_EYEBROW || process.env.ETHD_HERO_EYEBROW || blob?.hero?.eyebrow || defaultSiteConfig.hero.eyebrow,
      title: values.ETHD_HERO_TITLE || process.env.ETHD_HERO_TITLE || blob?.hero?.title || defaultSiteConfig.hero.title,
      body: values.ETHD_HERO_BODY || process.env.ETHD_HERO_BODY || blob?.hero?.body || defaultSiteConfig.hero.body,
      primaryCta: {
        ...defaultSiteConfig.hero.primaryCta,
        ...blob?.hero?.primaryCta,
        label: values.ETHD_PRIMARY_CTA_LABEL || process.env.ETHD_PRIMARY_CTA_LABEL || blob?.hero?.primaryCta?.label || defaultSiteConfig.hero.primaryCta.label,
        href: values.ETHD_PRIMARY_CTA_HREF || process.env.ETHD_PRIMARY_CTA_HREF || blob?.hero?.primaryCta?.href || defaultSiteConfig.hero.primaryCta.href,
      },
      secondaryCta: {
        ...defaultSiteConfig.hero.secondaryCta,
        ...blob?.hero?.secondaryCta,
        label: values.ETHD_SECONDARY_CTA_LABEL || process.env.ETHD_SECONDARY_CTA_LABEL || blob?.hero?.secondaryCta?.label || defaultSiteConfig.hero.secondaryCta.label,
        href: values.ETHD_SECONDARY_CTA_HREF || process.env.ETHD_SECONDARY_CTA_HREF || blob?.hero?.secondaryCta?.href || defaultSiteConfig.hero.secondaryCta.href,
      },
    },
    flags: {
      ...defaultSiteConfig.flags,
      ...blob?.flags,
      ...flags,
    },
  };
}

export async function getSiteConfig(): Promise<SiteConfig> {
  const values = await readVercelPlainEnv();
  return mergeConfig(values);
}
