"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Search, ChevronDown, X } from "lucide-react";

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

function Chip({ children, isNext }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] sm:text-xs font-medium backdrop-blur-sm
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
      className={`group relative overflow-hidden rounded-xl p-2 sm:p-3 border transition-all duration-300 ease-in-out cursor-pointer transform
        hover:-translate-y-1.5 active:translate-y-0.5
        bg-zinc-900/60 border-zinc-700 shadow-md hover:shadow-xl
        ${isNext ? "hover:border-purple-500/60" : "hover:border-blue-500/60"}
        light:bg-white/80 light:border-zinc-200`}
    >
      <div className="relative h-28 sm:h-36 md:h-40 overflow-hidden rounded-lg mb-2 sm:mb-3">
        <motion.img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover rounded-lg"
          initial={{ scale: 1, filter: "grayscale(100%) brightness(0.85)" }}
          whileHover={{ scale: 1.05, filter: "grayscale(0%) brightness(1)" }}
          animate={isTouched ? { scale: 1.05, filter: "grayscale(0%) brightness(1)" } : {}}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
        <span
          className={`absolute top-1.5 right-1.5 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm
            ${isNext ? "bg-purple-600/90 text-white" : "bg-black/60 text-white"}`}
        >
          {isNext ? "Next Climb" : item.height}
        </span>
      </div>

      <h3
        className={`text-sm sm:text-base font-bold mb-1 leading-snug
          ${isNext ? "text-purple-400" : "text-white light:text-zinc-900"}`}
      >
        {item.name}
      </h3>

      <div className="mt-1 flex flex-wrap gap-1 sm:gap-2">
        {item.tags.map((tag, i) => (
          <Chip key={i} isNext={isNext}>
            {tag}
          </Chip>
        ))}
      </div>
    </motion.article>
  );
}

export default function MountainsSection() {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [isClientMobile, setIsClientMobile] = useState(false);

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handle = () => setIsClientMobile(window.innerWidth < 768);
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

  return (
    <section id="peaks" className="relative py-10 sm:py-20 px-3 sm:px-6 text-white light:text-zinc-900">
      {/* Background soft glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-blue-500/10 blur-[100px]"
          animate={{ x: [0, 60, -60, 0], y: [0, 40, -40, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-purple-500/10 blur-[100px]"
          animate={{ x: [0, -60, 60, 0], y: [0, -40, 40, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          style={{ y: yParallax }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-14"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-400 mb-2">
            My Journey
          </p>
          <h2 className="text-2xl sm:text-5xl font-extrabold tracking-tight leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Summits
            </span>{" "}
            <span className="text-white light:text-black">Reached</span>
          </h2>
          <p className="mt-3 text-xs sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Daftar puncak yang sudah saya daki dan yang akan didaki berikutnya.
          </p>
        </motion.div>

        {/* Search */}
        <div className="flex justify-center mb-6 sm:mb-12">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-zinc-500" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowAll(e.target.value.length > 0);
              }}
              placeholder="Cari gunung..."
              className="w-full rounded-full pl-10 pr-10 py-2.5 sm:py-3 bg-zinc-900/50 backdrop-blur-md border border-zinc-700 text-sm sm:text-base text-white
                light:bg-white light:border-zinc-300 light:text-zinc-800 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  setShowAll(false);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full text-zinc-300 hover:text-white hover:bg-white/10"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Grid Layout — lebih rapat di HP */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedMountains.map((item) => (
              <motion.div key={item.name} layout>
                <Card item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tombol toggle */}
        {isMoreToShow && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <motion.button
              onClick={() => setShowAll((s) => !s)}
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium sm:font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {showAll ? "Tutup Tampilan" : "Lihat Semua"}
              {showAll ? <X className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
