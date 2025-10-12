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
  Search,
} from "lucide-react";

// === DATA ====================================================
const backendSkills = [
  { name: "Laravel", icon: Braces },
  { name: "PHP", icon: Braces },
  { name: "Java", icon: Coffee },
  { name: "Python", icon: Code2 },
  { name: "C++", icon: FileCode },
];

const frontendSkills = [
  { name: "JavaScript", icon: FileCode },
  { name: "React", icon: Atom },
  { name: "Tailwind CSS", icon: Wind },
];

const designTools = [
  { name: "VS Code", icon: Hammer },
  { name: "Canva", icon: Paintbrush },
  { name: "Photoshop", icon: ImageIcon },
  { name: "CorelDRAW", icon: PenTool },
];

// === UI COMPONENTS ==========================================
function Card({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        rotate: 1,
        boxShadow: "0px 0px 25px rgba(120,120,255,0.4)",
      }}
      whileTap={{ scale: 0.97 }}
      className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 
      border border-white/10 
      bg-white/[0.05] backdrop-blur-md 
      shadow-lg hover:shadow-blue-500/20 
      transition-all duration-300"
    >
      {/* Subtle gradient glow behind */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-br from-blue-400 via-violet-500 to-indigo-600 blur-2xl rounded-2xl" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function IconBadge({ Icon }) {
  return (
    <motion.div
      whileHover={{ rotate: 10, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative shrink-0"
    >
      <div className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 rounded-xl" />
      <div className="relative grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
        <Icon className="h-6 w-6" />
      </div>
    </motion.div>
  );
}

// === MAIN COMPONENT ==========================================
export default function SkillsSection() {
  const [query, setQuery] = useState("");

  const filterByQuery = (list) =>
    list.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));

  const filteredSkills = useMemo(() => {
    return {
      backend: filterByQuery(backendSkills),
      frontend: filterByQuery(frontendSkills),
      design: filterByQuery(designTools),
    };
  }, [query]);

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 px-6 bg-transparent text-white overflow-hidden"
    >
      {/* === BACKGROUND GLOW === */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-violet-500/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
  initial={{ opacity: 0, y: 40, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
  }}
  viewport={{ once: true }}
  className="text-center mb-16 relative"
>
  {/* Efek cahaya lembut di belakang judul */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.5 }}
    transition={{ delay: 0.3, duration: 1 }}
    viewport={{ once: true }}
    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-700/10 blur-3xl rounded-full"
  />

  {/* === TITLE === */}
  <motion.h2
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight relative z-10 text-white"
  >
    My{" "}
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-500">
      Skills & Tools
    </span>
  </motion.h2>

  {/* === SUBTEXT === */}
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.6 }}
    viewport={{ once: true }}
    className="mt-4 text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed relative z-10"
  >
    Kombinasi antara kekuatan backend, keindahan frontend, dan kreativitas desain yang membentuk fondasi karya digital saya.
  </motion.p>

  {/* === Animasi floating halus (cahaya biru bergerak) === */}
  <motion.div
    animate={{
      x: [0, 20, 0, -20, 0],
      y: [0, -10, 0, 10, 0],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-2xl rounded-full"
  />
</motion.div>

 

        {/* === SEARCH BAR === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 opacity-70 text-zinc-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari skill atau tools..."
              className="w-full rounded-full pl-11 pr-4 py-3 text-sm sm:text-base
              bg-white/[0.05] backdrop-blur-md border border-white/10
              text-zinc-200 placeholder:text-zinc-500 
              focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
            />
          </div>
        </motion.div>

        {/* === CATEGORY SECTION === */}
        {[
          { title: "Backend Skills", data: filteredSkills.backend },
          { title: "Frontend Skills", data: filteredSkills.frontend },
          { title: "Design Tools", data: filteredSkills.design },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white/90 border-l-4 border-blue-500 pl-3">
              {section.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              <AnimatePresence>
                {section.data.map((item, i) => (
                  <Card key={`${section.title}-${i}`}>
                    <div className="flex items-center gap-4">
                      <IconBadge Icon={item.icon || Hammer} />
                      <h3 className="text-base sm:text-lg font-medium tracking-wide">
                        {item.name}
                      </h3>
                    </div>
                  </Card>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
