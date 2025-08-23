import { ArrowUp, Github, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-border bg-gradient-to-b from-background via-background/50 to-background">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-6">
        {/* Social links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 shadow hover:shadow-lg"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 shadow hover:shadow-lg"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 shadow hover:shadow-lg"
          >
            <Instagram size={20} />
          </a>
        </div>

{/* Teks copyright */}
<p className="text-sm text-muted-foreground text-center">
  © {new Date().getFullYear()} Hazardprayoga10.co · All Rights Reserved
</p>


        {/* Tombol scroll to top */}
        <a
          href="#hero"
          className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 shadow-md hover:shadow-xl"
        >
          <ArrowUp
            size={22}
            className="group-hover:-translate-y-1 transition-transform duration-300"
          />
        </a>
      </div>
    </footer>
  );
};
