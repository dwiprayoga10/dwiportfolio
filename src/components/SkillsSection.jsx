"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Braces,
  Coffee,
  FileCode,
  Atom,
  Wind,
  Paintbrush,
  PenTool,
  Image as ImageIcon,
  Hammer,
  Mountain,
  Search,
} from "lucide-react";

// --- DATA ---------------------------------------------
const devSkills = [
  {
    name: "HTML/CSS",
    icon: Code2,
    tags: ["Frontend", "Struktur", "Styling"],
    desc: "Dasar pembuatan struktur & style web.",
  },
  {
    name: "JavaScript",
    icon: FileCode,
    tags: ["Frontend", "Interaktif", "Dynamic"],
    desc: "Bahasa pemrograman interaktif untuk web.",
  },
  {
    name: "React",
    icon: Atom,
    tags: ["Frontend", "Komponen", "SPA"],
    desc: "Library frontend modern berbasis komponen.",
  },
  {
    name: "Tailwind CSS",
    icon: Wind,
    tags: ["Frontend", "Utility-First", "Responsive"],
    desc: "Framework utility-first untuk styling cepat.",
  },
  {
    name: "PHP",
    icon: Braces,
    tags: ["Backend", "Server-Side", "Dynamic"],
    desc: "Bahasa backend populer untuk aplikasi web.",
  },
  {
    name: "Java",
    icon: Coffee,
    tags: ["Backend", "OOP", "Cross-Platform"],
    desc: "Bahasa pemrograman OOP serbaguna.",
  },
];

const designTools = [
  {
    name: "VS Code",
    icon: Hammer,
    tags: ["Tooling", "Editor", "Extensions"],
    desc: "Text editor modern untuk coding.",
  },
  {
    name: "Canva",
    icon: Paintbrush,
    tags: ["Design", "Cepat", "Visual"],
    desc: "Alat desain visual yang simpel & cepat.",
  },
  {
    name: "Photoshop",
    icon: ImageIcon,
    tags: ["Design", "Photo Editing", "Advanced"],
    desc: "Software profesional untuk editing foto.",
  },
  {
    name: "CorelDRAW",
    icon: PenTool,
    tags: ["Design", "Vektor", "Grafis"],
    desc: "Software desain vektor grafis.",
  },
];

// --- MOUNTAINS ---------------------------------------
const mountains = [
  { name: "Gunung Muria", height: "1.602 mdpl", tags: ["Jawa Tengah"], img: "/projects/muria.jpg" },
  { name: "Gunung Andong", height: "1.726 mdpl", tags: ["Jawa Tengah"], img: "/projects/andong.png" },
  { name: "Gunung Ungaran", height: "2.050 mdpl", tags: ["Jawa Tengah"], img: "/projects/ungaran.jpg" },
  { name: "Gunung Pakuwaja", height: "2.614 mdpl", tags: ["Jawa Tengah"], img: "/projects/pakuwaja.jpg" },
  { name: "Gunung Prau", height: "2.565 mdpl", tags: ["Jawa Tengah"], img: "/projects/prau.jpg" },
  { name: "Gunung Kembang", height: "2.340 mdpl", tags: ["Jawa Tengah"], img: "/projects/kembang.jpg" },
  { name: "Gunung Bismo", height: "2.365 mdpl", tags: ["Jawa Tengah"], img: "/projects/bismo.png" },
  { name: "Gunung Sindoro", height: "3.153 mdpl", tags: ["Jawa Tengah"], img: "/projects/sindoro.jpg" },
  { name: "Gunung Lawu", height: "3.265 mdpl", tags: ["Jawa Tengah"], img: "/projects/lawu.jpg" },
  { name: "Gunung Sumbing", height: "3.371 mdpl", tags: ["Jawa Tengah"], img: "/projects/sumbing.jpg" },
  { name: "Gunung Slamet", height: "3.428 mdpl", tags: ["Jawa Tengah"], img: "/projects/slamet.jpg" },
];

