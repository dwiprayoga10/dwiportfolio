"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Search, ChevronDown, X } from "lucide-react";

// ---------------- DATA ----------------
const mountains = [
  { name: "Gunung Muria", height: "1.602 mdpl", tags: ["Jawa Tengah"], img: "/projects/muria.jpg", climbed: true },
  { name: "Gunung Andong", height: "1.726 mdpl", tags: ["Jawa Tengah"], img: "/projects/andong.png", climbed: true },
  { name: "Gunung Ungaran", height: "2.050 mdpl", tags: ["Jawa Tengah"], img: "/projects/ungaran.jpg", climbed: true },
  { name: "Gunung Pakuwaja", height: "2.413 mdpl", tags: ["Jawa Tengah"], img: "/projects/pakuwaja.jpg", climbed: true },
  { name: "Gunung Prau", height: "2.565 mdpl", tags: ["Jawa Tengah"], img: "/projects/prau.jpg", climbed: true },
  { name: "Gunung Kembang", height: "2.340 mdpl", tags: ["Jawa Tengah"], img: "/projects/kembang.jpg", climbed: true },
  { name: "Gunung Bismo", height: "2.365 mdpl", tags: ["Jawa Tengah"], img: "/projects/bismo.png", climbed: true },
  { name: "Gunung Sindoro", height: "3.153 mdpl", tags: ["Jawa Tengah"], img: "/projects/sindoro.jpg", climbed: true },
  { name: "Gunung Lawu", height: "3.265 mdpl", tags: ["Jawa Tengah"], img: "/projects/lawu.jpg", climbed: true },
  { name: "Gunung Sumbing", height: "3.371 mdpl", tags: ["Jawa Tengah"], img: "/projects/sumbing.jpg", climbed: true },
  { name: "Gunung Slamet", height: "3.428 mdpl", tags: ["Jawa Tengah"], img: "/projects/slamet.jpg", climbed: true },

  { name: "Gunung Ciremai", height: "3.078 mdpl", tags: ["Jawa Barat"], img: "/projects/next.png", climbed: false },
  { name: "Gunung Argopuro", height: "3.088 mdpl", tags: ["Jawa Timur"], img: "/projects/next.png", climbed: false },
  { name: "Gunung Raung", height: "3.332 mdpl", tags: ["Jawa Timur"], img: "/projects/next.png", climbed: false },
  { name: "Gunung Rinjani", height: "3.726 mdpl", tags: ["NTB"], img: "/projects/next.png", climbed: false },
  { name: "Gunung Semeru", height: "3.676 mdpl", tags: ["Jawa Timur"], img: "/projects/next.png", climbed: false },
  { name: "Gunung Kerinci", height: "3.05 mdpl", tags: ["Jambi"], img: "/projects/next.png", climbed: false },
];

