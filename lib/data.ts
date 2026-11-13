export const projects = [
  {
    id: "01",
    title: "On-Premises Retail POS System",
    subtitle: "Cross-Platform Retail POS & Local Server Administration",
    role: "Sole Developer",
    context: "Paid Commercial Project",
    year: "Jun – Oct 2026",
    award: null,
    awardCategory: null,
    article: null,
    bullets: [
      "Designed and delivered an on-premises POS system for a retail business, spanning cross-platform Flutter (Windows & Android), NestJS REST API, and self-hosted Ubuntu Server administration.",
      "Built an in-house QR distribution portal with automated CI/CD releases for streamlined Android and Windows client deployments.",
    ],
    tags: ["Flutter", "Windows", "Android", "NestJS", "Ubuntu Server", "REST APIs", "CI/CD"],
    logo: null,
    repo: null,
  },
  {
    id: "02",
    title: "outbox",
    subtitle: "Offline Mutation Queue for Flutter",
    role: "Author · Open Source Package",
    context: "Published Dart package",
    year: "2026",
    award: null,
    awardCategory: null,
    article: null,
    bullets: [
      "Published a durable, SQLite-backed offline mutation queue featuring per-group ordering, exponential backoff, idempotent retries, and dead-letter queues.",
      "Designed a client-agnostic architecture with pluggable storage and transport adapters — Dio, http, Retrofit, GraphQL, and raw sockets.",
    ],
    tags: ["Dart", "Flutter", "SQLite", "Dio", "GraphQL"],
    logo: null,
    repo: "https://github.com/jDxve/outbox",
  },
  {
    id: "03",
    title: "MyNagAlaga",
    subtitle: "Government Services Mobile Platform",
    role: "Lead Mobile Developer",
    context: "Grand Winner, 1st Naga City Mayoral Hackathon (Social Services Challenge)",
    year: "2026",
    award: "Grand Winner — 1st Naga City Mayoral Hackathon",
    awardCategory: "Social Services Challenge",
    article: "https://bicol-u.edu.ph/buenos-sweep-top-awards-at-1st-naga-city-mayoral-hackathon/",
    bullets: [
      "Built a citizen-facing Flutter app (Clean Architecture, Riverpod) with a Digital Badge for identity validation in municipal aid distribution.",
      "Integrated OpenStreetMap proximity routing for offline and online navigation during disaster emergencies.",
    ],
    tags: ["Flutter", "Riverpod", "Clean Architecture", "Digital Badge", "OpenStreetMap"],
    logo: "/mynagalaga.png",
    repo: "https://github.com/jDxve/MyNagaLaga-Mobile-App",
  },
  {
    id: "04",
    title: "ElecXus",
    subtitle: "Electric Service Management System",
    role: "Full-Stack Developer, Capstone",
    context: "Albay Electric Cooperative (ALECO)",
    year: "Aug – Nov 2025",
    award: null,
    awardCategory: null,
    article: null,
    bullets: [
      "Built a utility service platform for Albay Electric Cooperative (ALECO) using Flutter, Express, and MySQL, with automated billing, PayMongo payment reconciliation, and real-time updates via Socket.IO and FCM.",
      "Achieved a 4.62/5.0 rating in User Acceptance Testing (UAT).",
    ],
    tags: ["Flutter", "Express", "MySQL", "PayMongo", "Socket.IO", "FCM"],
    logo: "/elecxus.png",
    repo: "https://github.com/jDxve/elecxus-mobile-app",
  },
  {
    id: "05",
    title: "EatEase",
    subtitle: "Multi-Vendor Food Ordering Platform",
    role: "Full-Stack Developer",
    context: null,
    year: "Jan – Mar 2025",
    award: null,
    awardCategory: null,
    article: null,
    bullets: [
      "Built a food delivery app (Flutter, Node.js, MongoDB) with live order tracking, PayMongo payments, and real-time WebSocket chat between customers and vendors.",
    ],
    tags: ["Flutter", "Node.js", "MongoDB", "PayMongo", "WebSockets"],
    logo: "/eatease.png",
    repo: "https://github.com/jDxve/EatEase",
  },
];

