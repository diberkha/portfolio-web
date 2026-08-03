"use client";

import { Skill } from "@/lib/portfolio";
import { Award, Star, Code2 } from "lucide-react";
import { type ComponentType, useState } from "react";
import {
  SiReact,
  SiVuedotjs,
  SiLaravel,
  SiMysql,
  SiWordpress,
  SiHtml5,
  SiBootstrap,
  SiFigma
} from "react-icons/si";

interface SkillsBadgesProps {
  skills: Skill[];
}

type IconProps = {
  size?: number;
  className?: string;
};

const iconMap: Record<string, ComponentType<IconProps>> = {
  SiReact,
  SiVuedotjs,
  SiLaravel,
  SiMysql,
  SiWordpress,
  SiHtml5,
  SiBootstrap,
  SiFigma,
};

export default function SkillsBadges({ skills }: SkillsBadgesProps) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const getRarityBadgeStyle = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "border-amber-500/50 bg-gradient-to-br from-amber-500/10 to-orange-500/10 text-amber-600 dark:text-amber-400";
      case "Epic":
        return "border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 text-purple-600 dark:text-purple-400";
      case "Rare":
        return "border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400";
      default:
        return "border-emerald-500/50 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400";
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-montserrat text-xl font-black text-[var(--text-main)]">
            Badges & Skill Inventory
          </h2>
          <p className="text-xs font-semibold text-[var(--text-muted)]">
            Technical competencies and frameworks
          </p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-black text-amber-500">
          <Award size={16} />
          {skills.length} Badges
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skills.map((skill) => {
          const IconComponent = iconMap[skill.iconName] || Code2;
          const rarityStyle = getRarityBadgeStyle(skill.rarity);

          return (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className="roblox-card p-4 flex flex-col items-center text-center cursor-pointer group hover:border-[var(--roblox-blue)] shadow-sm"
            >
              <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 ${rarityStyle} shadow-sm transition group-hover:scale-110 mb-3`}>
                <IconComponent size={26} />
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black/80 text-[9px] font-black text-amber-400 border border-amber-500">
                  <Star size={9} fill="currentColor" />
                </span>
              </div>

              <h4 className="font-montserrat text-xs font-black text-[var(--text-main)] group-hover:text-[var(--roblox-blue)] transition">
                {skill.name}
              </h4>
              
              <span className={`mt-1 rounded-md px-2 py-0.5 text-[9px] font-extrabold uppercase border ${rarityStyle}`}>
                {skill.rarity}
              </span>
            </div>
          );
        })}
      </div>

      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-2xl animate-modal text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-amber-500 bg-amber-500/10 text-amber-500 shadow-md">
              <Award size={36} />
            </div>

            <div>
              <span className="rounded-lg bg-amber-500/20 px-3 py-1 text-xs font-black text-amber-500 uppercase tracking-wider">
                {selectedSkill.rarity} Badge
              </span>
              <h3 className="font-montserrat text-xl font-black text-[var(--text-main)] mt-2">
                {selectedSkill.name}
              </h3>
              <p className="text-xs font-bold text-[var(--roblox-blue)] mt-0.5">
                Category: {selectedSkill.category}
              </p>
            </div>

            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {selectedSkill.description}
            </p>

            <button
              onClick={() => setSelectedSkill(null)}
              className="w-full rounded-lg bg-[var(--roblox-blue)] py-2 font-montserrat font-bold text-xs text-white hover:opacity-90 transition cursor-pointer"
            >
              Close Badge Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