// ---------------- UI COMPONENTS ----------------
function Chip({ children, isNext }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium backdrop-blur-sm transition-colors
        ${isNext
          ? "bg-purple-900/40 text-purple-300 border border-purple-800"
          : "bg-blue-900/40 text-blue-300 border border-blue-800"}
        light:bg-zinc-100 light:text-zinc-700 light:border-zinc-300`}
    >
      {children}
    </span>
  );
}

function Card({ item }) {
  const isNext = item.img === "/projects/next.png";
  const [isTouched, setIsTouched] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.985 },
    enter: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.985 },
  };

  return (
    <motion.article
      layout
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={cardVariants}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
      onMouseDown={() => setIsTouched(true)}
      onMouseUp={() => setIsTouched(false)}
      onMouseLeave={() => setIsTouched(false)}
      className={`group relative overflow-hidden rounded-xl p-3 sm:p-4 border transition-all duration-300 ease-in-out cursor-pointer transform
        hover:-translate-y-2 active:translate-y-0.5
        bg-zinc-900/60 border-zinc-700 shadow-md hover:shadow-2xl
        ${isNext ? "hover:border-purple-500/60" : "hover:border-blue-500/60"}
        light:bg-white/80 light:border-zinc-200 light:shadow-lg light:hover:shadow-xl`}
      role="button"
      tabIndex={0}
      aria-label={`${item.name} - ${isNext ? "Next Climb" : item.height}`}
    >
      {/* subtle glow background */}
      <motion.div
        aria-hidden
        className={`absolute inset-0 pointer-events-none transition-opacity duration-400`}
        animate={{ opacity: isTouched ? 1 : 0 }}
        style={{
          background: isNext
            ? "linear-gradient(135deg, rgba(138,117,224,0.08), rgba(99,102,241,0.04))"
            : "linear-gradient(135deg, rgba(59,130,246,0.06), rgba(99,102,241,0.03))",
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative z-10">
        <div className="relative h-36 sm:h-44 md:h-40 overflow-hidden rounded-lg mb-3">
          <motion.img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500"
            initial={{ scale: 1, filter: "grayscale(100%) brightness(0.85)" }}
            whileHover={{ scale: 1.05, filter: "grayscale(0%) brightness(1)" }}
            animate={isTouched ? { scale: 1.05, filter: "grayscale(0%) brightness(1)" } : {}}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />

          <span
            className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm
              ${isNext ? "bg-purple-600/90 text-white" : "bg-black/60 text-white"}`}
          >
            {isNext ? "Next Climb" : item.height}
          </span>
        </div>

        <h3
          className={`text-lg sm:text-xl font-extrabold mb-1 leading-snug
            ${isNext ? "text-purple-400 light:text-purple-700" : "text-white light:text-zinc-900"}`}
        >
          {item.name}
        </h3>

        <div className="mt-2 flex flex-wrap gap-2">
          {item.tags.map((tag, i) => (
            <Chip key={i} isNext={isNext}>
              {tag}
            </Chip>
          ))}
        </div>
      </div>

      {/* soft border glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        animate={isTouched ? { opacity: 1 } : {}}
        transition={{ duration: 0.35 }}
        style={{
          boxShadow: isNext ? "0 8px 40px rgba(138,117,224,0.12)" : "0 8px 40px rgba(59,130,246,0.10)",
          borderRadius: 16,
          mixBlendMode: "normal",
        }}
      />
    </motion.article>
  );
}

// ---------------- MAIN SECTION ----------------
export default function MountainsSection() {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [isClientMobile, setIsClientMobile] = useState(false);

  // Parallax untuk judul
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handle = () => {
      if (typeof window === "undefined") return;
      setIsClientMobile(window.innerWidth < 768);
    };
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const filteredMountains = useMemo(() => {
    return mountains
      .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => b.climbed - a.climbed);
  }, [query]);

  const initialDisplayCount = isClientMobile ? 4 : 8;
  const displayedMountains = showAll ? filteredMountains : filteredMountains.slice(0, initialDisplayCount);
  const isMoreToShow = filteredMountains.length > initialDisplayCount;

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
  };

  return (
    <section id="peaks" className="relative py-12 sm:py-20 px-4 text-white light:text-zinc-900 min-h-screen overflow-hidden">
      {/* 🌌 Gradient background + moving glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px]"
          animate={{ x: [0, 60, -60, 0], y: [0, 40, -40, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px]"
          animate={{ x: [0, -60, 60, 0], y: [0, -40, 40, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          style={{ y: yParallax }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-2">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Summits
            </span>{" "}
            <span className="text-white light:text-black">Reached</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Daftar puncak yang sudah saya daki (terurut) dan yang akan didaki (Next Climb).
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowAll(e.target.value.length > 0);
              }}
              placeholder="Cari gunung..."
              className="w-full rounded-full pl-12 pr-10 py-3 bg-zinc-900/50 backdrop-blur-md border border-zinc-700 text-white
                light:bg-white light:border-zinc-300 light:text-zinc-800 text-sm sm:text-base outline-none
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            />
            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  setShowAll(false);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Grid */}
        {filteredMountains.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {displayedMountains.map((item) => (
                <motion.div key={item.name} layout>
                  <Card item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-zinc-500 mt-8 text-lg"
          >
            Gunung tidak ditemukan. Coba nama lain! 🧐
          </motion.p>
        )}

        {/* Toggle Button */}
        {isMoreToShow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10 sm:mt-14"
          >
            <motion.button
              onClick={() => setShowAll((s) => !s)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.03]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {showAll ? "Tutup Tampilan" : "Lihat Semua Puncak"}
              {showAll ? <X className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
