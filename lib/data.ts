export const projects = [
  {
    id: "01",
    title: "MyNagAlaga",
    subtitle: "Government Services Platform",
    role: "Mobile Developer",
    year: "2026",
    award: "GRAND WINNER — 1ST NAGA CITY HACKATHON",
    awardCategory: "Social Services Challenge",
    accentColor: "#ff5500",
    bullets: [
      "Developed a scalable Flutter app using Clean Architecture, Riverpod for state management, and Retrofit + Dio for type-safe API integration.",
      "Integrated OpenStreetMap to display user location, assign the nearest evacuation center via proximity evaluation, and render routes interactively.",
      "Implemented the Digital Badge module for citizen identity verification across welfare and disaster response workflows.",
    ],
    tags: ["Flutter", "Riverpod", "Clean Arch", "OpenStreetMap", "Retrofit"],
    align: "left",
    logo: "/mynagalaga.png",
  },
  {
    id: "02",
    title: "ElecXus",
    subtitle: "Consumer Service Management System",
    role: "Full Stack Developer · Capstone Project",
    year: "Aug – Nov 2025",
    award: null,
    awardCategory: null,
    accentColor: "#222222",
    bullets: [
      "Built a scalable Flutter frontend using MVVM with Provider state management, featuring map-based complaint location tagging via OpenStreetMap.",
      "Developed Express.js REST APIs for billing, complaints, and notifications; integrated FCM push notifications, Facebook Graph API, and real-time Socket.IO updates.",
      "Implemented full PayMongo payment integration (GCash, Maya, GrabPay, Cards) with webhook handling across frontend and backend.",
    ],
    tags: ["Flutter", "Provider", "Express.js", "Socket.IO", "PayMongo", "FCM"],
    align: "right",
    logo: "/elecxus.png",
  },
  {
    id: "03",
    title: "EatEase",
    subtitle: "Food Ordering Mobile Application",
    role: "Full Stack Developer",
    year: "Jan – Mar 2025",
    award: null,
    awardCategory: null,
    accentColor: "#FF5500",
    bullets: [
      "Built the Flutter frontend with order tracking, in-app chat, and PayMongo payment integration.",
      "Developed the Node.js/MongoDB backend handling orders, real-time chat via WebSocket, and payment webhooks.",
    ],
    tags: ["Flutter", "Node.js", "MongoDB", "PayMongo", "WebSocket"],
    align: "left",
    logo: "/eatease.png",
  },
];

export const categories = [
  {
    label: "Mobile",
    items: ["Flutter", "Dart", "Clean Architecture", "MVVM", "Riverpod", "Provider", "GetIt", "Retrofit"],
  },
  {
    label: "Backend",
    items: ["NestJS", "Node.js", "TypeScript", "PostgreSQL", "MySQL", "Drizzle ORM", "REST APIs", "JWT", "Redis"],
  },
  {
    label: "Integrations",
    items: ["PayMongo", "Facebook Graph API", "WebSocket / Socket.IO", "Firebase", "OpenStreetMap"],
  },
  {
    label: "Tools",
    items: ["Git / GitHub", "Docker", "VSCode", "Android Studio", "Xcode", "Postman", "Claude", "Gemini"],
  },
];

export const contactLinks = [
  { label: "Email",    value: "johndavebanas03@gmail.com", href: "mailto:johndavebanas03@gmail.com",      tag: "Direct Line"  },
  { label: "LinkedIn", value: "linkedin.com/in/jdv-bñs",  href: "https://linkedin.com/in/jdv-b%C3%B1s", tag: "Professional" },
  { label: "GitHub",   value: "github.com/jDxve",          href: "https://github.com/jDxve",              tag: "Open Source"  },
  { label: "Phone",    value: "(+63) 910-497-9045",        href: "tel:+639104979045",                     tag: "Mobile"       },
];
