"use client";

import { Home, BarChart3, User, Users2, MoreHorizontal, LogOut, Sparkles } from "lucide-react";
import Image from "next/image";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "charts", label: "Charts", icon: BarChart3, badge: "HOT" },
    { id: "avatar", label: "Avatar", icon: User },
    { id: "party", label: "Party", icon: Users2, count: "55" },
    { id: "more", label: "More", icon: MoreHorizontal },
  ];

  return (
    <aside className="fixed left-0 top-16 bottom-0 z-20 w-20 lg:w-64 border-r border-[var(--border-color)] bg-[var(--bg-card)] p-3 lg:p-4 overflow-y-auto flex flex-col justify-between transition-all duration-200">
      <div className="space-y-6">
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-center lg:justify-start gap-3 rounded-xl px-3 py-3 font-montserrat font-bold text-xs lg:text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[var(--roblox-blue)] text-white shadow-md shadow-[var(--roblox-blue)]/20"
                    : "text-[var(--text-muted)] hover:bg-[var(--bg-main)] hover:text-[var(--text-main)]"
                }`}
              >
                <div className="relative">
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  {item.badge && !isActive && (
                    <span className="absolute -top-2 -right-3 rounded-full bg-[var(--roblox-red)] px-1.5 py-0.5 text-[9px] font-black text-white leading-none">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="hidden lg:inline-block flex-1 text-left">{item.label}</span>
                {item.count && (
                  <span className={`hidden lg:inline-block rounded-full px-2 py-0.5 text-xs font-black ${
                    isActive ? "bg-white/20 text-white" : "bg-[var(--bg-main)] text-[var(--text-muted)]"
                  }`}>
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="hidden lg:block rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--bg-main)] to-[var(--bg-card)] p-4 relative overflow-hidden">
          <div className="flex items-center gap-2 text-[var(--roblox-blue)] font-extrabold text-xs mb-1">
            <Sparkles size={16} />
            ROBLOX CREATOR
          </div>
          <p className="text-xs font-bold text-[var(--text-main)]">Looking for a Web Engineer?</p>
          <p className="text-[11px] text-[var(--text-muted)] mt-1">Ready for full-time & project-based hire.</p>
          <button 
            onClick={() => setActiveTab("more")}
            className="mt-3 w-full rounded-xl bg-[var(--roblox-blue)] py-2 text-xs font-extrabold text-white hover:opacity-90 transition cursor-pointer"
          >
            Hire Me
          </button>
        </div>
      </div>

      <div className="border-t border-[var(--border-color)] pt-4 space-y-3">
        <button
          onClick={() => {
            const contactSec = document.getElementById("contact-section");
            if (contactSec) {
              contactSec.scrollIntoView({ behavior: "smooth" });
            } else {
              setActiveTab("home");
            }
          }}
          className="w-full flex items-center justify-center lg:justify-start gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-3 py-2.5 font-montserrat font-bold text-xs text-[var(--text-main)] hover:border-[var(--roblox-blue)] hover:text-[var(--roblox-blue)] transition cursor-pointer"
        >
          <LogOut size={18} strokeWidth={2} />
          <span className="hidden lg:inline-block">Contact Me</span>
        </button>

        <div className="flex items-center justify-between px-2 pt-1">
          <div className="relative h-5 w-5 opacity-70">
            <Image
              src="/img/portfolio-logo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="hidden lg:inline-block text-[10px] font-bold text-[var(--text-muted)]">
            v2.4 Roblox Studio UI
          </span>
        </div>
      </div>
    </aside>
  );
}
