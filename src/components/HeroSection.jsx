import { ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Foto Profil dengan efek */}
          <div className="flex justify-center">
            <img
              src="/projects/saya.jpg"
              alt="Hazard Prayoga"
              className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg opacity-0 animate-fade-in 
                         transform transition duration-500 hover:scale-110 hover:rotate-2 hover:shadow-2xl"
            />
          </div>

          {/* Judul dengan efek typing */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight opacity-0 animate-fade-in-delay-2">
            Hi, I'm{" "}
            <span className="text-primary">
              <ReactTyped
                strings={[
                  "Hazard Prayoga",
                  "An Informatics Engineering",
                  "A Web Developer",
                  "A Hiker",
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1500}
                loop
              />
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I am an Informatics Engineering student at Dian Nuswantoro University.
            With a strong interest in technology and creativity, I enjoy building
            modern web experiences.
          </p>

          {/* Tombol Aksi */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex gap-4 justify-center">
<a
  href="#projects"
  className="cosmic-button text-sm md:text-base transition transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
>
  My Projects
</a>
<a
  href="#peaks"
  className="cosmic-button text-sm md:text-base transition transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
>
  The Peaks
</a>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
