import {
  SiReact,
  SiLaravel,
  SiMysql,
  SiVuedotjs,
  SiVuetify,
  SiWordpress,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiPhp,
  SiInertia,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";
import { Code2 } from "lucide-react";
import { type ComponentType } from "react";

interface IconProps {
  size?: number;
  className?: string;
}

type TechBrandStyle = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

const defaultTechBrandStyle: TechBrandStyle = {
  color: "#64748b",
  backgroundColor: "rgba(100, 116, 139, 0.12)",
  borderColor: "rgba(100, 116, 139, 0.28)",
};

const techBrandStyles: Record<string, TechBrandStyle> = {
  reactjs: { color: "#61DAFB", backgroundColor: "rgba(97, 218, 251, 0.14)", borderColor: "rgba(97, 218, 251, 0.35)" },
  react: { color: "#61DAFB", backgroundColor: "rgba(97, 218, 251, 0.14)", borderColor: "rgba(97, 218, 251, 0.35)" },
  inertia: { color: "#9553E9", backgroundColor: "rgba(149, 83, 233, 0.14)", borderColor: "rgba(149, 83, 233, 0.35)" },
  inertiajs: { color: "#9553E9", backgroundColor: "rgba(149, 83, 233, 0.14)", borderColor: "rgba(149, 83, 233, 0.35)" },
  "next.js": { color: "#111111", backgroundColor: "rgba(17, 17, 17, 0.08)", borderColor: "rgba(17, 17, 17, 0.22)" },
  nextjs: { color: "#111111", backgroundColor: "rgba(17, 17, 17, 0.08)", borderColor: "rgba(17, 17, 17, 0.22)" },
  vuejs: { color: "#4FC08D", backgroundColor: "rgba(79, 192, 141, 0.14)", borderColor: "rgba(79, 192, 141, 0.34)" },
  vue: { color: "#4FC08D", backgroundColor: "rgba(79, 192, 141, 0.14)", borderColor: "rgba(79, 192, 141, 0.34)" },
  "vue.js": { color: "#4FC08D", backgroundColor: "rgba(79, 192, 141, 0.14)", borderColor: "rgba(79, 192, 141, 0.34)" },
  vuetify: { color: "#1867C0", backgroundColor: "rgba(24, 103, 192, 0.14)", borderColor: "rgba(24, 103, 192, 0.34)" },
  laravel: { color: "#FF2D20", backgroundColor: "rgba(255, 45, 32, 0.12)", borderColor: "rgba(255, 45, 32, 0.3)" },
  "laravel php": { color: "#FF2D20", backgroundColor: "rgba(255, 45, 32, 0.12)", borderColor: "rgba(255, 45, 32, 0.3)" },
  php: { color: "#777BB4", backgroundColor: "rgba(119, 123, 180, 0.12)", borderColor: "rgba(119, 123, 180, 0.3)" },
  mysql: { color: "#4479A1", backgroundColor: "rgba(68, 121, 161, 0.12)", borderColor: "rgba(68, 121, 161, 0.3)" },
  postgresql: { color: "#336791", backgroundColor: "rgba(51, 103, 145, 0.12)", borderColor: "rgba(51, 103, 145, 0.3)" },
  postgres: { color: "#336791", backgroundColor: "rgba(51, 103, 145, 0.12)", borderColor: "rgba(51, 103, 145, 0.3)" },
  wordpress: { color: "#21759B", backgroundColor: "rgba(33, 117, 155, 0.12)", borderColor: "rgba(33, 117, 155, 0.3)" },
  html: { color: "#E34F26", backgroundColor: "rgba(227, 79, 38, 0.12)", borderColor: "rgba(227, 79, 38, 0.3)" },
  "html & css": { color: "#E34F26", backgroundColor: "rgba(227, 79, 38, 0.12)", borderColor: "rgba(227, 79, 38, 0.3)" },
  css: { color: "#1572B6", backgroundColor: "rgba(21, 114, 182, 0.12)", borderColor: "rgba(21, 114, 182, 0.3)" },
  bootstrap: { color: "#7952B3", backgroundColor: "rgba(121, 82, 179, 0.12)", borderColor: "rgba(121, 82, 179, 0.3)" },
  "bootstrap & tailwind": { color: "#7952B3", backgroundColor: "rgba(121, 82, 179, 0.12)", borderColor: "rgba(121, 82, 179, 0.3)" },
  tailwind: { color: "#06B6D4", backgroundColor: "rgba(6, 182, 212, 0.12)", borderColor: "rgba(6, 182, 212, 0.3)" },
  "tailwind css": { color: "#06B6D4", backgroundColor: "rgba(6, 182, 212, 0.12)", borderColor: "rgba(6, 182, 212, 0.3)" },
  tailwindcss: { color: "#06B6D4", backgroundColor: "rgba(6, 182, 212, 0.12)", borderColor: "rgba(6, 182, 212, 0.3)" },
  javascript: { color: "#F7DF1E", backgroundColor: "rgba(247, 223, 30, 0.16)", borderColor: "rgba(247, 223, 30, 0.32)" },
  typescript: { color: "#3178C6", backgroundColor: "rgba(49, 120, 198, 0.12)", borderColor: "rgba(49, 120, 198, 0.3)" },
  "node.js": { color: "#339933", backgroundColor: "rgba(51, 153, 51, 0.12)", borderColor: "rgba(51, 153, 51, 0.3)" },
  nodejs: { color: "#339933", backgroundColor: "rgba(51, 153, 51, 0.12)", borderColor: "rgba(51, 153, 51, 0.3)" },
  python: { color: "#3776AB", backgroundColor: "rgba(55, 118, 171, 0.12)", borderColor: "rgba(55, 118, 171, 0.3)" },
  docker: { color: "#2496ED", backgroundColor: "rgba(36, 150, 237, 0.12)", borderColor: "rgba(36, 150, 237, 0.3)" },
  git: { color: "#F05032", backgroundColor: "rgba(240, 80, 50, 0.12)", borderColor: "rgba(240, 80, 50, 0.3)" },
  github: { color: "#111111", backgroundColor: "rgba(17, 17, 17, 0.08)", borderColor: "rgba(17, 17, 17, 0.22)" },
  figma: { color: "#F24E1E", backgroundColor: "rgba(242, 78, 30, 0.12)", borderColor: "rgba(242, 78, 30, 0.3)" },
};

export function getTechBrandStyle(name: string): TechBrandStyle {
  return techBrandStyles[name.toLowerCase().trim()] ?? defaultTechBrandStyle;
}

const techIconMap: Record<string, ComponentType<IconProps>> = {
  "reactjs": SiReact,
  "react": SiReact,
  "inertia": SiInertia,
  "inertiajs": SiInertia,
  "next.js": SiNextdotjs,
  "nextjs": SiNextdotjs,
  "vuejs": SiVuedotjs,
  "vue": SiVuedotjs,
  "vue.js": SiVuedotjs,
  vuetify: SiVuetify,
  "laravel": SiLaravel,
  "laravel php": SiLaravel,
  "php": SiPhp,
  "mysql": SiMysql,
  "postgresql": SiPostgresql,
  "postgres": SiPostgresql,
  "wordpress": SiWordpress,
  "html": SiHtml5,
  "html & css": SiHtml5,
  "css": SiCss,
  "bootstrap": SiBootstrap,
  "bootstrap & tailwind": SiBootstrap,
  "tailwind": SiTailwindcss,
  "tailwind css": SiTailwindcss,
  "tailwindcss": SiTailwindcss,
  "javascript": SiJavascript,
  "typescript": SiTypescript,
  "node.js": SiNodedotjs,
  "nodejs": SiNodedotjs,
  "python": SiPython,
  "docker": SiDocker,
  "git": SiGit,
  "github": SiGithub,
  "figma": SiFigma,
};

export function TechIcon({ name, size = 12, className = "" }: { name: string; size?: number; className?: string }) {
  const key = name.toLowerCase().trim();
  const Icon = techIconMap[key];
  if (Icon) return <Icon size={size} className={className} />;
  return <Code2 size={size} className={className} />;
}
