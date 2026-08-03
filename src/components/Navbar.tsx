"use client";
import Image from "next/image";
import { Sun, Moon, Menu, X as CloseIcon } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { useState, useCallback } from "react";
interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onNavigateToTab?: (tab: "about" | "creations") => void;
}
export default function Navbar({
  activeSection,
  setActiveSection,
  onNavigateToTab,
}: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { id: "experiences", label: "Job Experiences" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
  ];
  const scrollToSection = useCallback(
    (id: string, tab?: "about" | "creations") => {
      setActiveSection(id);
      if (onNavigateToTab) onNavigateToTab(tab ?? "about");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 50);
      setMobileMenuOpen(false);
    },
    [setActiveSection, onNavigateToTab],
  );
  const logoSrc = logoError
    ? "/img/portfolio-logo.png"
    : theme === "dark"
      ? "/img/logo-white.png"
      : "/img/logo-black.png";
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-color)] bg-[var(--header-bg)] transition-colors duration-200 shadow-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 items-center gap-3 px-4 py-3 sm:px-8">
        <div className="flex items-center justify-start">
          <button
            onClick={() => scrollToSection("top")}
            className="flex items-center gap-2 transition hover:opacity-90 cursor-pointer flex-shrink-0"
            title="Diberkha Sajna Puwa - Portfolio"
          >
            <div className="relative h-7 sm:h-8 w-auto min-w-[100px] sm:min-w-[125px] flex items-center">
              <Image
                key={logoSrc}
                src={logoSrc}
                alt="Portfolio Logo"
                width={135}
                height={32}
                className="h-7 sm:h-8 w-auto object-contain"
                onError={() => setLogoError(true)}
                priority
              />
            </div>
          </button>
        </div>
        <div className="hidden sm:flex items-center justify-center">
          <nav className="flex items-center gap-7 font-montserrat font-extrabold text-sm text-[var(--text-main)] h-full pt-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative pb-3 transition cursor-pointer whitespace-nowrap group"
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--text-main)] transition-opacity ${
                    activeSection === link.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={toggleTheme}
            title={
              theme === "light"
                ? "Switch to Dark Mode (Studio)"
                : "Switch to Light Mode"
            }
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] hover:bg-[var(--bg-main)] transition cursor-pointer"
          >
            {theme === "light" ? (
              <Moon size={16} strokeWidth={2} />
            ) : (
              <Sun size={16} strokeWidth={2} className="text-yellow-400" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] hover:bg-[var(--bg-main)] transition cursor-pointer"
          >
            {mobileMenuOpen ? (
              <CloseIcon size={16} strokeWidth={2.5} />
            ) : (
              <Menu size={16} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[var(--border-color)] bg-[var(--header-bg)] px-4 py-3 space-y-1 animate-modal">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg font-montserrat font-extrabold text-sm transition cursor-pointer ${
                activeSection === link.id
                  ? "bg-[var(--pill-bg)] text-[var(--text-main)]"
                  : "text-[var(--text-main)] hover:bg-[var(--pill-bg)]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
