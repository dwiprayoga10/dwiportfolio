"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ---------------------------------------
const mountains = [
  { name: "Gunung Muria", height: "1.602 mdpl", tags: ["Jawa Tengah"], img: "/projects/muria.jpg" },
  { name: "Gunung Andong", height: "1.726 mdpl", tags: ["Jawa Tengah"], img: "/projects/andong.png" },
  { name: "Gunung Ungaran", height: "2.050 mdpl", tags: ["Jawa Tengah"], img: "/projects/ungaran.jpg" },
  { name: "Gunung Pakuwaja", height: "2.413 mdpl", tags: ["Jawa Tengah"], img: "/projects/pakuwaja.jpg" },
  { name: "Gunung Prau", height: "2.565 mdpl", tags: ["Jawa Tengah"], img: "/projects/prau.jpg" },
  { name: "Gunung Kembang", height: "2.340 mdpl", tags: ["Jawa Tengah"], img: "/projects/kembang.jpg" },
  { name: "Gunung Bismo", height: "2.365 mdpl", tags: ["Jawa Tengah"], img: "/projects/bismo.png" },
  { name: "Gunung Sindoro", height: "3.153 mdpl", tags: ["Jawa Tengah"], img: "/projects/sindoro.jpg" },
  { name: "Gunung Lawu", height: "3.265 mdpl", tags: ["Jawa Tengah"], img: "/projects/lawu.jpg" },
  { name: "Gunung Sumbing", height: "3.371 mdpl", tags: ["Jawa Tengah"], img: "/projects/sumbing.jpg" },
  { name: "Gunung Slamet", height: "3.428 mdpl", tags: ["Jawa Tengah"], img: "/projects/slamet.jpg" },
  { name: "Gunung Ciremai", height: "3.078 mdpl", tags: ["Jawa Barat"], img: "/projects/next.png" },
  { name: "Gunung Argopuro", height: "3.088 mdpl", tags: ["Jawa Timur"], img: "/projects/next.png" },
  { name: "Gunung Raung", height: "3.332 mdpl", tags: ["Jawa Timur"], img: "/projects/next.png" },
  { name: "Gunung Rinjani", height: "3.726 mdpl", tags: ["NTB"], img: "/projects/next.png" },
  { name: "Gunung Semeru", height: "3.676 mdpl", tags: ["Jawa Timur"], img: "/projects/next.png" },
  { name: "Gunung Kerinci", height: "3.05 mdpl", tags: ["Jambi"], img: "/projects/next.png" },
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
      shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-left"
    >
      {children}
    </motion.div>
  );
}

// --- MAIN COMPONENT -----------------------------------
export default function MountainsSection() {
  const [query, setQuery] = useState("");

  const filteredMountains = useMemo(() => {
    return mountains.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <section id="peaks" className="relative py-16 sm:py-24 px-4">
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
            Summits{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6C63FF] to-[#a38cf7]">
              Reached
            </span>{" "}
            
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Berikut adalah daftar gunung yang sudah saya daki lengkap dengan
            ketinggian dan lokasi.
          </p>
        </motion.div>

        {/* Search */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="relative w-full md:w-80">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari gunung..."
              className="w-full rounded-full pl-4 pr-4 py-2.5 
              bg-black dark:bg-zinc-900 
              border border-zinc-800 dark:border-white/20 
              text-zinc-200 dark:text-zinc-200 
              text-sm sm:text-base
              outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>
        </div>

        {/* Mountains Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6"
        >
          <AnimatePresence>
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
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
