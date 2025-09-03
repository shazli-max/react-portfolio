import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl max-auto text-center z-10">
        <div className="sapce-y-6 ">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 ml-2">
              Shazli
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Hassan
            </span>
          </h1>
          <p className="mt-2 text-lg md:text-xl text-muted-forground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            Tech enthusiast, with intreset in connecting hardware with it's
            proper software
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#project" className="cosmic-button">
              View my work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <sapn className="text-sm text-muted-foreground mb-2">Scroll</sapn>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
