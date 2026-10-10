export const projects = [
  {
    id: "01",
    title: "MyNagAlaga",
    subtitle: "Government Services Platform",
    role: "Lead Mobile Developer",
    context: null,
    year: "2026",
    award: "Grand Winner — 1st Naga City Mayoral Hackathon",
    awardCategory: "Social Services Challenge",
    article: "https://bicol-u.edu.ph/buenos-sweep-top-awards-at-1st-naga-city-mayoral-hackathon/",
    bullets: [
      "Engineered the citizen-facing mobile application using Clean Architecture and Riverpod, ensuring high maintainability, consistent code standards, and reliable state management.",
      "Integrated a secure, multi-purpose Digital Badge module, accelerating identity validation for aid distribution (ayuda) and civic services to drive 3x faster case resolution for municipal staff.",
      "Developed interactive OpenStreetMap (OSM) routing features, delivering proximity-based evacuation navigation that works both online and offline during disaster emergencies.",
    ],
    tags: ["Flutter", "Riverpod", "Clean Architecture", "Retrofit + Dio", "OpenStreetMap"],
    logo: "/mynagalaga.png",
    repo: "https://github.com/jDxve/MyNagaLaga-Mobile-App",
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
    title: "ElecXus",
    subtitle: "Electric Service Management System",
    role: "Full Stack Developer",
    context: "Capstone · Albay Electric Cooperative",
    year: "Aug – Nov 2025",
    award: null,
    awardCategory: null,
    article: null,
    bullets: [
      "Engineered a self-service utility application with automated billing, geospatial complaint logging, and live outage tracking via the Facebook Graph API, earning a 4.62/5.0 UAT rating and a 98% post-launch adoption rate.",
      "Integrated the PayMongo payment gateway (e-wallets, cards) with webhook-driven reconciliation for instant transaction confirmation.",
      "Delivered real-time status pipelines using Socket.IO and Firebase Cloud Messaging (FCM) for push alerts, providing end-to-end transparency across high-volume issue resolution workflows.",
    ],
    tags: ["Flutter", "Express", "MySQL", "PayMongo", "Socket.IO", "FCM", "Facebook Graph API"],
    logo: "/elecxus.png",
    repo: "https://github.com/jDxve/elecxus-mobile-app",
  },
  {
    id: "04",
    title: "EatEase",
    subtitle: "Multi-Vendor Food Ordering Platform",
    role: "Full Stack Developer",
    context: null,
    year: "Jan – Mar 2025",
    award: null,
    awardCategory: null,
    article: null,
    bullets: [
      "Built a cross-platform Flutter food delivery application featuring live order tracking, PayMongo payments, and digital checkout.",
      "Architected the MongoDB schema and Node.js REST API layer managing order lifecycles, vendor menus, and real-time WebSocket chat between customers and vendors.",
    ],
    tags: ["Flutter", "WebSocket", "PayMongo", "Node.js", "MongoDB"],
    logo: "/eatease.png",
    repo: "https://github.com/jDxve/EatEase",
  },
];

export const experiences = [
  {
    role: "Mobile & Full-Stack Developer",
    company: "LCC Group of Companies",
    project: null,
    period: "July 2026 – Present",
    bullets: [
      {
        lead: "Legacy WMS Modernization",
        text: "Contributed to modernizing legacy Warehouse Management System (WMS) workflows by building native Android (Kotlin, Jetpack Compose) and web modules.",
      },
      {
        lead: "CI/CD & Over-the-Air Delivery",
        text: "Built a GitHub Actions pipeline for Android builds, signing, and over-the-air (OTA) distribution to retail kiosks via Server-Sent Events, eliminating manual APK deployments.",
      },
      {
        lead: "Offline-First Data Reliability",
        text: "Engineered an offline-first SQLite data layer for apps used by 100+ daily staff across 10+ retail locations with intermittent connectivity.",
      },
      {
        lead: "Multi-Tier Price Verification",
        text: "Engineered a multi-tier price verification and promo display system spanning a Kotlin kiosk app, a NestJS backend, and a React admin dashboard.",
      },
    ],
    tags: ["Kotlin", "Jetpack Compose", "Android", "NestJS", "React", "SQLite", "GitHub Actions", "SSE"],
  },
  {
    role: "Mobile & Full-Stack Developer (Part-Time)",
    company: "Freelance",
    project: "On-Premises Retail POS System · Project-Based",
    period: "June – October 2026",
    bullets: [
      {
        lead: "Sole Developer, End to End",
        text: "Designed and delivered an on-premises POS system for a retail business as the sole developer, from system design through local server provisioning.",
      },
      {
        lead: "Cross-Platform Register App",
        text: "Built a cross-platform Flutter app for Windows registers and Android tablets, backed by a NestJS REST API with Jest E2E tests running on self-hosted Ubuntu servers.",
      },
      {
        lead: "In-House Distribution Portal",
        text: "Built a distribution portal for installing Android and Windows builds via QR code, integrated with automated CI/CD releases.",
      },
      {
        lead: "Server Administration",
        text: "Administered the self-hosted Ubuntu Server environment, handling deployments, server configuration, and ongoing maintenance.",
      },
    ],
    tags: ["Flutter", "NestJS", "Windows", "Android", "Ubuntu Server", "Jest", "CI/CD"],
  },
  {
    role: "Software Developer Intern (OJT)",
    company: "Quanby Solutions, Inc.",
    project: "Enterprise Web Platform",
    period: "Feb – May 2026",
    bullets: [
      {
        lead: "Backend Ownership",
        text: "Owned backend development for an enterprise web platform built with Next.js, NestJS, and PostgreSQL, leading code reviews across a 3-person team.",
      },
      {
        lead: "End-to-End Module Delivery",
        text: "Shipped 11 full-stack production modules covering authentication, workflow automation, business logic calculations, and reporting.",
      },
      {
        lead: "Security & Compliance",
        text: "Implemented role-based access control (RBAC), session timeouts, audit logging, and Jest/Supertest integration test suites to safeguard sensitive workflows.",
      },
    ],
    tags: ["NestJS", "PostgreSQL", "Next.js", "TypeScript", "REST APIs", "RBAC", "JWT", "Jest"],
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
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Ubuntu Server",
      "Firebase App Distribution",
    ],
  },
];

export const contactLinks = [
  { label: "Email",    value: "johndavebanas03@gmail.com", href: "mailto:johndavebanas03@gmail.com",      tag: "Direct Line"  },
  { label: "Phone",    value: "(+63) 910-497-9045",        href: "tel:+639104979045",                     tag: "Mobile"       },
  { label: "LinkedIn", value: "linkedin.com/in/jdv-bñs",  href: "https://linkedin.com/in/jdv-b%C3%B1s", tag: "Professional" },
  { label: "GitHub",   value: "github.com/jDxve",          href: "https://github.com/jDxve",              tag: "Open Source"  },
];
