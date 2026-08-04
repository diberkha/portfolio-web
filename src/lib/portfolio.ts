export type Project = {
  id: number;
  badgePrefix: string;
  title: string;
  description: { en: string; id: string };
  category: "Web Apps" | "CMS";
  role: "fullstack" | "frontend";
  thumbnailUrl: string;
  previewImages?: string[];
  demoUrl?: string;
  repoUrl?: string;
  stack: string[];
  createdDate: { en: string; id: string };
  isDeployed: boolean;
  bgColor?: string;
};

export type Experience = {
  id: number;
  companyOrName: string;
  role: { en: string; id: string };
  avatarColor: string;
  period: { en: string; id: string };
  type: 'Work' | 'Internship' | 'Freelance';
  location: { en: string; id: string };
  image?: string;
  bgColor?: string;
};

export type Certificate = {
  id: number;
  title: string;
  issuer: { en: string; id: string };
  date: { en: string; id: string };
  image?: string;
};

export type Education = {
  institution: { en: string; id: string };
};

export type Profile = {
  username: string;
  displayName: string;
  summary: { en: string; id: string };
  location: { en: string; id: string };
  education: Education;
};

export type PortfolioData = {
  profile: Profile;
  projects: Project[];
  experiences: Experience[];
  certificates: Certificate[];
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
};

