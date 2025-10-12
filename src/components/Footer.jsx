import { ArrowUp, Github, Linkedin, Instagram } from "lucide-react";
// Importasi utama untuk animasi
import { motion } from "framer-motion";

// Definisi varian (aturan) animasi untuk framer-motion
const footerVariants = {
  hidden: { opacity: 0, y: 50 }, // Kondisi awal (tersembunyi)
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1 // Animasi anak-anak (social icons) akan muncul berurutan
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};


export const Footer = () => {
  // Konstanta untuk kelas ikon sosial
  const socialIconClasses =
    "p-3 rounded-full text-foreground transition-all duration-300 shadow-xl backdrop-blur-sm bg-background/5 hover:bg-background/20 hover:scale-[1.1] ring-1 ring-border/50";

  return (
    // Menggunakan motion.footer untuk mengaktifkan animasi framer-motion
    <motion.footer
      id="footer" // Beri ID jika belum ada
      className="relative mt-24 border-t border-border/20 bg-background/5 backdrop-blur-md overflow-hidden"
      // Pengaturan animasi utama (saat footer muncul)
      variants={footerVariants}
      initial="hidden"
      whileInView="visible" // Animasi dimulai saat elemen terlihat di viewport
      viewport={{ once: true, amount: 0.3 }} // Hanya animasikan sekali, ketika 30% terlihat
    >
      {/* 1. Efek Elegan: Garis Gradient Halus dan Efek Noise */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      {/* Efek Noise/Tekstur Elegan (dapat disesuaikan) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
               backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4KICA8ZmlsdGVyIGlkPSJuIj4KICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjY1IiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+CiAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+CiAgPC9maWx0ZXI+CiAgPHJlY3Qgd2lkdGg9IjMwMCUiIGhlaWdodD0iMzAwJSIgZmlsbD0iYmxhY2siIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMC42Ii8+Cjwvc3ZnPg=="), linear-gradient(to top, rgba(0,0,0,0.05), transparent)'
           }}>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-8 relative z-10">
        
        {/* Social links - Di-wrap dengan motion.div untuk animasi staggerChildren */}
        <motion.div className="flex gap-6" variants={footerVariants}>
          <motion.a
            href="https://github.com/dwiprayoga10"
            target="_blank"
            rel="noopener noreferrer"
            className={socialIconClasses}
            variants={itemVariants}
            aria-label="GitHub Profile"
          >
            <Github size={22} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/dwi-prayoga111203"
            target="_blank"
            rel="noopener noreferrer"
            className={socialIconClasses}
            variants={itemVariants}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={22} />
          </motion.a>
          <motion.a
            href="https://instagram.com/hzrdpryga10"
            target="_blank"
            rel="noopener noreferrer"
            className={socialIconClasses}
            variants={itemVariants}
            aria-label="Instagram Profile"
          >
            <Instagram size={22} />
          </motion.a>
        </motion.div>

        {/* Teks copyright - Animasi muncul dari bawah */}
        <motion.p 
          className="text-sm font-light text-foreground/60 text-center tracking-wider"
          variants={itemVariants} // Menggunakan varian item agar ikut stagger
        >
          © {new Date().getFullYear()} Hazardprayoga10.co · All Rights Reserved
        </motion.p>


        {/* Tombol scroll to top - Animasi muncul dari bawah, desain elegan */}
        <motion.a
          href="#hero"
          className="group p-4 rounded-full text-primary transition-all duration-300 shadow-2xl backdrop-blur-sm bg-primary/10 hover:bg-primary/20 hover:-translate-y-1 transform-gpu ring-1 ring-primary/50"
          variants={itemVariants} // Menggunakan varian item agar ikut stagger
          aria-label="Scroll to top"
        >
          <ArrowUp
            size={24}
            className="group-hover:-translate-y-1 transition-transform duration-300"
          />
        </motion.a>
      </div>
    </motion.footer>
  );
};