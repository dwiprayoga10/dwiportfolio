import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-20 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-pink-600/10 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        {/* Teks copyright */}
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Hazardprayoga10.co
          </span>
          . All rights reserved.
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