export const fallbackData: PortfolioData = {
  profile: {
    username: "diberkha",
    displayName: "Diberkha Sajna Puwa",
    summary: {
      en: "I am a Diploma III graduate in Informatics Engineering from Universitas Sebelas Maret with a focus on web development. I have experience in programming, design, and problem-solving through various projects, and I am continuously improving my skills as a web developer. I work well both independently and collaboratively in a team.",
      id: "Saya merupakan lulusan Diploma III Teknik Informatika dari Universitas Sebelas Maret yang berfokus pada pengembangan web. Saya memiliki pengalaman dalam pemrograman, desain, dan pemecahan masalah melalui berbagai proyek, serta terus mengembangkan kemampuan sebagai web developer. Saya mampu bekerja secara mandiri maupun berkolaborasi dalam tim."
    },
    location: {
      en: "Sragen, Central Java, Indonesia",
      id: "Sragen, Jawa Tengah, Indonesia"
    },
    education: {
      institution: {
        en: "Sebelas Maret University (UNS)",
        id: "Universitas Sebelas Maret (UNS)"
      }
    }
  },
  projects: [
    {
      id: 1,
      badgePrefix: "Web Apps",
      title: "Jaringan Dokumentasi dan Informasi Hukum (JDIH)",
      description: {
        en: "A web-based Legal Documentation and Information Network (JDIH) portal that centralizes hospital regulations, legal documents, and standard operating procedures. Developed to simplify digital document management and information access.",
        id: "Portal Jaringan Dokumentasi dan Informasi Hukum (JDIH) yang menyediakan akses terpusat terhadap regulasi, dokumen hukum, dan standar operasional rumah sakit. Dikembangkan untuk mempermudah pengelolaan serta pencarian dokumen secara digital."
      },
      category: "Web Apps",
      role: "fullstack",
      thumbnailUrl: "/img/logo-jdihrssg.png",
      previewImages: ["/img/jdih-1.png", "/img/jdih-2.png", "/img/jdih-3.png", "/img/jdih-4.png", "/img/jdih-5.png", "/img/jdih-6.png"],
      bgColor: "#e0f2fe",
      demoUrl: "https://jdih.rsudgemolong.com",
      repoUrl: "https://github.com/diberkha/jdih-rssg.git",
      stack: ["ReactJS", "Inertia", "Tailwind CSS", "Laravel PHP", "MySQL"],
      createdDate: { en: "March 2026", id: "Maret 2026" },
      isDeployed: true
    },
    {
      id: 2,
      badgePrefix: "Web Apps",
      title: "E-Office",
      description: {
        en: "An internal document management system designed to handle employee administrative documents, including official decrees, standard operating procedures, and leave requests. It streamlines administrative workflows through digital document management and generation.",
        id: "Sistem persuratan internal yang mendukung pengelolaan dokumen administrasi pegawai, termasuk surat keputusan, SOP, dan pengajuan cuti. Sistem ini membantu mempercepat proses administrasi melalui pengelolaan data dan pembuatan dokumen secara digital."
      },
      category: "Web Apps",
      role: "fullstack",
      thumbnailUrl: "/img/logo-eoffice.png",
      previewImages: ["/img/eoffice-1.png", "/img/eoffice-2.png", "/img/eoffice-3.png", "/img/eoffice-4.png", "/img/eoffice-5.png"],
      bgColor: "#dcfce7",
      repoUrl: "https://github.com/diberkha/e-office.git",
      stack: ["Tailwind CSS", "Laravel PHP", "MySQL"],
      createdDate: { en: "Dec 2025 - Feb 2026", id: "Des 2025 - Feb 2026" },
      isDeployed: true
    },
    {
      id: 3,
      badgePrefix: "Web Apps",
      title: "Clinic Profile Website",
      description: {
        en: "A responsive clinic profile website developed as part of a WordPress Developer skill assessment. The website provides information about healthcare services, doctors, clinic locations, and appointment booking through a clean and user-friendly interface.",
        id: "Website profil klinik yang dikembangkan sebagai bagian dari tes kemampuan WordPress Developer. Website ini menyajikan informasi layanan kesehatan, profil dokter, lokasi klinik, serta formulir janji temu dengan antarmuka yang bersih dan responsif."
      },
      category: "CMS",
      role: "frontend",
      thumbnailUrl: "/img/logo-klinik.png",
      previewImages: ["/img/klinik-1.png", "/img/klinik-2.png", "/img/klinik-3.png", "/img/klinik-4.png"],
      bgColor: "#f3f4f6",
      stack: ["WordPress", "HTML", "CSS"],
      createdDate: { en: "Nov 2025", id: "Nov 2025" },
      isDeployed: false
    },
    {
      id: 4,
      badgePrefix: "Web Apps",
      title: "KENCANA",
      description: {
        en: "A web-based application for monitoring families at risk of stunting through integrated data management, interactive maps, and data visualization. Developed to support data-driven analysis and decision-making.",
        id: "Aplikasi berbasis web yang mendukung pemantauan keluarga berisiko stunting melalui visualisasi data, peta sebaran, dan pengelolaan informasi secara terintegrasi. Dikembangkan untuk membantu proses analisis dan pengambilan keputusan berbasis data."
      },
      category: "Web Apps",
      role: "fullstack",
      thumbnailUrl: "/img/logo-kencana.png",
      previewImages: ["/img/kencana-1.png", "/img/kencana-2.png", "/img/kencana-3.png", "/img/kencana-4.png"],
      bgColor: "#ecfccb",
      demoUrl: "https://kencana.karanganyarkab.co.id",
      repoUrl: "https://github.com/diberkha/kencana-aplikasi-stunting.git",
      stack: ["VueJS", "Vuetify", "Laravel PHP", "MySQL"],
      createdDate: { en: "Jan 2025 - Apr 2025", id: "Jan 2025 - Apr 2025" },
      isDeployed: true
    },
    {
      id: 5,
      badgePrefix: "CMS",
      title: "SpeeQual Games",
      description: {
        en: "A responsive company profile website showcasing the company's services, game portfolio, and business information with a modern design optimized for both user experience and search engines.",
        id: "Website company profile yang menampilkan informasi perusahaan, layanan, dan portofolio game dengan desain modern, responsif, dan dioptimalkan untuk pengalaman pengguna serta mesin pencari."
      },
      category: "CMS",
      role: "frontend",
      thumbnailUrl: "/img/logo-speequalgames.png",
      previewImages: ["/img/speequalgames-1.png", "/img/speequalgames-2.png", "/img/speequalgames-3.png"],
      bgColor: "#ede9fe",
      demoUrl: "https://kodeno.id/speequalgame",
      stack: ["WordPress", "HTML", "CSS"],
      createdDate: { en: "Dec 2024", id: "Des 2024" },
      isDeployed: true
    },
    {
      id: 6,
      badgePrefix: "CMS",
      title: "SoyKuy",
      description: {
        en: "A responsive marketing landing page designed to promote products through a clean, engaging, and brand-focused user experience.",
        id: "Landing page pemasaran yang dirancang untuk memperkenalkan produk secara menarik melalui tampilan yang responsif, informatif, dan sesuai dengan identitas merek."
      },
      category: "CMS",
      role: "frontend",
      thumbnailUrl: "/img/logo-soykuy.png",
      previewImages: ["/img/soykuy-1.png", "/img/soykuy-2.png", "/img/soykuy-3.png", "/img/soykuy-4.png"],
      bgColor: "#ffedd5",
      demoUrl: "https://kodeno.id/marketing",
      stack: ["WordPress"],
      createdDate: { en: "Sep 2024", id: "Sep 2024" },
      isDeployed: true
    },
    {
      id: 7,
      badgePrefix: "Web Apps",
      title: "RASUDI",
      description: {
        en: "A web-based correspondence management system that streamlines incoming and outgoing mail, document disposition, and agenda management within a single integrated platform. Used by internal district staff for daily administrative operations.",
        id: "Aplikasi persuratan berbasis web yang mendukung pengelolaan surat masuk, surat keluar, disposisi, dan agenda surat dalam satu sistem terintegrasi. Digunakan sebagai sistem administrasi persuratan oleh staf internal kecamatan."
      },
      category: "Web Apps",
      role: "frontend",
      thumbnailUrl: "/img/logo-rasudi.png",
      previewImages: ["/img/rasudi-1.png", "/img/rasudi-2.png", "/img/rasudi-3.png", "/img/rasudi-4.png", "/img/rasudi-5.png", "/img/rasudi-6.png", "/img/rasudi-7.png", "/img/rasudi-8.png"],
      bgColor: "#fce7f3",
      demoUrl: "https://rasudi.sricantik.id",
      repoUrl: "https://github.com/diberkha/rasudi-aplikasi-persuratan.git",
      stack: ["VueJS", "Bootstrap"],
      createdDate: { en: "Feb 2024 - Jul 2024", id: "Feb 2024 - Jul 2024" },
      isDeployed: true
    },
    {
      id: 8,
      badgePrefix: "Web Apps",
      title: "Personal Website",
      description: {
        en: "A simple personal website created to showcase my profile, projects, and learning journey in web development. Built as one of my earliest web development projects, it reflects my initial experience in designing and developing responsive websites.",
        id: "Website pribadi sederhana yang dibuat untuk menampilkan profil, proyek, dan perjalanan belajar saya di bidang pengembangan web. Sebagai salah satu proyek awal saya, website ini menjadi bagian dari proses belajar dalam merancang dan mengembangkan website responsif."
      },
      category: "Web Apps",
      role: "frontend",
      thumbnailUrl: "/img/logo-personal.png",
      previewImages: ["/img/personal-1.png", "/img/personal-2.png"],
      bgColor: "#e5e7eb",
      demoUrl: "https://v3422020.mhs.d3tiuns.com",
      repoUrl: "https://github.com/diberkha/personal-website.git",
      stack: ["HTML", "CSS", "Bootstrap"],
      createdDate: { en: "Sep 2023", id: "Sep 2023" },
      isDeployed: false
    },
  ],
  experiences: [
    {
      id: 1,
      companyOrName: "RSUD dr. Soeratno Gemolong",
      role: { en: "Programmer", id: "Programmer" },
      avatarColor: "#00B259",
      period: { en: "Nov 2025 - May 2026", id: "Nov 2025 - Mei 2026" },
      type: "Internship",
      location: { en: "Sragen, Central Java", id: "Sragen, Jawa Tengah" },
      image: "/img/logo-rssg.png",
      bgColor: "#dcfce7"
    },
    {
      id: 2,
      companyOrName: "Diskominfo Kabupaten Karanganyar",
      role: { en: "Full-stack Developer", id: "Full-stack Developer" },
      avatarColor: "#00A2FF",
      period: { en: "Jan 2025 - Apr 2025", id: "Jan 2025 - Apr 2025" },
      type: "Internship",
      location: { en: "Karanganyar, Central Java", id: "Karanganyar, Jawa Tengah" },
      image: "/img/logo-diskominfokra.png",
      bgColor: "#e0f2fe"
    },
    {
      id: 3,
      companyOrName: "PT. Kode Evolusi Bangsa (Kodegiri)",
      role: { en: "Front-end Developer", id: "Front-end Developer" },
      avatarColor: "#FF9900",
      period: { en: "Sep 2024 - Jan 2025", id: "Sep 2024 - Jan 2025" },
      type: "Internship",
      location: { en: "Sleman, DI Yogyakarta", id: "Sleman, DI Yogyakarta" },
      image: "/img/logo-kodegiri.png",
      bgColor: "#ffedd5"
    },
    {
      id: 4,
      companyOrName: "Kantor Kecamatan Banjarsari",
      role: { en: "Front-end Developer", id: "Front-end Developer" },
      avatarColor: "#E2231A",
      period: { en: "Feb 2024 - Jul 2024", id: "Feb 2024 - Jul 2024" },
      type: "Freelance",
      location: { en: "Surakarta, Central Java", id: "Surakarta, Jawa Tengah" },
      image: "/img/logo-banjarsari.png",
      bgColor: "#fce7f3"
    }
  ],
  certificates: [
    { id: 1, title: "Programmer", issuer: { en: "National Professional Certification Agency (BNSP)", id: "Badan Nasional Sertifikasi Profesi (BNSP)" }, date: { en: "June 2025", id: "Juni 2025" }, image: "/img/logo-bnsp.png" },
    { id: 2, title: "MikroTik Certified Network Associate (MTCNA)", issuer: { en: "MikroTik", id: "MikroTik" }, date: { en: "May 2025", id: "Mei 2025" }, image: "/img/logo-mikrotik.png" },
    { id: 3, title: "Junior Mobile Programmer", issuer: { en: "National Professional Certification Agency (BNSP)", id: "Badan Nasional Sertifikasi Profesi (BNSP)" }, date: { en: "September 2024", id: "September 2024" }, image: "/img/logo-bnsp.png" },
    { id: 4, title: "Junior Mobile Programmer Competency Training", issuer: { en: "Dolkode Solutions", id: "Dolkode Solutions" }, date: { en: "August 2024", id: "Agustus 2024" }, image: "/img/logo-dolkode.png" },
  ],
  contact: {
    email: "diberkhasp@gmail.com",
    phone: "+6285888192380",
    github: "https://github.com/diberkha",
    linkedin: "https://linkedin.com/in/diberkha"
  }
};

export async function getPortfolioData(): Promise<PortfolioData> {
  if (typeof window !== "undefined") {
    try {
      const res = await fetch("/api/portfolio");
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      console.warn("API portfolio fetch error, using client fallback", e);
    }
  }
  return fallbackData;
}
