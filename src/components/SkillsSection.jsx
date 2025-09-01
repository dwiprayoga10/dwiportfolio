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

// --- DATA ---------------------------------------------
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

// --- UI PRIMITIVES ------------------------------------
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
      shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-left"
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
            Dengan skill dan alat ini, saya berfokus pada efisiensi, kualitas kode, dan pengalaman pengguna yang maksimal.
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

        {/* Backend Skills */}
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-zinc-100">Backend Skills</h3>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.15 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 mb-10"
        >
          <AnimatePresence>
            {filteredSkills.backend.map((item, idx) => (
              <Card key={`backend-${item.name}-${idx}`}>
                <div className="flex items-center gap-3 sm:gap-4">
                  <IconBadge Icon={item.icon || Hammer} />
                  <h3 className="text-sm sm:text-lg font-semibold leading-snug">{item.name}</h3>
                </div>
              </Card>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Frontend Skills */}
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-zinc-100">Frontend Skills</h3>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.15 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 mb-10"
        >
          <AnimatePresence>
            {filteredSkills.frontend.map((item, idx) => (
              <Card key={`frontend-${item.name}-${idx}`}>
                <div className="flex items-center gap-3 sm:gap-4">
                  <IconBadge Icon={item.icon || Hammer} />
                  <h3 className="text-sm sm:text-lg font-semibold leading-snug">{item.name}</h3>
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6"
        >
          <AnimatePresence>
            {filteredSkills.design.map((item, idx) => (
              <Card key={`design-${item.name}-${idx}`}>
                <div className="flex items-center gap-3 sm:gap-4">
                  <IconBadge Icon={item.icon || Hammer} />
                  <h3 className="text-sm sm:text-lg font-semibold leading-snug">{item.name}</h3>
                </div>
              </Card>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
