import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "pending",
    description: "a react project",
    image: "/projects/reactapp.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoURL: "#",
    githubURL: "https://github.com/shazli-max",
  },
  {
    id: 2,
    title: "pending",
    description: "a react project",
    image: "/projects/reactapp.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoURL: "#",
    githubURL: "https://github.com/shazli-max",
  },
  {
    id: 3,
    title: "pending",
    description: "a react project",
    image: "/projects/reactapp.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoURL: "#",
    githubURL: "https://github.com/shazli-max",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="conatainer mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary ml-2">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here some of the projects i brought to life, Each one of is crafted
          with detail and emphasis of performance and user experience{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs crad-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center items-center">
                  <div className=" flex space-x-3">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/shazli-max"
            target="_blank"
          >
            Check out my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
