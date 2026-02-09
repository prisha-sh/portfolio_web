import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "Lise Infotech Pvt Ltd",
    duration: "November 2025 to December 2025",
    points: [
      "Contributed to building a consumer facing web product for the US market, working across both frontend and backend modules.",
      "Helped translate business requirements into clean, maintainable, and scalable code while collaborating closely with design and engineering teams.",
      "Developed and improved more than ten core workflows, integrated REST APIs, and strengthened validation, error handling, and edge case handling to improve system reliability.",
      "Supported testing and release readiness by documenting implementation details and acceptance scenarios.",
      "Demonstrated ownership, execution quality, and strong problem solving skills, which led to receiving a Letter of Recommendation.",
    ],
  },
  {
    id: 2,
    role: "Frontend Development Intern",
    company: "IBM SkillsBuild",
    duration: "December 2024 to February 2025",
    points: [
      "Built responsive and scalable user interfaces using React.js, HTML, CSS, and JavaScript.",
      "Created more than fifteen reusable components aligned with design system guidelines and optimized performance to improve page load speed by 25 percent.",
      "Worked in agile sprints, participated in stand ups, demos, and retrospectives, and ensured smooth end to end user workflows through API integration and testing.",
    ],
  },
  {
    id: 3,
    role: "AI ML Intern",
    company: "AICTE Microsoft and SAP",
    duration: "December 2024",
    points: [
      "Worked on processing and analyzing large scale motion data to extract meaningful performance insights.",
      "Developed a real time full body motion analysis model that achieved 96 percent predictive accuracy.",
      "Implemented proxy to motion learning pipelines to ensure reliable tracking at 30 FPS using Python, TensorFlow, OpenCV, and Pandas.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Professional <span className="text-primary"> Experience</span>
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-border/50 rounded-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } relative`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 bg-primary w-3.5 h-3.5 rounded-full border-4 border-background z-10 mt-1.5" />

                {/* Content */}
                <div className="flex-1 md:w-1/2" />
                <div className="flex-1 md:w-1/2">
                  <div className={`
                     bg-card p-6 rounded-xl shadow-sm border border-border/50 hover:border-primary/30 transition-all duration-300
                     ${index % 2 === 0 ? "text-left" : "text-left"}
                   `}>
                    <div className="flex flex-col gap-1 mb-4">
                      <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                      <h4 className="text-lg font-semibold">{exp.company}</h4>
                      <span className="text-sm text-muted-foreground bg-primary/10 w-fit px-3 py-1 rounded-full">{exp.duration}</span>
                    </div>

                    <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground text-sm">
                      {exp.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
