export const projects = [
  {
    id: "01",
    title: "MyNagAlaga",
    subtitle: "Government Services Platform",
    role: "Mobile Developer",
    context: null,
    year: "2026",
    award: "Grand Winner — 1st Naga City Mayoral Hackathon",
    awardCategory: "Social Services Challenge",
    article: "https://bicol-u.edu.ph/buenos-sweep-top-awards-at-1st-naga-city-mayoral-hackathon/",
    bullets: [
      "Engineered the citizen-facing mobile application using Clean Architecture and Riverpod, ensuring high maintainability, consistent code standards, and reliable state management.",
      "Integrated a secure, multi-purpose Digital Badge module, accelerating identity validation for aid distribution (ayuda) and civic services to drive 3x faster case resolution for municipal staff.",
      "Developed interactive OpenStreetMap (OSM) routing features, delivering proximity-based, real-time evacuation navigation for citizens during disaster emergencies.",
    ],
    tags: ["Flutter", "Riverpod", "Clean Architecture", "Retrofit + Dio", "OpenStreetMap"],
    logo: "/mynagalaga.png",
    repo: "https://github.com/jDxve/MyNagaLaga-Mobile-App",
  },
  {
    id: "02",
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
    tags: ["Flutter", "PayMongo", "Socket.IO", "FCM", "Facebook Graph API"],
    logo: "/elecxus.png",
    repo: "https://github.com/jDxve/elecxus-mobile-app",
  },
  {
    id: "03",
    title: "EatEase",
    subtitle: "Food Ordering Mobile Application",
    role: "Full Stack Developer",
    context: null,
    year: "Jan – Mar 2025",
    award: null,
    awardCategory: null,
    article: null,
    bullets: [
      "Built a cross-platform Flutter food ordering application featuring live order tracking, real-time customer–vendor WebSocket chat, and digital checkout.",
      "Architected the MongoDB schema and Node.js REST API layer managing order lifecycles, vendor menus, and payment reconciliation.",
    ],
    tags: ["Flutter", "WebSocket", "PayMongo", "Node.js", "MongoDB"],
    logo: "/eatease.png",
    repo: "https://github.com/jDxve/EatEase",
  },
];

export const experiences = [
  {
    role: "IT Specialist – Mobile & Desktop Developer",
    company: "LCC Group of Companies",
    project: null,
    period: "July 2026 – Present",
    bullets: [
      {
        lead: "Cross-Platform Application Maintenance",
        text: "Maintain and optimize enterprise Android and desktop applications (.NET MAUI, C#) supporting 100+ daily operational staff across 10+ warehouse and retail locations.",
      },
      {
        lead: "Offline-First Data Reliability",
        text: "Engineered an offline-first SQLite caching layer that resolved race conditions and eliminated live data loss during high-traffic warehouse floor updates, cutting sync failures by roughly 97%.",
      },
      {
        lead: "Barcode Hardware & Validation",
        text: "Integrated custom hardware barcode scanning routines and automated test suites, eliminating data validation failures during inventory intake and reducing intake time per shipment.",
      },
    ],
    tags: [".NET MAUI", "C#", "SQLite", "Android", "Desktop", "Barcode/Scanner Integration"],
  },
  {
    role: "Software Developer Intern (OJT)",
    company: "Quanby Solutions, Inc.",
    project: "Payroll Management System",
    period: "Feb – May 2026",
    bullets: [
      {
        lead: "Backend Leadership",
        text: "Led backend development on a NestJS payroll system, establishing architectural standards and reviewing pull requests across a team of 3 engineers.",
      },
      {
        lead: "End-to-End Module Delivery",
        text: "Architected and shipped 11 full-stack modules (NestJS, PostgreSQL, Next.js) covering authentication, attendance, overtime calculation, and payroll processing.",
      },
      {
        lead: "Security & Compliance",
        text: "Implemented role-based access control (RBAC), audit logging, session timeouts, and end-to-end integration tests to safeguard financial workflows.",
      },
    ],
    tags: ["NestJS", "PostgreSQL", "Next.js", "TypeScript", "REST APIs", "RBAC", "JWT"],
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
    blurb: "Cross-platform apps with clean architecture — my core specialization.",
    items: [
      "Flutter",
      "Dart",
      "Clean Architecture",
      "MVVM",
      "Riverpod",
      "Provider",
      "GetIt",
      "Retrofit + Dio",
      "Firebase App Distribution",
      "Firebase Crashlytics",
    ],
  },
  {
    label: "Integrations",
    items: [
      "REST APIs (Retrofit + Dio)",
      "JWT authentication",
      "Webhook handling",
      "PayMongo",
      "Firebase Cloud Messaging",
      "Socket.IO",
      "OpenStreetMap",
      "Facebook Graph API",
    ],
  },
  {
    label: "Backend",
    items: ["NestJS", "Express.js", "Node.js", "TypeScript", "MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    label: "Tools",
    items: [
      "GitHub Actions (CI/CD)",
      "Git/GitHub",
      "Postman",
      "Android Studio",
      "Xcode",
      "VSCode",
    ],
  },
];

export const contactLinks = [
  { label: "Email",    value: "johndavebanas03@gmail.com", href: "mailto:johndavebanas03@gmail.com",      tag: "Direct Line"  },
  { label: "Phone",    value: "(+63) 910-497-9045",        href: "tel:+639104979045",                     tag: "Mobile"       },
  { label: "LinkedIn", value: "linkedin.com/in/jdv-bñs",  href: "https://linkedin.com/in/jdv-b%C3%B1s", tag: "Professional" },
  { label: "GitHub",   value: "github.com/jDxve",          href: "https://github.com/jDxve",              tag: "Open Source"  },
];
