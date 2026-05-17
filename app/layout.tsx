import type { Metadata } from "next";
import { Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jDxve | John Dave B. Bañas",
  description: "Mobile Developer specializing in Flutter and NestJS. Clean code. Clean architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${orbitron.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('dark')`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#E8E8E8] dark:bg-[#0d0d0d] text-[#0d0d0d] dark:text-white font-sans overflow-x-hidden selection:bg-[#ff5500] selection:text-white">
        {children}
      </body>
    </html>
  );
}
