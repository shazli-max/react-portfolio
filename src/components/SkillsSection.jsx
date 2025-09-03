import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  //   Frontend
  { name: "HTML/CSS", level: 75, categorey: "frontend" },
  { name: "React", level: 60, categorey: "frontend" },
  { name: "JavaScript", level: 80, categorey: "frontend" },

  //   Backend
  { name: "Python", level: 75, categorey: "backend" },
  { name: "Gjango", level: 50, categorey: "backend" },
  { name: "Node.JS", level: 60, categorey: "backend" },
  { name: "SQLite", level: 80, categorey: "backend" },
  { name: "MonogoDB", level: 60, categorey: "backend" },

  //   TOOls
  { name: "Git/GitHub", level: 60, categorey: "tools" },
  { name: "VS Code", level: 75, categorey: "tools" },
  { name: "Bash", level: 50, categorey: "tools" },
];

const categoreies = ["all", "frontend", "backend", "tools"];
export const SkillsSections = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filterSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.categorey === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skill-Set</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categoreies.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                ></div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
