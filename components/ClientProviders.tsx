"use client";

import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home,
  Info,
  Settings,
  Phone,
  BookOpen,
  Calendar,
  Award,
  Users,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "About", href: "/about", icon: <Info size={18} /> },
    {
      name: "Services", href:"/services",
      icon: <Settings size={18} />,
     
    },
    { name: "Contact", href: "/contact", icon: <Phone size={18} /> },
    { name: "MyBlog", href: "/blog", icon: <BookOpen size={18} /> },
    
    { name: "Experience", href: "/experience", icon: <Users size={18} /> },
    { name: "Certificates", href: "/certificate", icon: <Award size={18} /> },
    { name: "Clients", href: "/clients", icon: <Users size={18} /> },
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/60 border-b border-white/20 shadow-[0_0_25px_#00ffff]">
        <div className="w-full px-4 py-4 flex items-center justify-between">

          {/* LOGO — now truly left corner */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/"
              className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_#00ffff]"
            >
              Raj-Portfolio
            </Link>
          </motion.div>

          {/* Desktop Navbar */}
          <nav className="hidden md:flex gap-16 items-center">

            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setDropdown(item.name)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  href={item.href ?? "#"}
                  className={`flex items-center gap-2 text-[15px] font-bold transition relative
                  ${pathname === item.href ? "text-cyan-400" : "text-gray-300 hover:text-white"}`}
                >
                  {item.icon}
                  {item.name}
                  {item.submenu && <ChevronDown size={16} />}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full transition-all duration-300 
                    ${pathname === item.href ? "bg-cyan-400" : "group-hover:bg-pink-400"}`}
                  />
                </Link>

                {/* Dropdown */}
                {item.submenu && dropdown === item.name && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-3 bg-black/90 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-[0_0_25px_#ff00ff]"
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block text-gray-300 hover:text-cyan-400 py-2 text-sm"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white border border-white/40 px-3 py-1 rounded-lg"
          >
            Menu
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="md:hidden bg-black/90 backdrop-blur-2xl border-t border-white/20 px-8 py-6"
            >
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href ?? "#"}
                      onClick={() => setOpen(false)}
                      className="text-gray-300 text-lg flex gap-3 items-center"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {children}
    </ThemeProvider>
  );
}
