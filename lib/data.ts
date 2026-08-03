export const projects = [
  {
    id: "01",
    title: "MyNagAlaga",
    subtitle: "Citizen Services App for Naga City",
    role: "Mobile Developer",
    context: null,
    year: "2026",
    award: "Grand Winner — 1st Naga City Mayoral Hackathon",
    awardCategory: "Social Services Challenge",
    article: "https://bicol-u.edu.ph/buenos-sweep-top-awards-at-1st-naga-city-mayoral-hackathon/",
    bullets: [
      "Built the citizen-facing Flutter app for Naga City's welfare and disaster response services using Clean Architecture with Riverpod, and Retrofit + Dio for type-safe API integration — winning the Social Services Challenge at the city's first Mayoral Hackathon.",
      "Integrated the OpenStreetMap API to route users to the nearest evacuation center via proximity evaluation with interactive route display, replacing manual hotline lookups during emergencies.",
      "Implemented the Digital Badge module for citizen identity verification across welfare and disaster response workflows.",
    ],
    tags: ["Flutter", "Riverpod", "Clean Architecture", "Retrofit + Dio", "OpenStreetMap"],
    logo: "/mynagalaga.png",
    repo: "https://github.com/jDxve/MyNagaLaga-Mobile-App",
  },
  {
    id: "02",
    title: "ElecXus",
    subtitle: "Consumer Service Management App",
    role: "Mobile & Backend Developer",
    context: "Capstone · Albay Electric Cooperative",
    year: "Aug – Nov 2025",
    award: null,
    awardCategory: null,
    article: null,
    bullets: [
      "Built the Flutter app that gives electric cooperative consumers self-service billing, payments, and complaint filing with map-based location tagging — replacing in-person office visits.",
      "Integrated the PayMongo API end-to-end (GCash, Maya, GrabPay, Cards) across app and backend, including webhook handling for payment confirmation and failure states.",
      "Delivered real-time complaint status updates over Socket.IO with Firebase Cloud Messaging push notifications, and pulled outage advisories from the cooperative's Facebook page using the Graph API.",
    ],
    tags: ["Flutter", "PayMongo", "Socket.IO", "FCM", "Facebook Graph API"],
    logo: "/elecxus.png",
    repo: "https://github.com/jDxve/elecxus-mobile-app",
  },
  {
    id: "03",
    title: "EatEase",
    subtitle: "Food Ordering App",
    role: "Mobile & Backend Developer",
    context: null,
    year: "Jan – Mar 2025",
    award: null,
    awardCategory: null,
    article: null,
    bullets: [
      "Built the Flutter app with live order tracking, in-app customer–vendor chat over WebSocket, and PayMongo checkout, backed by a Node.js/MongoDB API handling orders and payment webhooks.",
    ],
    tags: ["Flutter", "WebSocket", "PayMongo", "Node.js", "MongoDB"],
    logo: "/eatease.png",
    repo: "https://github.com/jDxve/EatEase",
  },
];

export const experiences = [
  {
    role: "Software Developer Intern",
    company: "Quanby Solutions, Inc.",
    project: "Payroll Management System",
    period: "Feb – May 2026",
    bullets: [
      "Shipped 11 full-stack modules end-to-end — auth, employee management, attendance, leave, overtime, and payroll — from NestJS/PostgreSQL backend through Next.js frontend.",
      "Designed and consumed the REST API layer connecting frontend to backend, including JWT authentication and role-based access across all modules.",
      "Ran end-to-end testing across all modules, resolved defects prior to client handover, and worked directly with non-technical stakeholders to turn requirements into shipped features.",
    ],
    tags: ["NestJS", "PostgreSQL", "Next.js", "TypeScript", "REST APIs", "JWT"],
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
