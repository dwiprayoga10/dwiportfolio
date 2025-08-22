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
          {/* Foto Profil */}
          <div className="flex justify-center">
            <img
              src="/projects/saya.jpg"
              alt="Hazard Prayoga"
              className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg opacity-0 animate-fade-in"
            />
          </div>

          {/* Judul dengan efek typing */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="text-primary">
              <ReactTyped
                strings={[
                  "Hazard Prayoga",
                  "An Informatics Engineering ",
                  "A Web Developer",
                  "A Hiker"
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1500}
                loop
              />
            </span>
          </h1>

<p className="text-lg md:text-xl text-muted-foreground max-w-1xl mx-auto opacity-0 animate-fade-in-delay-3">
  I am an Informatics Engineering student at Dian Nuswantoro University. 
  With a strong interest in technology and creativity, I enjoy building modern web experiences. 
</p>



          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
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
