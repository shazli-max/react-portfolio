import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 -x-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              passionate web developer & tech creator{" "}
            </h3>
            <p className="text-muted-foreground">
              Bacholar's in electrical engineering with 3 years of experience
              making a pivot to web delevopment equipped with web techologies
              like html, css and javascript and with a knowledge ammunition in
              frameworks like react and node.js{" "}
            </p>
            <p className="text-muted-foreground">
              am passionate about techology and and finding new solutions to
              complex problems , constantly learing and delevoping in the
              ever-evollving web landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download CV{" "}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl">Web Development</h4>
                  <p className="text-muted-foreground">
                    creating resposive websites using modern framworks
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl">Web Development</h4>
                  <p className="text-muted-foreground">
                    desiging intuitive user interfaces and seamless user
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl">Web Development</h4>
                  <p className="text-muted-foreground">
                    leading projects from concepts to completions{" "}
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
