// ============================================================
// PORTFOLIO — TYPE DEFINITIONS
// All shared types used across components and pages
// ============================================================

export type NavLink = {
    label: string;
    href: string;
};

// ─── Experience ───────────────────────────────────────────────
export type Experience = {
    id: number;
    role: string;
    company: string;
    date: string;
    description: string;
    tech: string[];
};

// ─── Project ──────────────────────────────────────────────────
export type ProjectCategory =
    | "All"
    | "Web App"
    | "Mobile"
    | "Dashboard"
    | "Fintech"
    | "AI"
    | "E-Commerce"
    | "Platform"
    | "EdTech";

export type Project = {
    id: number;
    slug: string;           // used in /projects/[slug]
    title: string;
    tagline: string;        // short one-liner shown on cards
    category: ProjectCategory;
    year: string;
    coverImage: string;     // path relative to /public
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
    // Case study fields (shown on /projects/[slug])
    overview: string;
    challenge: string;
    solution: string;
    outcome: string;
    images?: string[];      // additional screenshots
};

// ─── Skill ────────────────────────────────────────────────────
export type SkillCategory =
    | "Frontend"
    | "Backend"
    | "Mobile"
    | "Database"
    | "Tools & DevOps";

export type Skill = {
    name: string;
    category: SkillCategory;
    iconUrl?: string;       // optional devicon URL
};

// ─── Education ────────────────────────────────────────────────
export type Education = {
    id: number;
    degree: string;
    institution: string;
    period: string;
    detail?: string;        // grade, honours, etc.
};

// ─── Testimonial ──────────────────────────────────────────────
export type Testimonial = {
    id: number;
    quote: string;
    name: string;
    title: string;
    avatarUrl?: string;
};

// ─── Stat (hero counter row) ──────────────────────────────────
export type Stat = {
    value: string;
    label: string;
};

// ─── Social Link ──────────────────────────────────────────────
export type SocialLink = {
    platform: "GitHub" | "LinkedIn" | "Twitter" | "Email";
    href: string;
};
