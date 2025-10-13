"use client";

import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

// =======================
// DATA PROYEK
// =======================
const projects = [
  {
    id: 1,
    title: "Website Sewa Aset Jasa Raharja",
    description:
      "Website Pemesanan dan Penyewaan Gedung dan Ruangan Semarang.",
    image: "/projects/project4.png",
    tags: ["Laravel", "TailwindCSS"],
    demoUrl: "https://www.sewaasetjrsemarang.com/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Web Company Profile Mitraku",
    description:
      "Website company profile resmi Mitraku yang menampilkan informasi perusahaan, layanan, serta portofolio dengan desain modern dan responsif berbasis Laravel dan Tailwind CSS.",
    image: "/projects/mitrakuonline.png",
    tags: ["Laravel", "Tailwind CSS", "MySQL"],
    demoUrl: "https://mitrakuonline.my.id/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "MitraKUntansi",
    description:
      "Website akuntansi Mitraku Cibuyur untuk pencatatan transaksi, laporan keuangan, dan pengelolaan data akuntansi secara digital.",
    image: "/projects/image.png",
    tags: ["PHP + MySQL", "Bootstrap"],
    demoUrl: "https://inimitraku.my.id/",
    githubUrl: "#",
  },
];

// =======================
// ANIMASI
// =======================
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// =======================
// KARTU PROYEK
// =======================
const ProjectCard = ({ project }) => {
  const filteredTags = project.tags.filter((tag) => tag.trim() !== "");

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative rounded-2xl overflow-hidden border border-border/30 bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-primary/30 transition-all duration-500"
    >
      {/* Gambar */}
      <div className="relative h-40 xs:h-44 sm:h-48 md:h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ rotate: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Konten */}
      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {filteredTags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <motion.p
          className="text-muted-foreground text-sm mb-4 line-clamp-3"
          initial={{ opacity: 1 }}
        >
          {project.description}
        </motion.p>

        <div className="flex justify-between items-center pt-3 border-t border-border/30">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="text-sm font-semibold text-primary flex items-center gap-1 transition-all duration-300"
          >
            Lihat Detail <ArrowRight size={16} />
          </motion.span>

          <div className="flex space-x-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-foreground/70 hover:text-primary transition-colors duration-300 hover:bg-primary/10"
            >
              <ExternalLink size={18} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-foreground/70 hover:text-primary transition-colors duration-300 hover:bg-primary/10"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// =======================
// KOMPONEN UTAMA
// =======================
export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-14 sm:py-20 px-3 sm:px-6 bg-transparent transition-colors duration-700"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-2">
            Crafted Projects
          </p>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tighter leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-[#8A75E0]">
              Built
            </span>{" "}
            <span className="text-foreground">with Passion</span>
          </h2>

          <p className="mt-4 text-sm sm:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Kumpulan proyek yang saya rancang dengan penuh dedikasi,  
            menggabungkan kreativitas, fungsi, dan keindahan desain.
          </p>
        </motion.div>

        {/* Grid (✅ Sekarang 2 kolom di HP) */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Tombol GitHub */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/dwiprayoga10"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-semibold h-10 sm:h-12 px-6 sm:px-8 shadow-lg shadow-primary/40 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/50 transform hover:-translate-y-0.5"
          >
            Check My Github
            <ArrowRight
              size={18}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
