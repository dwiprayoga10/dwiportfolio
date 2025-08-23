import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          data-aos="fade-up"
        >
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Text Section */}
          <div className="order-1 md:order-1 space-y-6" data-aos="fade-up">
            <h3 className="text-2xl font-semibold">
              Informatics Student & Web Enthusiast
            </h3>

            <p className="text-muted-foreground">
              Di luar dunia teknologi, saya memiliki minat pada aktivitas luar
              ruangan, khususnya{" "}
              <span className="font-semibold">mendaki gunung</span>. Dari hal
              tersebut, saya belajar tentang{" "}
              <span className="italic">
                ketekunan, pemecahan masalah, dan kerja sama tim
              </span>
              . Nilai-nilai ini sangat memengaruhi cara saya menghadapi
              tantangan dalam proyek teknologi.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="projects/cv.pdf"
                download
                className="cosmic-button bg-primary/10 text-primary hover:bg-primary/20"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Cards Section */}
          <div className="order-2 md:order-2 grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover" data-aos="fade-up">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building modern and responsive web applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="gradient-border p-6 card-hover"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive and user-friendly interfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="gradient-border p-6 card-hover"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Adventure & Exploration
                  </h4>
                  <p className="text-muted-foreground">
                    Inspired by hiking, I bring creativity and teamwork to every
                    project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
