"use client";
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Briefcase, User, Compass, Zap } from "lucide-react";

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
      className="relative py-24 md:py-32 px-4 text-white overflow-hidden bg-transparent min-h-screen"
    >
      {/* === Subtle Parallax Glow Background === */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-purple-500/30 rounded-full mix-blend-screen blur-[120px] opacity-15 animate-pulse delay-1000"></div>
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10 text-center md:text-left">
        {/* === TITLE === */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, type: "spring" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 leading-tight"
        >
          Unraveling{" "}
          <motion.span
            className="relative inline-block text-primary font-extrabold"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          >
            My Core
          </motion.span>
        </motion.h2>

        {/* === GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* === LEFT TEXT === */}
          <motion.div
            data-aos="fade-right"
            className="md:col-span-3 space-y-8"
          >
            <motion.h3
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-light text-primary border-l-4 border-primary pl-4"
            >
              Informatics Student & Web Enthusiast
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-200 leading-relaxed text-base md:text-lg"
            >
              Halo! Saya adalah mahasiswa Informatika yang mencintai dunia
              pengembangan web. Saya berfokus pada keseimbangan antara{" "}
              <span className="font-semibold text-white">
                logika backend yang kuat
              </span>{" "}
              dan{" "}
              <span className="font-semibold text-white">
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
              className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-6 pt-8"
            >
              <ShineButton href="#contact" variant="primary">
                <Code size={18} /> Mulai Proyek
              </ShineButton>

              <ShineButton href="projects/cvdwi.pdf" download variant="secondary">
                <Briefcase size={18} /> Lihat CV
              </ShineButton>
            </motion.div>
          </motion.div>

          {/* === RIGHT CARDS === */}
          <div
            className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <AestheticCard icon={Code} title="Full-Stack Web Architect" description="Membangun aplikasi modern dan scalable." />
            <AestheticCard icon={User} title="UI/UX Intuitif" description="Menciptakan pengalaman pengguna yang nyaman dan estetis." />
            <AestheticCard icon={Zap} title="Optimisasi Performa" description="Menekankan kecepatan dan efisiensi kode." />
            <AestheticCard icon={Compass} title="Mindset & Eksplorasi" description="Menerapkan semangat hiking dalam membangun solusi digital." />
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
    className="relative p-0.5 rounded-2xl bg-white/10 shadow-xl hover:shadow-primary/30 transition-all duration-500 ease-out 
    backdrop-blur-lg border border-white/10 hover:border-primary/40 group cursor-pointer"
  >
    <div className="p-5 bg-gray-950/40 h-full rounded-2xl">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-primary/10 transition-all duration-500 
        group-hover:bg-primary/20 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/20">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-lg text-white mb-1 group-hover:text-primary transition-colors duration-300">
            {title}
          </h4>
          <p className="text-gray-400 text-sm leading-snug">{description}</p>
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
    className={`relative group overflow-hidden py-3 px-8 text-base font-semibold rounded-lg 
    transition-all duration-500 ease-in-out shadow-md w-56 text-center
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
