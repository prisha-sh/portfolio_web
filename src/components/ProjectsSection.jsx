import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "JobGenius - AI Powered Smart Job Portal",
    description:
      "A full stack AI driven job platform that streamlines hiring. Includes AI based resume screening reducing manual effort by 40%, along with real time chat and video interview features. Scalable React frontend and robust Node.js/PostgreSQL backend.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "PostgreSQL", "AI/ML", "WebRTC"],
    demoUrl: "#",
    githubUrl: "https://github.com/prisha-sh/JobGenius",
  },
  {
    id: 2,
    title: "Tech Horizon - MERN Stack EdTech Platform",
    description:
      "A full stack learning platform with role based access, secure JWT authentication, and responsive dashboards. Designed with structured architecture for scalability and intuitive UI for better user engagement.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    demoUrl: "#",
    githubUrl: "https://github.com/prisha-sh/Tech-Horizon",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A fully custom personal portfolio built using React, Node.js, PostgreSQL, and Tailwind CSS to showcase my technical skills, projects, and professional journey. The website follows modern UI UX principles, responsive design patterns, and clean component based architecture.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/prisha-sh/portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project reflects my focus on
          problem solving, clean code, performance, and real world impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
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
            target="_blank"
            href="https://github.com/prisha-sh"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
