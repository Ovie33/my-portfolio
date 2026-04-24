// ============================================================
// PORTFOLIO — DATA FILE
// Single source of truth for all portfolio content.
// Edit this file to update the entire site.
// ============================================================

import type {
    NavLink,
    Experience,
    Project,
    Skill,
    Education,
    Testimonial,
    Stat,
    SocialLink,
} from "./types";

// ─── Navigation ───────────────────────────────────────────────
export const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
];

// ─── Hero / Meta ──────────────────────────────────────────────
export const siteOwner = {
    name: "OVIEMO OBUKOHWO",
    shortName: "Oviemo",
    initials: "OO",
    title: "Full-Stack Software Engineer",
    tagline: "Full-Stack Engineer · 6+ Years · Nigeria & Remote",
    bio: "I build scalable, production-ready applications with clean architecture and a sharp focus on performance, automation, and great UX. Based in Nigeria, working globally.",
    email: "obukohwooviemo33@gmail.com",
    cvUrl: "/cv.pdf",
    available: true,
    profileImage: "/profile.jpeg",
};

export const stats: Stat[] = [
    { value: "6+", label: "Years Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "5+", label: "Developers Trained" },
    { value: "80%", label: "Reporting Automated" },
];

export const socialLinks: SocialLink[] = [
    { platform: "GitHub", href: "https://github.com/Ovie33" },
    { platform: "LinkedIn", href: "https://linkedin.com/in/oviemo-obukohwo-00866a228" },
    { platform: "Email", href: "mailto:obukohwooviemo33@gmail.com" },
];

// ─── Experience ───────────────────────────────────────────────
export const experiences: Experience[] = [
    {
        id: 1,
        role: "Full-Stack Engineer",
        company: "Calarax",
        date: "Jan 2025 – Nov 2025",
        description:
            "Built and deployed a modern SEO analytics dashboard using React, Node.js, TypeScript, and Python, delivering real-time insights to 200+ active users. Integrated OpenAI GPT APIs for automated reporting, reducing manual analytics work by 80%.",
        tech: ["React", "Node.js", "TypeScript", "Python", "OpenAI API"],
    },
    {
        id: 2,
        role: "Software Associate / App Dev Trainer",
        company: "Harvoxx Tech Hub",
        date: "Jun 2024 – Dec 2024",
        description:
            "Contributed to the development of a fintech mobile application (FinazB) using React Native, Node.js, and REST APIs. Trained 100+ aspiring developers in React Native, JavaScript fundamentals, and UI/UX best practices.",
        tech: ["React Native", "Node.js", "SupaBase", "REST APIs", "Zustand"],
    },
    {
        id: 3,
        role: "Freelance Full-Stack Developer",
        company: "Self-Employed",
        date: "May 2021 – Present",
        description:
            "Designed and delivered 20+ full-stack applications using React, Node.js, Python, Express.js, Firebase, and PostgreSQL. Built dashboards, CMS platforms, and data-driven applications while applying UX best practices to increase user interaction by 35%.",
        tech: ["React", "Express.js", "Firebase", "PostgreSQL"],
    },
    {
        id: 4,
        role: "Full Stack Developer ( UI/UX focused)",
        company: "Rolom Technologies",
        date: "May 2020 – 2024",
        description:
            "Designed and delivered 20+ full-stack applications using React, Node.js, Python, Express.js, Firebase, and PostgreSQL. Built dashboards, CMS platforms, and data-driven applications while applying UX best practices to increase user interaction by 35%.",
        tech: ["React", "Express.js", "Firebase", "PostgreSQL, Figma"],
    },
];

// ─── Projects ─────────────────────────────────────────────────
export const projects: Project[] = [
    {
        id: 1,
        slug: "seo-analytics-dashboard",
        title: "SEO Analytics Dashboard",
        tagline: "Real-time SEO insights powered by AI reporting",
        category: "Dashboard",
        year: "2025",
        coverImage: "/projects/seo-dashboard.png",
        tech: ["React", "Node.js", "TypeScript", "OpenAI API"],
        liveUrl: "https://calarax.com",
        overview:
            "A production-grade SEO analytics platform delivering real-time insights to 200+ active users, with AI-generated weekly reports that cut manual analytics work by 80%.",
        challenge:
            "The client needed to replace a brittle spreadsheet workflow with a live dashboard that could ingest data from multiple sources and surface actionable insights without requiring manual analysis.",
        solution:
            "Built a React + Node.js dashboard backed by a Python data pipeline. Integrated OpenAI GPT-4 to auto-generate narrative reports from raw metrics. Deployed on AWS with a PostgreSQL data warehouse.",
        outcome:
            "200+ active users onboarded within 3 months. Manual reporting time reduced from 4 hours/week to under 30 minutes. Client renewed contract for a second phase.",
        images: ["/projects/seo-dashboard-2.png"],
    },
    {
        id: 2,
        slug: "finazb-mobile-app",
        title: "FinazB",
        tagline: "Fintech mobile app for peer-to-peer payments and budgeting",
        category: "Fintech",
        year: "2024",
        coverImage: "",
        tech: ["React Native", "Node.js", "Supabase", "REST APIs", "Zustand"],
        overview:
            "FinazB is a cross-platform fintech mobile application built to serve underbanked users in Nigeria. It enables peer-to-peer payments, real-time budget tracking, and detailed spending analytics — all from a lightweight, offline-capable app optimised for low-end Android devices.",
        challenge:
            "The target users relied on entry-level Android hardware with inconsistent internet connectivity. The app needed to handle real-time transaction data reliably while remaining fast, accessible, and easy to use for people with limited smartphone experience.",
        solution:
            "Built with React Native and Zustand for lightweight global state management. Optimised list rendering using FlashList and implemented an offline-first data sync layer backed by Supabase. A clean, high-contrast UI was designed from scratch to maximise usability on small screens.",
        outcome:
            "Launched on Android with strong early retention figures. The app consistently maintained 60fps performance on mid-range devices. The project also underpinned a training programme that mentored 100+ student developers in React Native fundamentals.",
    },
    {
        id: 3,
        slug: "shopfeedme",
        title: "ShopFeedMe",
        tagline: "Full-featured e-commerce platform built with Next.js",
        category: "E-Commerce",
        year: "2024",
        coverImage: "/projects/shopfeedme.png",
        tech: ["Next.js", "Tailwind CSS", "TypeScript", "REST APIs"],
        liveUrl: "https://www.shopfeedme.com",
        overview:
            "ShopFeedMe is a modern, production-ready e-commerce platform that delivers a seamless shopping experience across devices. Built with Next.js and Tailwind CSS, the site combines high performance with a polished, accessible UI.",
        challenge:
            "The platform needed to feel fast and trustworthy at every touchpoint — from product discovery to checkout — while remaining easy to maintain and extend across a growing product catalogue.",
        solution:
            "Contributed as part of the frontend and UI/UX team, building reusable component systems in Next.js with Tailwind CSS. Focused on responsive layouts, smooth navigation flows, and consistent design language. Collaborated closely with the backend team to integrate product, cart, and order APIs cleanly.",
        outcome:
            "Delivered a polished, fully responsive storefront live at shopfeedme.com. The component-driven architecture significantly reduced development time for new feature additions.",
    },
    {
        id: 4,
        slug: "yano-schools",
        title: "Yano Schools",
        tagline: "EdTech platform connecting schools, students, and parents",
        category: "EdTech",
        year: "2024",
        coverImage: "/projects/yanoschools.png",
        tech: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
        liveUrl: "https://www.yanoschools.com",
        overview:
            "Yano Schools is an educational technology platform designed to bridge the gap between schools, students, and parents. It provides tools for managing academic records, communication, and school operations in a unified, accessible interface.",
        challenge:
            "Nigerian schools operate with highly varied infrastructure and digital literacy levels. The platform needed to work reliably across device types and be intuitive enough for non-technical users including parents and administrative staff.",
        solution:
            "Worked as part of the frontend development team, building key UI sections and ensuring cross-browser, cross-device consistency. Implemented accessible, responsive layouts using Next.js and Tailwind CSS. Focused on clear information hierarchy and fast page loads.",
        outcome:
            "A live, functional platform serving schools across Nigeria, available at yanoschools.com. The clean, intuitive interface has reduced onboarding friction for both institutional and individual users.",
    },
    {
        id: 5,
        slug: "fixfinder",
        title: "FixFinder",
        tagline: "Connecting users with verified local artisans in real time",
        category: "Platform",
        year: "2024",
        coverImage: "/projects/fixfinder.png",
        tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Face API"],
        liveUrl: "https://fixfinder-cyan.vercel.app",
        overview:
            "FixFinder is a community-driven platform that connects users with verified local service providers — plumbers, electricians, and other artisans — using real-time messaging and identity verification. It was built to solve the widespread trust problem in finding reliable help locally.",
        challenge:
            "Finding reliable local artisans is often a hassle filled with trust issues. Users needed a platform that not only listed services but verified provider identity and facilitated secure, real-time communication.",
        solution:
            "FixFinder leverages a MERN stack with Socket.io for instant messaging. We implemented Face API to verify provider identities against their profile photos. Location-based search allows users to find help within their immediate vicinity, fostering trust and community.",
        outcome:
            "Delivered a working, deployed platform at fixfinder-cyan.vercel.app. The identity verification layer significantly increased user confidence in provider listings, and real-time chat reduced the friction of booking local services.",
    },
    {
        id: 6,
        slug: "freelance-portfolio-cms",
        title: "Client CMS Platform",
        tagline: "Headless CMS and dashboard for small businesses",
        category: "Web App",
        year: "2023",
        coverImage: "/projects/cms.png",
        tech: ["React", "Express.js", "Firebase", "PostgreSQL"],
        overview:
            "A custom headless CMS and admin dashboard built for a portfolio of small business clients, enabling non-technical owners to manage content, products, and analytics.",
        challenge:
            "Clients had no technical staff and needed a dashboard so intuitive that zero training was required, while still supporting complex data relationships under the hood.",
        solution:
            "Designed a drag-and-drop page builder, a product catalogue manager, and a Firestore-backed real-time analytics panel, wrapped in a role-based permission system.",
        outcome:
            "Deployed for 5 clients. Average content update time dropped from 2 days (developer-assisted) to under 10 minutes self-served. User interaction up 35%.",
    },
];

// ─── Skills ───────────────────────────────────────────────────
export const skills: Skill[] = [
    // Frontend
    { name: "React.js", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "JavaScript (ES6+)", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },

    // Backend
    { name: "Node.js", category: "Backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", category: "Backend" },
    { name: "Python", category: "Backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "REST APIs", category: "Backend" },

    // Mobile
    { name: "React Native", category: "Mobile", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Zustand", category: "Mobile" },

    // Database
    { name: "PostgreSQL", category: "Database", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", category: "Database", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", category: "Database", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },

    // Tools
    { name: "Git", category: "Tools & DevOps", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Docker", category: "Tools & DevOps", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Figma", category: "Tools & DevOps", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
];

// ─── Education ────────────────────────────────────────────────
export const education: Education[] = [
    {
        id: 1,
        degree: "B.Sc. Computer Science",
        institution: "Federal University of Petroleum Resources, Effurun",
        period: "2021 – Nov 2025",
        detail: "Second Class Upper · 4.4 / 5.0",
    },
    {
        id: 2,
        degree: "App Development (React Native)",
        institution: "Harvoxx Technology Hub",
        period: "June 2024 - November 2024",
    },
    {
        id: 3,
        degree: "Web Design & Web Development",
        institution: "Complete Computer technology (CCT)",
        period: "2020-2023",
    },
];

// ─── Testimonials ─────────────────────────────────────────────
export const testimonials: Testimonial[] = [
    {
        id: 1,
        quote:
            "Oviemo delivered a dashboard that completely transformed how we handle reporting. The AI integration alone saved our team hours every week.",
        name: "Client A",
        title: "Product Manager, Calarax",
    },
    {
        id: 2,
        quote:
            "Working with Oviemo on FinazB was excellent. He understood the constraints of our user base and built something genuinely fast on low-end devices.",
        name: "Client B",
        title: "CTO, Harvoxx Tech Hub",
    },
    {
        id: 3,
        quote:
            "Our clients can now update their own sites without calling us. That's exactly what we asked for and Oviemo delivered it on time.",
        name: "Client C",
        title: "Agency Owner",
    },
];

// ─── Helpers ──────────────────────────────────────────────────

/** Get a single project by its slug (used in /projects/[slug]) */
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

/** Get all unique project categories (for filter UI) */
export function getProjectCategories(): string[] {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...cats];
}

/** Get skills grouped by category */
export function getSkillsByCategory(): Record<string, Skill[]> {
    return skills.reduce<Record<string, Skill[]>>((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});
}

/**
 * Returns the best available cover image URL for a project.
 * Priority: local coverImage → Microlink live screenshot → empty string (show placeholder)
 */
export function getProjectCoverUrl(project: Project): string {
    if (project.coverImage) return project.coverImage;
    if (project.liveUrl) {
        return `https://api.microlink.io/?url=${encodeURIComponent(project.liveUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
    }
    return "";
}
