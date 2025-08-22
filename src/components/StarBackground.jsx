import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/* ======= BACKGROUND MALAM (Bintang, Meteor, Bulan) ======= */
function StarBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    spawnMeteor();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    const meteorInterval = setInterval(() => {
      const count = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < count; i++) spawnMeteor();
    }, 1500);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(meteorInterval);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 7000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.7 + 0.3,
        animationDuration: Math.random() * 4 + 3,
        animationDelay: Math.random() * 5,
      });
    }
    setStars(newStars);
  };

  const spawnMeteor = () => {
    const id = Date.now() + Math.random();
    const newMeteor = {
      id,
      size: Math.random() * 2 + 1,
      x: Math.random() * 90,
      y: Math.random() * 30,
      animationDuration: Math.random() * 1.5 + 2.5,
    };
    setMeteors((prev) => [...prev, newMeteor]);

    setTimeout(() => {
      setMeteors((prev) => prev.filter((m) => m.id !== id));
    }, (newMeteor.animationDuration + 1) * 1000);
  };

  return (
    <div className="star-background">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            width: `${meteor.size * 80}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
      <div className="nebula" />
      <div className="moon" />

      <style>{`
        .star-background {
          position: fixed;
          inset: 0;
          overflow: hidden;
          z-index: 0;
          background: radial-gradient(ellipse at bottom, #0a0f29 0%, #020617 100%);
        }
        .star {
          position: absolute;
          border-radius: 50%;
          background: white;
          animation: twinkle infinite ease-in-out;
        }
        @keyframes twinkle {
          0%,100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .meteor {
          position: absolute;
          background: linear-gradient(90deg, white, rgba(255,255,255,0));
          border-radius: 9999px;
          transform: rotate(-45deg);
          animation: meteor linear forwards;
        }
        @keyframes meteor {
          0% { transform: translate(0,0) rotate(-45deg); opacity:1; }
          80% { opacity: 1; }
          100% { transform: translate(-600px,600px) rotate(-45deg); opacity:0; }
        }
        .nebula {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(circle at 30% 30%, rgba(138,43,226,0.3), transparent 70%),
                      radial-gradient(circle at 70% 60%, rgba(0,191,255,0.25), transparent 70%);
          animation: moveNebula 40s linear infinite alternate;
        }
        @keyframes moveNebula {
          0% { transform: translate(0,0) scale(1); }
          100% { transform: translate(50px,-50px) scale(1.2); }
        }
        .moon {
          position: absolute;
          top: 10%;
          right: 10%;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, #f9f9f9, #d6d6d6 70%);
          box-shadow: 0 0 30px rgba(255,255,200,0.7);
        }
      `}</style>
    </div>
  );
}

/* ======= BACKGROUND SIANG (Matahari & Awan) ======= */
function SunBackground() {
  return (
    <div className="sun-background">
      <div className="sun" />
      <div className="cloud cloud1" />
      <div className="cloud cloud2" />
      <div className="cloud cloud3" />

      <style>{`
        .sun-background {
          position: fixed;
          inset: 0;
          overflow: hidden;
          z-index: 0;
          background: linear-gradient(to bottom, #87ceeb, #e0f7fa);
        }
        .sun {
          position: absolute;
          top: 15%;
          right: 15%;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, #fff59d, #fbc02d);
          box-shadow: 0 0 50px rgba(255,223,0,0.8);
          animation: pulse 6s infinite alternate;
        }
        @keyframes pulse {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .cloud {
          position: absolute;
          background: #fff;
          border-radius: 50%;
          opacity: 0.9;
          animation: moveClouds linear infinite;
        }
        .cloud::before,
        .cloud::after {
          content: "";
          position: absolute;
          background: #fff;
          border-radius: 50%;
        }
        .cloud1 {
          width: 120px;
          height: 60px;
          top: 25%;
          left: 10%;
          animation-duration: 40s;
        }
        .cloud2 {
          width: 160px;
          height: 80px;
          top: 35%;
          left: 50%;
          animation-duration: 55s;
        }
        .cloud3 {
          width: 100px;
          height: 50px;
          top: 50%;
          left: 70%;
          animation-duration: 70s;
        }
        .cloud1::before {
          width: 60px;
          height: 60px;
          top: -20px;
          left: -30px;
        }
        .cloud1::after {
          width: 80px;
          height: 80px;
          top: -30px;
          right: -40px;
        }
        .cloud2::before {
          width: 80px;
          height: 80px;
          top: -20px;
          left: -40px;
        }
        .cloud2::after {
          width: 100px;
          height: 100px;
          top: -40px;
          right: -50px;
        }
        .cloud3::before {
          width: 50px;
          height: 50px;
          top: -10px;
          left: -20px;
        }
        .cloud3::after {
          width: 70px;
          height: 70px;
          top: -20px;
          right: -30px;
        }
        @keyframes moveClouds {
          from { transform: translateX(-200px); }
          to { transform: translateX(100vw); }
        }
      `}</style>
    </div>
  );
}

/* ======= WRAPPER BACKGROUND (Pilih berdasarkan theme) ======= */
export default function Background() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
    } else {
      // default ke dark
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return isDarkMode ? <StarBackground /> : <SunBackground />;
}

/* ======= TOGGLE THEME ======= */
export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // default ke dark
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 bg-white/70 dark:bg-black/50 backdrop-blur-md"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
