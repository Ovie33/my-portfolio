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
    cvUrl: "/resume",
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
        slug: "shopfeedme",
        title: "ShopFeedMe",
        tagline: "Full-featured e-commerce platform built with Next.js",
        category: "E-Commerce",
        year: "2024",
        coverImage: "",
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
        id: 2,
        slug: "yano-schools",
        title: "Yano Schools",
        tagline: "EdTech platform connecting schools, students, and parents",
        category: "EdTech",
        year: "2024",
        coverImage: "",
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
        id: 3,
        slug: "apple-home-page-clone",
        title: "Apple home page clone",
        tagline: "clone of the Apple home page with all its features and animations",
        category: "Landing Page",
        year: "2023",
        coverImage: "",
        tech: ["React"],
        liveUrl: "https://applehome.vercel.app/",
        overview: "This is a clone of the Apple home page with all its features and animations.",
        challenge: "I wanted to build a clone of the Apple home page with all its features and animations.",
        solution: "I tried my best to build a clone of the Apple home page with all its features and animations using React.",
        outcome:
            "I was able to successfully replicate the Apple home page with all its features and animations.",
    },
    {
        id: 4,
        slug: "conversion-landing-page",
        title: "Conversional Landing page for Booking Calls with Experts",
        tagline: "Conversion Landing page for Booking Calls with Experts",
        category: "Landing Page",
        year: "2025",
        coverImage: "",
        tech: ["React", "Tailwind CSS"],
        liveUrl: "https://landing-page-six-sigma-83.vercel.app/",
        overview: "A demo conversion landing page made to test my skill with AI assistance and designs for quicker and swifter deliveries.",
        challenge:
            "To build a high converting landing page.",
        solution:
            "Built with React and Tailwind CSS.",
        outcome:
            "A live, functional Conversion Landing page that helps businesses book more calls and clients.",
    },

    {
        id: 5,
        slug: "fixfinder",
        title: "FixFinder",
        tagline: "Connecting users with verified local artisans in real time",
        category: "Platform",
        year: "2024",
        coverImage: "",
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
        slug: "iconiq-music-website",
        title: "Iconiq Music Website",
        tagline: "Music website for Iconiq Music",
        category: "Web App",
        year: "2026",
        coverImage: "",
        tech: ["Next.js", "Figma"],
        liveUrl: "https://iconiq-music-website-steel.vercel.app/",
        overview:
            "Iconiq Music website is a website built for Iconiq Music, a music company that provides music services to clients.",
        challenge:
            "The client needed a website that was visually appealing and easy to navigate, while still being able to showcase their music and services.",
        solution:
            "Designed and built a modern, visually appealing interface with smooth animations and intuitive navigation using Next.js and Figma.",
        outcome:
            "Deployed for 1 client, with positive feedback from the client.",
    },
    {
        id: 7,
        slug: "uiux-designs",
        title: "UI/UX Design Collection",
        tagline: "High-fidelity UI/UX designs across 4 projects — built in Figma",
        category: "UI/UX",
        year: "2024–2025",
        coverImage: "",
        tech: ["Figma", "UI Design", "UX Research", "Prototyping"],
        figmaUrl: "https://www.figma.com/design/1XruyZScpMaeDngrt42341/Figma-Projects?node-id=0-1&p=f&t=FcxvCQ3I2TJDOBND-0",
        overview:
            "A collection of 4 high-fidelity UI/UX design projects created in Figma, spanning mobile apps, web interfaces, and product design. Each design demonstrates a complete design process — from user flows and wireframes through to polished, developer-ready screens.",
        challenge:
            "Each project required translating complex user needs into clean, intuitive interfaces that developers could implement faithfully — balancing visual appeal with practical constraints like accessibility, responsiveness, and platform conventions.",
        solution:
            "Approached each project with a user-first design process: defining user flows, building low-fidelity wireframes, then iterating to high-fidelity screens with defined components, typography, spacing systems, and interactive prototypes.",
        outcome:
            "4 production-ready design systems and prototypes delivered to client and development teams. Projects are pending development and are available for review directly in Figma.",
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
            "Oviemo delivered stunning UI/UX designs for both my Resturant and also my Record label made it simple and clean and easy to use.",
        name: "Robson Bassey",
        title: "CEO of Yummy ville and iconic Records",
    },
    {
        id: 2,
        quote:
            "Working with Oviemo on FinazB was excellent. He understood the constraints of our user base and built something genuinely fast on low-end devices.",
        name: "Mr Paul .A.",
        title: "CTO, Harvoxx Tech Hub",
    },
    {
        id: 3,
        quote:
            "Delivered a very high quality UI/UX design for our platform Freeman Firms. The design was stunning and user-friendly and it was dlivered on time.",
        name: "Freeman",
        title: "CEO Freeman Firms",
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
