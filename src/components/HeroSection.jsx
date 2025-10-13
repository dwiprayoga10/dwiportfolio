import { ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

// 🎨 Animation Variants for better control
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const profilePicVariants = {
  hidden: { scale: 0.8, rotate: -10, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.5,
    },
  },
};

export const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden" // Added overflow-hidden for safety
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* 🌠 Dynamic Background Effect (Optional but recommended for 'cool') */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-primary/10 opacity-70"></div>
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(transparent,black)]">
        {/* You can add a subtle particle background here */}
      </div>

      <motion.div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Foto Profil dengan Framer Motion */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants} // Use itemVariants or a specific one
          >
            <motion.img
              src="/projects/saya.jpg"
              alt="Hazard Prayoga"
              className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg 
                         transform transition duration-500 hover:scale-110 hover:rotate-2 hover:shadow-2xl cursor-pointer"
              variants={profilePicVariants} // Specific entrance animation
              whileHover={{ scale: 1.15, rotate: 5 }} // Interactive Hover
              whileTap={{ scale: 0.95 }} // Interactive Click
            />
          </motion.div>

          {/* Judul dengan efek typing */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <span className="text-primary">
              <ReactTyped
                strings={[
                  "Hazard Prayoga",
                  "An Informatics Engineering Student",
                  "A Web Developer",
                  "A Hiker",
                ]}
                typeSpeed={60} // Slightly faster for a modern feel
                backSpeed={30}
                backDelay={1500}
                loop
              />
            </span>
          </motion.h1>

          {/* Deskripsi */}
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I am an Informatics Engineering student at Dian Nuswantoro University.
            With a strong interest in technology and creativity, I enjoy building
            modern web experiences.
          </motion.p>

          {/* Tombol Aksi - Animated and Interactive */}
          <motion.div
            className="pt-4 flex gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="cosmic-button text-sm md:text-base transition"
              whileHover={{ scale: 1.05, y: -2 }} // Framer Motion Hover
              whileTap={{ scale: 0.95 }}
            >
              My Projects
            </motion.a>
            <motion.a
              href="#peaks"
              className="cosmic-button text-sm md:text-base transition"
              whileHover={{ scale: 1.05, y: -2 }} // Framer Motion Hover
              whileTap={{ scale: 0.95 }}
            >
              The Peaks
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator with Framer Motion 'repeat' */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }} // Keyframes for 'bouncing'
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
      

      </motion.div>
    </motion.section>
  );
};