// --- UI PRIMITIVES ------------------------------------
function Chip({ children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium 
      border border-zinc-200 dark:border-white/10 
      bg-black dark:bg-white/5 
      text-zinc-200 dark:text-zinc-300 shadow-sm`}
    >
      {children}
    </span>
  );
}

function Card({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl p-4 sm:p-6 
      border border-zinc-800 dark:border-white/10 
      bg-black dark:bg-zinc-900/60 
      shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-left"
    >
      {children}
    </motion.div>
  );
}

function IconBadge({ Icon }) {
  return (
    <div className="relative shrink-0">
      <div className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 rounded-xl" />
      <div className="relative grid place-items-center h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
    </div>
  );
}

// --- MAIN COMPONENT -----------------------------------
export default function SkillsAndMountainsSection() {
  const [query, setQuery] = useState("");
  const [showMountains, setShowMountains] = useState(false);

  const filteredSkills = useMemo(() => {
    const q = query.toLowerCase();
    const filterByQuery = (list) =>
      list.filter((item) => item.name.toLowerCase().includes(q));
    return {
      dev: filterByQuery(devSkills),
      design: filterByQuery(designTools),
    };
  }, [query]);

  const filteredMountains = useMemo(() => {
    const q = query.toLowerCase();
    return mountains.filter((item) => item.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <section id="skills" className="relative py-16 sm:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight">
            Skills &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7F6EDB] to-[#a38cf7]">
              Tools
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
           Berikut skil terbatas saya
          </p>
        </motion.div>

        {/* Search */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70 text-zinc-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari skill atau tool..."
              className="w-full rounded-full pl-10 pr-4 py-2.5 
              bg-black dark:bg-zinc-900 
              border border-zinc-800 dark:border-white/20 
              text-zinc-200 dark:text-zinc-200 
              text-sm sm:text-base
              outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>
        </div>

        {/* Dev Tools */}
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-zinc-100">Dev Tools</h3>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.15 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mb-10"
        >
          <AnimatePresence>
            {filteredSkills.dev.map((item, idx) => (
              <Card key={`dev-${item.name}-${idx}`}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <IconBadge Icon={item.icon || Hammer} />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">{item.name}</h3>
                    {item.desc && (
                      <p className="text-xs sm:text-sm text-zinc-400">{item.desc}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Design Tools */}
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-zinc-100">Design Tools</h3>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.15 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredSkills.design.map((item, idx) => (
              <Card key={`design-${item.name}-${idx}`}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <IconBadge Icon={item.icon || Hammer} />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">{item.name}</h3>
                    {item.desc && (
                      <p className="text-xs sm:text-sm text-zinc-400">{item.desc}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Mountains */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowMountains(!showMountains)}
            className="group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full 
            bg-gradient-to-r from-[#6C63FF] via-indigo-500 to-[#6C63FF] 
            text-white font-semibold text-sm sm:text-lg shadow-lg 
            hover:shadow-indigo-500/40 hover:scale-105 transition-all 
            animate-pulse"
          >
            <span className="flex items-center gap-2">
              <Mountain className="h-5 w-5 group-hover:scale-125 transition-transform" />
              {showMountains ? "Sembunyikan Daftar Gunung" : "Lihat Daftar Gunung"}
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6C63FF]/30 to-indigo-400/30 blur-xl opacity-50 group-hover:opacity-75 transition" />
          </button>
        </div>

        {/* Mountains Grid */}
        <AnimatePresence>
          {showMountains && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10"
            >
              {filteredMountains.map((item, idx) => (
                <Card key={`mountain-${idx}`}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-24 sm:h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-sm sm:text-base font-semibold">{item.name}</h3>
                  {item.height && (
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                      Ketinggian: {item.height}
                    </p>
                  )}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <Chip key={i}>{tag}</Chip>
                    ))}
                  </div>
                </Card>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
