"use client";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

// Data Proyek
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
  // {
  //   id: 4,
  //   title: "Portfolio Developer",
  //   description:
  //     "Website portofolio interaktif dengan animasi halus dan tema dinamis untuk menampilkan karya secara profesional.",
  //   image: "/projects/project7.png",
  //   tags: ["Next.js", "Framer Motion", "TailwindCSS"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 5,
  //   title: "EduLearn Platform",
  //   description:
  //     "Platform pembelajaran daring dengan fitur kursus, quiz, dan pelacakan progres siswa secara real-time.",
  //   image: "/projects/project8.jpg",
  //   tags: ["Laravel", "Vue.js", "MySQL"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 6,
  //   title: "SmartFarm IoT Dashboard",
  //   description:
  //     "Dashboard monitoring berbasis IoT untuk pertanian cerdas, menampilkan data suhu, kelembaban, dan kondisi tanah secara live.",
  //   image: "/projects/project9.png",
  //   tags: ["Node.js", "React", "IoT"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
];

// Animasi dasar
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Komponen kartu proyek
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
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ rotate: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Konten */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {filteredTags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex justify-between items-center pt-4 border-t border-border/30">
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
              <ExternalLink size={20} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-foreground/70 hover:text-primary transition-colors duration-300 hover:bg-primary/10"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Komponen utama
export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 relative bg-transparent transition-colors duration-700"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Proyek{" "}
            <span className="text-primary relative inline-block">
              Unggulan
              <motion.span
                layoutId="underline"
                className="absolute left-0 bottom-0 h-1 w-full bg-primary/60 rounded-full"
              />
            </span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
            Setiap proyek mencerminkan dedikasi terhadap desain elegan,
            performa optimal, dan pengalaman pengguna yang menyenangkan.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
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
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/dwiprayoga10"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-semibold h-12 px-8 shadow-lg shadow-primary/40 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/50 transform hover:-translate-y-0.5"
          >
            Check My Github
            <ArrowRight
              size={20}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
