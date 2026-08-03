"use client";

import { Project } from "@/lib/portfolio";
import Image from "next/image";
import { useState } from "react";
import { X, ExternalLink, Calendar, Globe, Code2, Image as ImageIcon, ChevronLeft, ChevronRight, Layers, AppWindow } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { TechIcon, getTechBrandStyle } from "@/lib/techIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang?: "English" | "Bahasa Indonesia";
}

const projectBackgroundColors = [
  "#FCA5A5",
  "#FDBA74",
  "#FDE68A",
  "#86EFAC",
  "#93C5FD",
  "#C4B5FD",
  "#D8B4FE",
];

const projectTimeOrder = [6, 5, 4, 3, 2, 1];

export default function ProjectModal({ project, onClose, lang = "English" }: ProjectModalProps) {
  const [previewIndex, setPreviewIndex] = useState(0);

  if (!project) return null;

  const isIndo = lang === "Bahasa Indonesia";
  const previewImages = project.previewImages ?? [];
  const canNavigatePreview = previewImages.length > 1;
  const timeIndex = projectTimeOrder.indexOf(project.id);
  const backgroundColor = projectBackgroundColors[(timeIndex >= 0 ? timeIndex : project.id - 1) % projectBackgroundColors.length];

  const prevPreview = () => setPreviewIndex((i) => (i - 1 + previewImages.length) % previewImages.length);
  const nextPreview = () => setPreviewIndex((i) => (i + 1) % previewImages.length);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/65 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl animate-modal my-4 mx-3 sm:mx-4 sm:my-6">

        <div className="flex items-center justify-between border-b border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 rounded-t-2xl">
          <div className="flex items-center gap-2 text-xs font-black text-[var(--text-main)]">
            <Code2 size={18} className="text-[var(--roblox-blue)]" />
            <span>{isIndo ? "Rincian Proyek" : "Project Details"}</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text-main)] transition cursor-pointer"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-5">

          <div className="flex flex-col sm:flex-row gap-4 items-stretch">

            <div className="w-full sm:w-1/2 flex">
              <div
                className="relative w-full aspect-video sm:aspect-auto sm:min-h-[200px] rounded-xl border border-[var(--border-color)] overflow-hidden flex-1"
                style={{ backgroundColor }}
              >
                <Image src={project.thumbnailUrl} alt={project.title} fill className="object-contain p-3" />
                <span className="absolute top-2.5 left-2.5 rounded-md bg-black/75 px-2.5 py-0.5 text-[10px] font-black text-white backdrop-blur-md z-10">
                  {project.badgePrefix}
                </span>
              </div>
            </div>

            <div className="w-full sm:w-1/2 flex flex-col justify-between gap-3">
              <div className="space-y-2">
                <h2 className="font-montserrat text-xl sm:text-2xl font-black text-[var(--text-main)] leading-tight">
                  {project.title}
                </h2>

                {project.demoUrl && (
                  <p className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Globe size={13} />
                    {project.demoUrl.replace(/^https?:\/\//, "")}
                  </p>
                )}

                <div className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] px-3 py-1.5 text-xs font-bold text-[var(--text-muted)]">
                  <Calendar size={14} className="text-[var(--roblox-blue)]" />
                  <span>{isIndo ? project.createdDate.id : project.createdDate.en}</span>
                </div>
              </div>

              <div className="space-y-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="roblox-btn-play flex items-center justify-center gap-2 py-2.5 text-xs shadow-md cursor-pointer w-full hover:text-[var(--hover-gray)]"
                  >
                    <Globe size={16} />
                    <span>{isIndo ? "KUNJUNGI WEBSITE" : "VISIT WEBSITE"}</span>
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] py-2 text-xs font-extrabold text-[var(--text-main)] hover:border-[var(--hover-gray)] hover:text-[var(--hover-gray)] transition cursor-pointer w-full"
                  >
                    <SiGithub size={15} />
                    <span>{isIndo ? "LIHAT REPOSITORI" : "VIEW REPOSITORY"}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--border-color)] pt-4 space-y-2">
            <h3 className="font-montserrat text-sm font-black text-[var(--text-main)]">
              {isIndo ? "Deskripsi" : "Description"}
            </h3>
            <p className="text-xs leading-relaxed text-[var(--text-muted)] whitespace-pre-line">
              {isIndo ? project.description.id : project.description.en}
            </p>
          </div>

          <div className="border-t border-[var(--border-color)] pt-4 space-y-2.5">
            <h3 className="font-montserrat text-sm font-black text-[var(--text-main)]">
              {isIndo ? "Teknologi" : "Technologies"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] px-3 py-1 font-montserrat text-xs font-black text-[var(--text-muted)]"
                >
                  <span style={{ color: getTechBrandStyle(tech).color }} className="flex items-center justify-center">
                    <TechIcon name={tech} size={13} />
                  </span>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--border-color)] pt-4 space-y-2.5">
            <h3 className="font-montserrat text-sm font-black text-[var(--text-main)]">
              Role
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] px-3 py-1 font-montserrat text-xs font-black text-[var(--text-muted)]">
                {project.role === "fullstack" ? (
                  <>
                    <span className="flex items-center justify-center text-rose-500">
                      <Layers size={13} />
                    </span>
                    Fullstack Developer
                  </>
                ) : (
                  <>
                    <span className="flex items-center justify-center text-sky-500">
                      <AppWindow size={13} />
                    </span>
                    Frontend Developer
                  </>
                )}
              </span>
            </div>
          </div>

          <div className="border-t border-[var(--border-color)] pt-4 space-y-3">
            <h3 className="font-montserrat text-sm font-black text-[var(--text-main)]">
              {isIndo ? "Pratinjau" : "Preview"}
            </h3>

            <div className="relative">
              <button
                onClick={prevPreview}
                disabled={!canNavigatePreview}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] shadow-lg transition cursor-pointer hover:bg-[var(--hover-gray)] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-[var(--bg-card)] disabled:hover:text-[var(--text-main)]"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextPreview}
                disabled={!canNavigatePreview}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] shadow-lg transition cursor-pointer hover:bg-[var(--hover-gray)] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-[var(--bg-card)] disabled:hover:text-[var(--text-main)]"
              >
                <ChevronRight size={18} />
              </button>

              {previewImages.length > 0 ? (
                <div className="relative w-full flex justify-center rounded-xl overflow-hidden border border-[var(--border-color)] shadow-sm">
                  <Image
                    src={previewImages[previewIndex]}
                    alt={`${project.title} preview ${previewIndex + 1}`}
                    width={1400}
                    height={900}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full rounded-xl bg-[#E3E5E8] dark:bg-[#191B1D] border border-[var(--border-color)] flex flex-col items-center justify-center p-3 text-[var(--text-muted)] text-[10px] font-bold">
                  <ImageIcon size={28} className="mb-1 opacity-40" />
                  <span>Preview</span>
                </div>
              )}

              <div className="flex justify-center gap-1.5 mt-2">
                {previewImages.length > 0 ? previewImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPreviewIndex(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${i === previewIndex ? "w-4 bg-[var(--hover-gray)]" : "w-1.5 bg-[var(--border-color)]"}`}
                  />
                )) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
