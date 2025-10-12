"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, X } from "lucide-react"; 

// --- DATA ---------------------------------------
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
  
  // Gunung dengan img: /projects/next.png (Next Climb - climbed: false)
  { name: "Gunung Ciremai", height: "3.078 mdpl", tags: ["Jawa Barat"], img: "/projects/next.png", climbed: false },
  { name: "Gunung Argopuro", height: "3.088 mdpl", tags: ["Jawa Timur"], img: "/projects/next.png", climbed: false },
  { name: "Gunung Raung", height: "3.332 mdpl", tags: ["Jawa Timur"], img: "/projects/next.png", climbed: false },
  { name: "Gunung Rinjani", height: "3.726 mdpl", tags: ["NTB"], img: "/projects/next.png", climbed: false },
  { name: "Gunung Semeru", height: "3.676 mdpl", tags: ["Jawa Timur"], img: "/projects/next.png", climbed: false },
  { name: "Gunung Kerinci", height: "3.05 mdpl", tags: ["Jambi"], img: "/projects/next.png", climbed: false },
];

// --- UI PRIMITIVES ------------------------------------

/**
 * A modern, minimal tag chip. (Dual-mode support)
 */
function Chip({ children, isNext }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium 
      backdrop-blur-sm 
      // Dark Mode
      ${isNext 
        ? "bg-purple-900/40 text-purple-300 border border-purple-800" 
        : "bg-blue-900/40 text-blue-300 border border-blue-800"}
      // Light Mode
      light:bg-zinc-100 light:text-zinc-700 light:border-zinc-300
      transition-colors`}
    >
      {children}
    </span>
  );
}

/**
 * An elegant, interactive card with subtle 3D hover effect and background lighting.
 * (Dual-mode support & Grayscale image effect)
 */
function Card({ item }) {
    const isNext = item.img === "/projects/next.png";

    const cardVariants = {
        initial: { opacity: 0, y: 40, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 40, scale: 0.98 },
    };

    return (
        <motion.div
            variants={cardVariants}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={`group relative overflow-hidden rounded-xl p-4 
            border transition-all duration-300 ease-in-out text-left cursor-pointer
            transform hover:-translate-y-2 
            
            // Dark Mode
            bg-zinc-900/60 border-zinc-700 shadow-xl hover:shadow-2xl 
            ${isNext 
                ? "hover:border-purple-500/50" 
                : "hover:border-blue-500/50"}
            
            // Light Mode
            light:bg-white/80 light:border-zinc-200 light:shadow-lg light:hover:shadow-xl
            light:hover:border-blue-500/50
            `}
        >
            {/* Subtle background glow effect on hover */}
            <motion.div
                className={`absolute inset-0 transition-opacity duration-500 pointer-events-none 
                ${isNext 
                    ? "bg-gradient-to-br from-purple-500/10 opacity-0 group-hover:opacity-100" 
                    : "bg-gradient-to-br from-blue-500/10 opacity-0 group-hover:opacity-100"}`}
            />

            {/* Content Container */}
            <div className="relative z-10">
                <div className="relative h-32 sm:h-40 overflow-hidden rounded-lg mb-4">
                    <img
                        src={item.img}
                        alt={item.name}
                        // --- Perubahan utama di sini untuk efek grayscale ---
                        className={`w-full h-full object-cover transition-all duration-500 
                        group-hover:scale-[1.02] 
                        filter grayscale group-hover:grayscale-0 group-hover:brightness-100
                        ${isNext ? "opacity-70 group-hover:opacity-100" : ""}`} 
                    />
                    
                    {/* Status / Height Tag Overlay */}
                    <span className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm 
                        ${isNext 
                            ? "bg-purple-600/80 text-white" 
                            : "bg-black/60 text-white"}`
                        }>
                        {isNext ? "Next Climb" : item.height}
                    </span>
                </div>
                
                <h3 className={`text-lg sm:text-xl font-extrabold mb-1 leading-snug 
                    ${isNext ? "text-purple-400 light:text-purple-700" : "text-white light:text-zinc-900"}`}>
                    {item.name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                        <Chip key={i} isNext={isNext}>{tag}</Chip>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

// --- MAIN COMPONENT -----------------------------------
export default function MountainsSection() {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredMountains = useMemo(() => {
    return mountains
      .filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      // Custom Sorting Logic: Climbed (true) comes before Next Climb (false)
      .sort((a, b) => {
        // 1. Sort by `climbed` status (climbed=true comes first)
        if (a.climbed !== b.climbed) {
            return b.climbed - a.climbed; 
        }
        
        // 2. If status is the same, sort by height (descending)
        const heightA = a.height.replace(/[^0-9.]/g, '');
        const heightB = b.height.replace(/[^0-9.]/g, '');
        return parseFloat(heightB) - parseFloat(heightA);
      });
  }, [query]);

  // Determine which mountains to display 
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const initialDisplayCount = isMobile ? 4 : 8; 
  
  const displayedMountains = showAll
    ? filteredMountains
    : filteredMountains.slice(0, initialDisplayCount);

  const isMoreToShow = filteredMountains.length > initialDisplayCount;

  return (
    // Latar belakang utama TRANSPARAN (bg-transparent)
    <section 
        id="peaks" 
        className="relative py-16 sm:py-24 px-4 bg-transparent
        text-white dark:text-white light:text-zinc-900 min-h-screen"
    >
      
      {/* Background decoration (Hanya terlihat di Dark Mode untuk kedalaman) */}
       <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(100%_100%_at_top,white,transparent)] pointer-events-none dark:block light:hidden">
        <div className="w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Title & Description DENGAN PERUBAHAN WARNA JUDUL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest 
              text-blue-400 dark:text-blue-400 light:text-blue-600 mb-2">
            My Journey
          </p>
<h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter 
    leading-none">
    <span className="bg-clip-text text-transparent bg-gradient-to-r 
        // Gradien Summits: Biru ke Lavender (#8A75E0)
        from-blue-400 to-[#8A75E0] dark:from-blue-400 dark:to-[#8A75E0] 
        light:from-blue-700 light:to-indigo-800">
        Summits
    </span>{" "}
    <span className="
        // Warna Reached: Putih di Dark Mode, Hitam MURNI di Light Mode
        text-white dark:text-white light:text-black">
        Reached
    </span> 
    
</h2>
          <p className="mt-4 text-base sm:text-lg 
              text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Daftar puncak yang sudah saya daki (terurut) dan yang akan didaki (Next Climb).
          </p>
        </motion.div>

        {/* Search Input (Dual-mode support) */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex justify-center mb-10 sm:mb-14"
        >
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (e.target.value.length > 0) {
                    setShowAll(true);
                } else {
                    setShowAll(false);
                }
              }}
              placeholder="Cari gunung..."
              // Dark Mode
              className="w-full rounded-full pl-12 pr-4 py-3 
              bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 text-white 
              // Light Mode
              light:bg-white light:border-zinc-300 light:text-zinc-800
              text-sm sm:text-base
              outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            />
            {query && (
                <button
                    onClick={() => setQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors light:text-zinc-500 light:hover:text-zinc-800 light:hover:bg-zinc-100"
                    aria-label="Clear search"
                >
                    <X className="w-4 h-4" />
                </button>
            )}
          </div>
        </motion.div>

        {/* Mountains Grid */}
        {filteredMountains.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {displayedMountains.map((item) => (
                <Card key={item.name} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
             <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-zinc-500 mt-10 text-lg"
            >
                Gunung tidak ditemukan. Coba nama lain! 🧐
            </motion.p>
        )}

        {/* 'Show All' Button */}
        {isMoreToShow && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center mt-12 sm:mt-16"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full 
              bg-gradient-to-r from-blue-600 to-purple-600 text-white 
              font-semibold shadow-lg shadow-blue-500/30 
              hover:shadow-xl hover:shadow-blue-500/40 
              transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
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