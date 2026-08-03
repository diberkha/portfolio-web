"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectModal from "@/components/ProjectModal";
import {
  PortfolioData,
  Project,
  fallbackData,
  getPortfolioData,
} from "@/lib/portfolio";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Globe,
  Award,
  GraduationCap,
  MapPin,
  MoreHorizontal,
  Calendar,
  Building2,
  Mail,
  Phone,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { TechIcon, getTechBrandStyle } from "@/lib/techIcons";
export default function Home() {
  const [data, setData] = useState<PortfolioData>(fallbackData);
  const [activeSection, setActiveSection] = useState<string>("top");
  const [activeTab, setActiveTab] = useState<"about" | "creations">("about");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isBioExpanded, setIsBioExpanded] = useState<boolean>(false);
  const [showMoreContact, setShowMoreContact] = useState<boolean>(false);
  const [avatarError, setAvatarError] = useState<boolean>(false);
  const [language, setLanguage] = useState<"English" | "Bahasa Indonesia">(
    "English",
  );
  const certScrollRef = useRef<HTMLDivElement>(null);
  const expScrollRef = useRef<HTMLDivElement>(null);
  const [expScrollState, setExpScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: false,
  });
  const [certScrollState, setCertScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: false,
  });

  const updateScrollState = (
    ref: React.RefObject<HTMLDivElement | null>,
    setState: React.Dispatch<
      React.SetStateAction<{
        canScrollLeft: boolean;
        canScrollRight: boolean;
      }>
    >,
  ) => {
    const element = ref.current;

    if (!element) {
      setState({ canScrollLeft: false, canScrollRight: false });
      return;
    }

    const hasOverflow = element.scrollWidth > element.clientWidth + 1;
    const maxScrollLeft = element.scrollWidth - element.clientWidth;
    const scrollLeft = element.scrollLeft;

    setState({
      canScrollLeft: hasOverflow && scrollLeft > 0,
      canScrollRight: hasOverflow && scrollLeft < maxScrollLeft - 1,
    });
  };

  const scrollCerts = (dir: "left" | "right") => {
    if (certScrollRef.current) {
      certScrollRef.current.scrollBy({
        left: dir === "right" ? 200 : -200,
        behavior: "smooth",
      });
    }
  };
  const scrollExps = (dir: "left" | "right") => {
    if (expScrollRef.current) {
      expScrollRef.current.scrollBy({
        left: dir === "right" ? 200 : -200,
        behavior: "smooth",
      });
    }
  };
  const isIndo = language === "Bahasa Indonesia";
  useEffect(() => {
    getPortfolioData().then((res) => {
      if (res) setData(res);
    });
  }, []);
  useEffect(() => {
    const updateAllScrollStates = () => {
      updateScrollState(expScrollRef, setExpScrollState);
      updateScrollState(certScrollRef, setCertScrollState);
    };

    updateAllScrollStates();
    window.addEventListener("resize", updateAllScrollStates);

    return () => {
      window.removeEventListener("resize", updateAllScrollStates);
    };
  }, [data.experiences.length, data.certificates.length, activeTab]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -40% 0px" },
    );
    const sections = ["experiences", "projects", "certifications"].map((id) =>
      document.getElementById(id),
    );
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom && activeTab === "about") {
        setActiveSection("certifications");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeTab]);
  const scrollToSection = (id: string) => {
    setActiveTab("about");
    setActiveSection(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  };
  const filteredProjects = data.projects.filter((p) => {
    return categoryFilter === "All" || p.category === categoryFilter;
  });
  const deployedProjects = filteredProjects.filter((p) => p.isDeployed);
  const categories = ["All", "Web Apps", "CMS"];
  const fullBio = isIndo ? data.profile.summary.id : data.profile.summary.en;
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
  const getProjectBackgroundColor = (projectId: number) => {
    const timeIndex = projectTimeOrder.indexOf(projectId);
    const paletteIndex = timeIndex >= 0 ? timeIndex : projectId - 1;
    return projectBackgroundColors[paletteIndex % projectBackgroundColors.length];
  };
  return (
    <div
      id="top"
      className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-200 flex flex-col justify-between"
    >
      <div>
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onNavigateToTab={setActiveTab}
        />
        <main className="max-w-5xl mx-auto px-4 py-6 sm:px-6 space-y-8 pb-16">
          <section className="space-y-4">
            <div className="relative h-44 sm:h-56 w-full rounded-2xl bg-[#D3D7DC] dark:bg-[#232527] border border-[var(--border-color)] overflow-hidden" />
            <div className="flex flex-col gap-3 pt-1">
              <div className="flex items-end justify-between gap-3">
                <div className="flex items-end gap-3">
                  <div className="relative -mt-12 sm:-mt-16 flex-shrink-0 z-10">
                    <div className="relative h-20 w-20 sm:h-28 sm:w-28 overflow-hidden rounded-full border-4 border-[var(--bg-main)] bg-[#D3D7DC] dark:bg-[#232527] shadow-md flex items-center justify-center">
                      {!avatarError ? (
                        <Image
                          src="/img/avatar.png"
                          alt={data.profile.displayName}
                          fill
                          className="object-cover"
                          onError={() => setAvatarError(true)}
                          priority
                        />
                      ) : (
                        <span className="font-montserrat font-black text-2xl text-[var(--text-muted)]">
                          DP
                        </span>
                      )}
                    </div>
                    <span
                      className="absolute bottom-1 right-1 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-emerald-500 ring-2 ring-[var(--bg-main)] z-20 shadow-sm"
                      title="Online"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h1 className="font-montserrat text-xl sm:text-3xl font-black text-[var(--text-main)] leading-tight">
                        {data.profile.displayName}
                      </h1>
                      <CheckCircle2
                        size={18}
                        className="text-[var(--roblox-blue)] fill-[var(--roblox-blue)]/20 flex-shrink-0"
                      />
                    </div>
                    <p className="text-xs font-bold text-[var(--text-muted)] mt-0.5">
                      @{data.profile.username}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex flex-wrap items-center gap-2.5">
                  <a
                    href={data.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="roblox-pill-btn flex items-center justify-center gap-1.5 cursor-pointer text-xs font-bold"
                  >
                    <SiGithub size={14} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={data.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="roblox-pill-btn flex items-center justify-center gap-1.5 cursor-pointer text-xs font-bold"
                  >
                    <FaLinkedin size={14} />
                    <span>LinkedIn</span>
                  </a>
                  <div className="relative">
                    <button
                      onClick={() => setShowMoreContact(!showMoreContact)}
                      className="roblox-pill-btn flex items-center justify-center px-2.5 cursor-pointer"
                    >
                      <MoreHorizontal size={16} />
                    </button>
                    {showMoreContact && (
                      <div className="absolute right-0 mt-2 w-56 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-3 shadow-xl z-50 animate-modal text-xs">
                        <p className="font-bold text-[var(--text-main)] mb-2 border-b border-[var(--border-color)] pb-1">
                          {isIndo ? "Kontak" : "Contacts"}
                        </p>
                        <a
                          href={`mailto:${data.contact.email}`}
                          className="flex items-center gap-2 py-1 text-[var(--text-muted)] hover:text-[var(--hover-gray)]"
                        >
                          <Mail size={14} />
                          <span className="truncate">{data.contact.email}</span>
                        </a>
                        <a
                          href={`tel:${data.contact.phone}`}
                          className="flex items-center gap-2 py-1 text-[var(--text-muted)] hover:text-[var(--hover-gray)]"
                        >
                          <Phone size={14} />
                          <span>{data.contact.phone}</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex sm:hidden flex-wrap items-center gap-2">
                <a
                  href={data.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="roblox-pill-btn flex-1 flex items-center justify-center gap-1.5 cursor-pointer text-xs font-bold"
                >
                  <SiGithub size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href={data.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="roblox-pill-btn flex-1 flex items-center justify-center gap-1.5 cursor-pointer text-xs font-bold"
                >
                  <FaLinkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <div className="relative">
                  <button
                    onClick={() => setShowMoreContact(!showMoreContact)}
                    className="roblox-pill-btn flex items-center justify-center px-2.5 cursor-pointer"
                  >
                    <MoreHorizontal size={16} />
                  </button>
                  {showMoreContact && (
                    <div className="absolute right-0 mt-2 w-56 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-3 shadow-xl z-50 animate-modal text-xs">
                      <p className="font-bold text-[var(--text-main)] mb-2 border-b border-[var(--border-color)] pb-1">
                        {isIndo ? "Kontak" : "Contacts"}
                      </p>
                      <a
                        href={`mailto:${data.contact.email}`}
                        className="flex items-center gap-2 py-1 text-[var(--text-muted)] hover:text-[var(--hover-gray)]"
                      >
                        <Mail size={14} />
                        <span className="truncate">{data.contact.email}</span>
                      </a>
                      <a
                        href={`tel:${data.contact.phone}`}
                        className="flex items-center gap-2 py-1 text-[var(--text-muted)] hover:text-[var(--hover-gray)]"
                      >
                        <Phone size={14} />
                        <span>{data.contact.phone}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
              <button
                onClick={() => scrollToSection("experiences")}
                className="rounded-lg bg-[var(--pill-bg)] hover:bg-[var(--hover-gray)] hover:text-white transition px-3.5 py-1 text-[var(--pill-text)] cursor-pointer shadow-xs"
              >
                {data.experiences.length}{" "}
                  {isIndo ? "Pengalaman" : "Job Experiences"}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="rounded-lg bg-[var(--pill-bg)] hover:bg-[var(--hover-gray)] hover:text-white transition px-3.5 py-1 text-[var(--pill-text)] cursor-pointer shadow-xs"
              >
                {data.projects.length} {isIndo ? "Proyek" : "Projects"}
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="rounded-lg bg-[var(--pill-bg)] hover:bg-[var(--hover-gray)] hover:text-white transition px-3.5 py-1 text-[var(--pill-text)] cursor-pointer shadow-xs"
              >
                {data.certificates.length}{" "}
                {isIndo ? "Sertifikat" : "Certificates"}
              </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-xs font-bold text-[var(--text-muted)] pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin size={15} className="text-red-500" />
                <span>
                  {isIndo ? data.profile.location.id : data.profile.location.en}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap
                  size={15}
                  className="text-[var(--roblox-blue)]"
                />
                <span>
                  {isIndo
                    ? data.profile.education.institution.id
                    : data.profile.education.institution.en}
                </span>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed pt-1">
              <p className={isBioExpanded ? "" : "line-clamp-2"}>{fullBio}</p>
              <button
                onClick={() => setIsBioExpanded(!isBioExpanded)}
                className="mt-1 font-bold text-[var(--text-main)] hover:underline text-xs cursor-pointer"
              >
                {isBioExpanded
                  ? isIndo
                    ? "sembunyikan"
                    : "less"
                  : isIndo
                    ? "selengkapnya"
                    : "more"}
              </button>
            </div>
            <div className="flex items-center gap-8 border-b border-[var(--border-color)] pt-3 font-montserrat font-black text-sm text-[var(--text-main)]">
              <button
                onClick={() => setActiveTab("about")}
                className={`pb-3 relative cursor-pointer ${
                  activeTab === "about"
                    ? "text-[var(--text-main)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                }`}
              >
                {isIndo ? "Tentang" : "About"}
                {activeTab === "about" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--text-main)]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("creations")}
                className={`pb-3 relative cursor-pointer ${
                  activeTab === "creations"
                    ? "text-[var(--text-main)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                }`}
              >
                {isIndo ? "Kreasi" : "Creations"}
                {activeTab === "creations" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--text-main)]" />
                )}
              </button>
            </div>
          </section>
          {activeTab === "about" && (
            <div className="space-y-12">
              <section id="experiences" className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-montserrat text-xl font-black text-[var(--text-main)]">
                    {isIndo ? "Pengalaman Kerja" : "Job Experiences"}
                  </h2>
                  <div className="flex items-center gap-1 text-[var(--text-muted)]">
                    <button
                      onClick={() => scrollExps("left")}
                      disabled={!expScrollState.canScrollLeft}
                      className="p-1 transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => scrollExps("right")}
                      disabled={!expScrollState.canScrollRight}
                      className="p-1 transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
                <div
                  ref={expScrollRef}
                  onScroll={() => updateScrollState(expScrollRef, setExpScrollState)}
                  className="flex gap-4 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth"
                >
                  {data.experiences.map((exp, i) => (
                    <div
                      key={exp.id}
                      className="roblox-card p-3 sm:p-4 flex flex-col justify-between shadow-sm group flex-shrink-0 w-[160px] sm:w-[200px] animate-card-in"
                      style={{ animationDelay: `${i * 40}ms`, opacity: 0 }}
                    >
                      <div className="space-y-3">
                        <div className="aspect-square w-full rounded-xl border border-[var(--border-color)] flex items-center justify-center text-white shadow-xs group-hover:scale-102 transition overflow-hidden bg-white">
                          {exp.image ? (
                            <Image
                              src={exp.image}
                              alt={exp.companyOrName}
                              width={80}
                              height={80}
                              className="w-full h-full object-contain p-1.5"
                            />
                          ) : (
                            <div
                              className="w-full h-full flex items-center justify-center"
                              style={{ backgroundColor: exp.avatarColor }}
                            >
                              <Building2 size={32} strokeWidth={1.8} />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-montserrat text-[11px] font-black text-[var(--text-main)] group-hover:text-[var(--hover-gray)] transition leading-tight line-clamp-2">
                            {exp.companyOrName}
                          </h3>
                          <p className="text-[10px] font-extrabold text-[var(--roblox-blue)] mt-1">
                            {isIndo ? exp.role.id : exp.role.en}
                          </p>
                        </div>
                      </div>
                      <div className="border-t border-[var(--border-color)] pt-2 space-y-1 text-[9px] font-semibold text-[var(--text-muted)] mt-2">
                        <div className="flex items-center gap-1">
                          <MapPin
                            size={10}
                            className="text-red-500 flex-shrink-0"
                          />
                          <span className="truncate">
                            {isIndo ? exp.location.id : exp.location.en}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 font-bold text-[8px] text-[var(--pill-text)]">
                          <Calendar
                            size={10}
                            className="text-emerald-500 flex-shrink-0"
                          />
                          <span>{isIndo ? exp.period.id : exp.period.en}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section id="projects" className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-montserrat text-xl font-black text-[var(--text-main)]">
                    {isIndo ? "Proyek" : "Projects"}
                  </h2>
                  <button
                    onClick={() => setActiveTab("creations")}
                    className="flex items-center gap-1 text-xs font-bold text-[var(--text-main)] hover:text-[var(--hover-gray)] transition cursor-pointer"
                  >
                    {isIndo ? "Lihat Semua" : "See All"} (
                    {filteredProjects.length})
                    <ChevronRight size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                  {deployedProjects.map((project, i) => (
                    <div
                      key={project.id}
                      onClick={() => {
                        setSelectedProject(project);
                      }}
                      className="roblox-card overflow-hidden flex flex-col justify-between cursor-pointer group shadow-sm animate-card-in"
                      style={{ animationDelay: `${i * 40}ms`, opacity: 0 }}
                    >
                      <div>
                        <div
                          className="relative aspect-video w-full overflow-hidden border-b border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)]"
                          style={{
                            backgroundColor: getProjectBackgroundColor(project.id),
                          }}
                        >
                          <Image
                            src={project.thumbnailUrl}
                            alt={project.title}
                            fill
                            className="object-contain p-3 sm:p-4 group-hover:scale-105 transition duration-300"
                          />
                          <span className="absolute top-2.5 left-2.5 rounded-md bg-black/75 px-2 py-0.5 text-[10px] font-black text-white backdrop-blur-md z-10">
                            {project.badgePrefix}
                          </span>
                        </div>
                        <div className="p-4 space-y-2">
                          <h3 className="font-montserrat text-base font-black text-[var(--text-main)] group-hover:text-[var(--hover-gray)] transition line-clamp-1">
                            {project.title}
                          </h3>
                          {project.demoUrl && (
                            <p className="text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 min-w-0">
                              <Globe size={11} className="flex-shrink-0" />
                              <span className="truncate">
                                {project.demoUrl.replace(/^https?:\/\//, "")}
                              </span>
                            </p>
                          )}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.stack.map((stk) => (
                              <span
                                key={stk}
                                className="inline-flex items-center gap-1 rounded-md border border-[var(--border-color)] bg-[var(--bg-main)] px-2 py-0.5 text-[10px] font-black text-[var(--text-muted)]"
                              >
                                <span style={{ color: getTechBrandStyle(stk).color }} className="flex items-center justify-center">
                                  <TechIcon name={stk} size={10} />
                                </span>
                                {stk}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-[var(--border-color)] bg-[var(--bg-main)] px-3 py-2 flex items-center justify-between gap-1 text-xs font-bold text-[var(--text-muted)]">
                        <span className="flex items-center gap-1 text-[10px] leading-tight">
                          <Calendar size={11} className="flex-shrink-0" />
                          <span>
                            {isIndo
                              ? project.createdDate.id
                              : project.createdDate.en}
                          </span>
                        </span>
                        <span className="text-[var(--roblox-blue)] group-hover:translate-x-0.5 transition flex items-center gap-0.5 text-[11px] whitespace-nowrap flex-shrink-0">
                          {isIndo ? "Rincian" : "Details"}
                          <ChevronRight size={13} />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section id="certifications" className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-montserrat text-xl font-black text-[var(--text-main)]">
                    {isIndo ? "Sertifikasi" : "Certifications"}
                  </h2>
                  <div className="flex items-center gap-1 text-[var(--text-muted)]">
                    <button
                      onClick={() => scrollCerts("left")}
                      disabled={!certScrollState.canScrollLeft}
                      className="p-1 transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => scrollCerts("right")}
                      disabled={!certScrollState.canScrollRight}
                      className="p-1 transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
                <div
                  ref={certScrollRef}
                  onScroll={() => updateScrollState(certScrollRef, setCertScrollState)}
                  className="flex gap-6 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth"
                >
                  {data.certificates.map((cert, i) => (
                    <div
                      key={cert.id}
                      className="flex flex-col items-center text-center gap-1 min-w-[160px] sm:min-w-[180px] max-w-[200px] group animate-card-in"
                      style={{ animationDelay: `${i * 40}ms`, opacity: 0 }}
                    >
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-[var(--border-color)] bg-white shadow-sm mb-1 overflow-hidden p-1">
                        {cert.image ? (
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            width={80}
                            height={80}
                            className="w-full h-full object-contain transition duration-200 group-hover:scale-110"
                          />
                        ) : (
                          <Award
                            size={36}
                            strokeWidth={1.8}
                            className="text-amber-500 transition duration-200 group-hover:scale-110"
                          />
                        )}
                      </div>
                      <span className="w-full font-montserrat text-xs font-black text-[var(--text-main)] leading-tight">
                        {cert.title}
                      </span>
                      <span className="w-full text-[10px] font-bold text-[var(--text-muted)] leading-tight mt-0.5">
                        {isIndo ? cert.issuer.id : cert.issuer.en}
                      </span>
                      <span className="w-full text-[10px] font-semibold text-[var(--roblox-blue)] mt-0.5">
                        {isIndo ? cert.date.id : cert.date.en}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
          {activeTab === "creations" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                <h2 className="font-montserrat text-lg font-black text-[var(--text-main)]">
                  {isIndo ? "Semua Proyek" : "All Projects"}
                </h2>
                <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className={`rounded-lg px-3.5 py-1.5 font-montserrat text-xs font-black transition cursor-pointer ${
                        categoryFilter === cat
                          ? "bg-[var(--roblox-blue)] text-white shadow-sm"
                          : "border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                {filteredProjects.map((project, i) => (
                  <div
                    key={`${categoryFilter}-${project.id}`}
                    onClick={() => {
                      setSelectedProject(project);
                    }}
                    className="roblox-card overflow-hidden flex flex-col justify-between cursor-pointer group shadow-sm animate-card-in"
                    style={{ animationDelay: `${i * 40}ms`, opacity: 0 }}
                  >
                    <div>
                      <div
                        className="relative aspect-video w-full overflow-hidden border-b border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)]"
                        style={{
                            backgroundColor: getProjectBackgroundColor(project.id),
                        }}
                      >
                        <Image
                          src={project.thumbnailUrl}
                          alt={project.title}
                          fill
                          className="object-contain p-3 sm:p-4 group-hover:scale-105 transition duration-300"
                        />
                        <span className="absolute top-2.5 left-2.5 rounded-md bg-black/75 px-2 py-0.5 text-[10px] font-black text-white backdrop-blur-md z-10">
                          {project.badgePrefix}
                        </span>
                      </div>
                      <div className="p-4 space-y-2">
                        <h3 className="font-montserrat text-base font-black text-[var(--text-main)] group-hover:text-[var(--hover-gray)] transition line-clamp-1">
                          {project.title}
                        </h3>
                        {project.demoUrl && (
                          <p className="text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 min-w-0">
                            <Globe size={11} className="flex-shrink-0" />
                            <span className="truncate">
                              {project.demoUrl.replace(/^https?:\/\//, "")}
                            </span>
                          </p>
                        )}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.stack.map((stk) => (
                            <span
                              key={stk}
                              className="inline-flex items-center gap-1 rounded-md border border-[var(--border-color)] bg-[var(--bg-main)] px-2 py-0.5 text-[10px] font-black text-[var(--text-muted)]"
                            >
                              <span style={{ color: getTechBrandStyle(stk).color }} className="flex items-center justify-center">
                                <TechIcon name={stk} size={10} />
                              </span>
                              {stk}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-[var(--border-color)] bg-[var(--bg-main)] px-3 py-2 flex items-center justify-between gap-1 text-xs font-bold text-[var(--text-muted)]">
                      <span className="flex items-center gap-1 text-[10px] leading-tight">
                        <Calendar size={11} className="flex-shrink-0" />
                        <span>
                          {isIndo
                            ? project.createdDate.id
                            : project.createdDate.en}
                        </span>
                      </span>
                      <span className="text-[var(--roblox-blue)] group-hover:translate-x-0.5 transition flex items-center gap-0.5 text-[11px] whitespace-nowrap flex-shrink-0">
                        {isIndo ? "Rincian" : "Details"}
                        <ChevronRight size={13} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
      <footer className="border-t border-[var(--border-color)] bg-[var(--bg-main)] py-6 px-4 sm:px-8 transition-colors duration-200">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative">
            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value as "English" | "Bahasa Indonesia")
              }
              className="appearance-none rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-2 pr-9 text-xs font-bold text-[var(--text-main)] focus:border-[var(--roblox-blue)] focus:outline-none transition cursor-pointer shadow-xs"
            >
              <option value="English">English</option>
              <option value="Bahasa Indonesia">Bahasa Indonesia</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]"
            />
          </div>
          <p className="text-xs font-medium text-[var(--text-muted)]/75 text-center sm:text-right">
            © 2026 <span className="font-black text-[var(--text-muted)]">Diberkha Sajna Puwa</span>. <span className="font-normal">All rights reserved.</span>
          </p>
        </div>
      </footer>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={language}
      />
    </div>
  );
}
