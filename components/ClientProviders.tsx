"use client";

import { ThemeProvider } from "next-themes";
import ThemeToggle from "./ThemeToggle";
import Clients from "./Clients";
import Certificates from "./Certificates";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <header className="flex gap-6 p-5 bg-black text-white">
        <nav className="flex gap-6">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Myblog</a>
          <a href="/book">Book Slot</a>
           <a href="/book">Dark Mode</a>
            <a href="/certificate">Certificates</a>
             <a href="/clients">Clients</a>

        </nav>

        
      </header>

      {children}
    </ThemeProvider>
  );
}
