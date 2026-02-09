import { Code, Database, Layout, Server, Brain, Workflow, Terminal, Globe, Palette } from "lucide-react";

const technicalExpertise = [
    {
        category: "Frontend Development",
        icon: <Layout className="h-6 w-6 text-primary" />,
        skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Responsive Design", "Redux", "Material UI"],
    },
    {
        category: "Backend Development",
        icon: <Server className="h-6 w-6 text-primary" />,
        skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "JWT Auth", "Firebase"],
    },
    {
        category: "UI/UX Design",
        icon: <Palette className="h-6 w-6 text-primary" />,
        skills: ["Figma", "Wireframing", "Prototyping", "User Centered Design", "Canva"],
    },
    {
        category: "DevOps and Tools",
        icon: <Terminal className="h-6 w-6 text-primary" />,
        skills: ["Git", "GitHub", "VS Code", "Postman", "Vite", "npm/yarn", "Docker", "AWS (Basic)"],
    },
    {
        category: "Generative AI",
        icon: <Brain className="h-6 w-6 text-primary" />,
        skills: ["Python", "TensorFlow", "OpenCV", "Pandas", "NumPy", "Scikit learn", "LLMs", "Stable Diffusion"],
    },
    {
        category: "Other Technologies",
        icon: <Globe className="h-6 w-6 text-primary" />,
        skills: ["C++", "Java", "Data Structures", "Algorithms", "Agile Methodologies", "Technical Writing"],
    },
];

export const TechStackSection = () => {
    return (
        <section id="tech-stack" className="py-24 px-4 relative bg-secondary/20">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-primary"> Expertise</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">Technologies I work with</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technicalExpertise.map((area, index) => (
                        <div
                            key={index}
                            className="group bg-card p-6 rounded-xl shadow-sm border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    {area.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{area.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {area.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border/50 hover:border-primary/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
