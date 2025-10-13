"use client";
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Briefcase, User, Zap, Server } from "lucide-react";

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-gray-900 dark:text-white overflow-hidden bg-transparent min-h-screen"
    >
      {/* === Subtle Parallax Glow Background === */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/3 left-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/30 rounded-full mix-blend-screen blur-[100px] opacity-25 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[18rem] sm:w-[22rem] md:w-[28rem] h-[18rem] sm:h-[22rem] md:h-[28rem] bg-purple-500/30 rounded-full mix-blend-screen blur-[120px] opacity-15 animate-pulse delay-1000"></div>
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10 text-center md:text-left">
        {/* === TITLE === */}
      <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, type: "spring" }}
  viewport={{ once: true }}
  className="relative text-3xl sm:text-4xl md:text-6xl font-extrabold text-center mb-10 sm:mb-16 leading-tight select-none"
>
  <motion.span
    className="relative inline-block group cursor-pointer"
    whileHover={{
      scale: 1.08,
      rotate: -1,
      textShadow: "0px 0px 12px rgba(120,180,255,0.6)",
    }}
    transition={{ type: "spring", stiffness: 200, damping: 12 }}
  >
    {/* === Gradient Text with shimmer effect === */}
    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6FB1FC] via-[#A1C4FD] to-[#C2E9FB] dark:from-[#7DD3FC] dark:via-[#818CF8] dark:to-[#C084FC] bg-[length:200%_200%] animate-gradient-shimmer group-hover:animate-gradient-glow">
      Unraveling My Core
    </span>

    {/* === Underline animation === */}
    <motion.span
      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-[#A1C4FD] to-[#818CF8] rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      whileHover={{ scaleX: 1.05 }}
      transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
    />
  </motion.span>
</motion.h2>

<style jsx global>{`
  /* === Shimmer animation === */
  @keyframes gradient-shimmer {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* === Subtle glow animation === */
  @keyframes gradient-glow {
    0% {
      filter: drop-shadow(0 0 6px rgba(130, 180, 255, 0.4))
        drop-shadow(0 0 10px rgba(160, 200, 255, 0.2));
    }
    50% {
      filter: drop-shadow(0 0 14px rgba(120, 170, 255, 0.6))
        drop-shadow(0 0 18px rgba(150, 190, 255, 0.4));
    }
    100% {
      filter: drop-shadow(0 0 6px rgba(130, 180, 255, 0.4))
        drop-shadow(0 0 10px rgba(160, 200, 255, 0.2));
    }
  }

  .animate-gradient-shimmer {
    background-size: 200% 200%;
    animation: gradient-shimmer 6s ease infinite;
  }

  .group-hover\\:animate-gradient-glow:hover {
    animation: gradient-glow 3s ease-in-out infinite;
  }
`}</style>


        {/* === GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* === LEFT TEXT === */}
          <motion.div
            data-aos="fade-right"
            className="md:col-span-3 space-y-6 sm:space-y-8"
          >
            <motion.h3
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary border-l-4 border-primary pl-3 sm:pl-4"
            >
              Informatics Student & Web Enthusiast
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg"
            >
              Halo! Saya adalah mahasiswa Informatika yang mencintai dunia
              pengembangan web. Saya berfokus pada keseimbangan antara{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                logika backend yang kuat
              </span>{" "}
              dan{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                antarmuka pengguna yang menawan
              </span>
              . Tujuan saya adalah menghadirkan solusi digital yang tidak hanya
              berfungsi, tapi juga menyenangkan digunakan.
            </motion.p>

            {/* === BUTTONS === */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 sm:gap-6 pt-6"
            >
              <ShineButton href="#contact" variant="primary">
                <Code size={18} /> Mulai Proyek
              </ShineButton>

              <ShineButton
                href="projects/cvdwi.pdf"
                download
                variant="secondary"
              >
                <Briefcase size={18} /> Lihat CV
              </ShineButton>
            </motion.div>
          </motion.div>

          {/* === RIGHT CARDS === */}
          <div
            className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 sm:gap-8"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <AestheticCard
              icon={Code}
              title="Full-Stack Web Architect"
              description="Membangun aplikasi modern dan scalable."
            />
            <AestheticCard
              icon={User}
              title="UI/UX Intuitif"
              description="Menciptakan pengalaman pengguna yang nyaman dan estetis."
            />
            <AestheticCard
              icon={Zap}
              title="Optimisasi Performa"
              description="Menekankan kecepatan dan efisiensi kode."
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

/* === CARD === */
const AestheticCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 1 }}
    transition={{ type: "spring", stiffness: 120 }}
    className="relative p-0.5 rounded-2xl bg-white/10 dark:bg-white/5 shadow-xl hover:shadow-primary/30 transition-all duration-500 ease-out 
    backdrop-blur-lg border border-white/10 dark:border-white/5 hover:border-primary/40 group cursor-pointer"
  >
    <div className="p-4 sm:p-5 bg-gray-50/50 dark:bg-gray-950/40 h-full rounded-2xl">
      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className="p-2 sm:p-3 rounded-xl bg-primary/10 transition-all duration-500 
        group-hover:bg-primary/20 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/20"
        >
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">
            {title}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-snug">
            {description}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

/* === BUTTON === */
const ShineButton = ({ children, href, download = false, variant = "primary" }) => (
  <motion.a
    href={href}
    download={download}
    target={download ? "_self" : "_blank"}
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 200 }}
    className={`relative group overflow-hidden py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base font-semibold rounded-lg 
    transition-all duration-500 ease-in-out shadow-md w-full sm:w-48 md:w-56 text-center
    ${
      variant === "primary"
        ? "bg-primary text-gray-900 hover:bg-primary/90 shadow-primary/30"
        : "border border-primary text-primary bg-transparent hover:bg-primary/10 hover:border-primary/80 shadow-inner"
    }`}
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
    </span>
    <motion.span
      className="absolute top-0 left-[-75%] w-[50%] h-full bg-white opacity-20 transform -skew-x-12"
      animate={{ left: ["-75%", "125%"] }}
      transition={{
        repeat: Infinity,
        repeatDelay: 2.5,
        duration: 2,
        ease: "easeInOut",
      }}
    />
  </motion.a>
);

/* === GRADIENT ANIMATION === */
<style jsx global>{`
  @keyframes gradient-move {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .animate-gradient-move {
    background-size: 200% 200%;
    animation: gradient-move 5s ease infinite;
  }
`}</style>;
