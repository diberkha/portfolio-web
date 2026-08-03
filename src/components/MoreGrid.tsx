"use client";

import {
  ShoppingBag,
  User,
  Users2,
  Globe2,
  Briefcase,
  MessageSquare,
  Code,
  FileText,
  GraduationCap,
  Gift,
  Store,
  Settings,
  Info,
  ShieldAlert,
  LogIn,
  LogOut
} from "lucide-react";

interface MoreGridProps {
  setActiveTab: (tab: string) => void;
  onOpenContact: () => void;
}

export default function MoreGrid({ setActiveTab, onOpenContact }: MoreGridProps) {
  const moreCards = [
    { label: "Marketplace", icon: ShoppingBag, tab: "charts", badge: null },
    { label: "Profile", icon: User, tab: "avatar", badge: null },
    { label: "Friends", icon: Users2, tab: "party", badge: "99+" },
    { label: "Communities", icon: Globe2, tab: "party", badge: null },
    { label: "Inventory", icon: Briefcase, tab: "avatar", badge: null },
    { label: "Messages", icon: MessageSquare, action: onOpenContact, badge: "3" },
    { label: "Create", icon: Code, tab: "charts", badge: null },
    { label: "Blog", icon: FileText, tab: "home", badge: null },
    { label: "Learn", icon: GraduationCap, tab: "avatar", badge: null },
    { label: "Buy Gift Cards", icon: Gift, action: onOpenContact, badge: null },
    { label: "Official Store", icon: Store, tab: "charts", badge: null },
    { label: "Settings", icon: Settings, tab: "home", badge: null },
    { label: "About", icon: Info, tab: "home", badge: null },
    { label: "Help & Safety", icon: ShieldAlert, action: onOpenContact, badge: null },
    { label: "Quick Sign-in", icon: LogIn, action: onOpenContact, badge: null },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
        <h1 className="font-montserrat text-3xl font-black text-[var(--text-main)]">More</h1>
        <span className="text-xs font-bold text-[var(--text-muted)]">Roblox Menu Ecosystem</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {moreCards.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => {
                if (item.action) {
                  item.action();
                } else if (item.tab) {
                  setActiveTab(item.tab);
                }
              }}
              className="roblox-card relative flex flex-col items-center justify-center p-6 text-center h-36 group cursor-pointer"
            >
              {item.badge && (
                <span className="absolute top-2.5 right-2.5 rounded-full bg-black text-white text-[10px] font-black px-2 py-0.5 shadow-sm">
                  {item.badge}
                </span>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg-main)] text-[var(--text-main)] group-hover:bg-[var(--roblox-blue)] group-hover:text-white transition mb-3">
                <Icon size={26} strokeWidth={2} />
              </div>

              <span className="font-montserrat text-xs font-bold text-[var(--text-main)] group-hover:text-[var(--roblox-blue)] transition">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="pt-4 text-center">
        <button
          onClick={onOpenContact}
          className="w-full max-w-md mx-auto flex items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] py-3 text-sm font-bold text-[var(--text-main)] hover:border-[var(--roblox-red)] hover:text-[var(--roblox-red)] transition cursor-pointer"
        >
          <LogOut size={18} />
          <span>Log Out / Close Portfolio</span>
        </button>
      </div>
    </div>
  );
}