export const experiences = [
  {
    role: "Freelance Mobile & Full-Stack Developer",
    company: "US-Based Private Client",
    project: null,
    period: "Oct 2026 – Present",
    bullets: [
      {
        lead: "Feature Engineering",
        text: "Engineering mobile and web feature modules for a social discovery and media-sharing platform, implementing secure US payment integration, user authentication, and dynamic profiles.",
      },
      {
        lead: "AWS Cloud Infrastructure",
        text: "Architected cloud infrastructure on AWS utilizing S3 for media storage, EC2 for server deployment, and SES for automated transactional email workflows.",
      },
    ],
    tags: ["Flutter", "Web", "AWS (S3, EC2, SES)", "TypeScript", "Payments"],
  },
  {
    role: "Mobile & Full-Stack Developer (Contract)",
    company: "LCC Group of Companies / LionTech Shared Services Inc.",
    project: null,
    period: "Jul 2026 – Nov 2026",
    bullets: [
      {
        lead: "Legacy WMS Modernization",
        text: "Contributed to modernizing legacy Warehouse Management System (WMS) workflows by building native Android (Kotlin, Jetpack Compose) and web modules.",
      },
      {
        lead: "CI/CD & Over-the-Air Delivery",
        text: "Built a GitHub Actions CI/CD pipeline for Android builds, signing, and over-the-air (OTA) distribution to retail kiosks via Server-Sent Events, eliminating manual APK deployments.",
      },
      {
        lead: "Offline-First Data Reliability",
        text: "Engineered an offline-first SQLite data layer for apps used by 100+ daily staff across 10+ retail locations with intermittent connectivity.",
      },
      {
        lead: "Legacy System Refactoring",
        text: "Enhanced legacy systems by refactoring core codebases and fixing data sync failures.",
      },
    ],
    tags: ["Kotlin", "Jetpack Compose", "Android", "NestJS", "SQLite", "GitHub Actions", "CI/CD", "Server-Sent Events"],
  },
  {
    role: "Software Developer Intern",
    company: "Quanby Solutions, Inc.",
    project: null,
    period: "Feb 2026 – May 2026",
    bullets: [
      {
        lead: "Backend Ownership & Code Reviews",
        text: "Owned backend development for an enterprise web platform built with Next.js, NestJS, and PostgreSQL, leading code reviews in a 3-person team.",
      },
      {
        lead: "Full-Stack Module Delivery",
        text: "Shipped 11 full-stack production modules covering authentication, workflow automation, business logic calculations, and reporting.",
      },
      {
        lead: "Security & Integration Testing",
        text: "Implemented RBAC, session timeouts, audit logging, and Jest/Supertest integration test suites.",
      },
    ],
    tags: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "REST APIs", "RBAC", "Jest", "Supertest"],
  },
];

type Category = {
  label: string;
  items: string[];
  featured?: boolean;
  blurb?: string;
};

export const categories: Category[] = [
  {
    label: "Mobile",
    featured: true,
    blurb: "Cross-platform and native apps with clean architecture — my core specialization.",
    items: [
      "Flutter",
      "Dart",
      "Android",
      "iOS",
      "Kotlin",
      "Jetpack Compose",
      "Kotlin Multiplatform (KMP)",
      "Riverpod",
      "Hilt",
      "SQLite",
      "Clean Architecture",
      "MVVM",
    ],
  },
  {
    label: "Backend",
    items: [
      "NestJS",
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Drizzle ORM",
      "REST APIs",
      "JWT",
    ],
  },
  {
    label: "Web & Integrations",
    items: [
      "React",
      "Next.js",
      "Firebase",
      "FCM",
      "WebSockets",
      "Socket.IO",
      "PayMongo",
      "Facebook Graph API",
      "OpenStreetMap",
    ],
  },
  {
    label: "DevOps",
    items: [
      "AWS (S3, EC2, SES)",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Ubuntu Server",
      "Firebase App Distribution",
    ],
  },
];

export const contactLinks = [
  { label: "Email",    value: "johndavebanas03@gmail.com", href: "mailto:johndavebanas03@gmail.com", tag: "Direct Line"  },
  { label: "Phone",    value: "(+63) 910-497-9045",        href: "tel:+639104979045",                  tag: "Mobile"       },
  { label: "LinkedIn", value: "linkedin.com/in/jdv-bns",   href: "https://linkedin.com/in/jdv-bns",    tag: "Professional" },
  { label: "GitHub",   value: "github.com/jDxve",          href: "https://github.com/jDxve",           tag: "Open Source"  },
];
