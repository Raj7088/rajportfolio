import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ClientProviders from "@/components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Professional Technical Trainer",
  description: "Corporate Trainer | MERN | Javascript",
  openGraph: {
    title: "Professional Technical Trainer",
    description: "Corporate Trainer | DevOps | Cloud",
    url: "https://your-domain.com",
    type: "website",
    siteName: "Nagaraj | Technical Trainer",
    images: [
      {
        url: "/og-image.png", // Put inside public folder
        width: 1200,
        height: 630,
        alt: "Professional Trainer Portfolio",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
