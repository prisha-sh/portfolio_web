import { Award } from "lucide-react";

const achievements = [
    "Reliance Foundation Undergraduate Scholar",
    "Infosys Pragati Scholar",
    "Microsoft Code Without Barriers Mentee",
    "Shefi Scholar",
    "She Codes Participant",
    "GHCI 25 Scholar",
    "GirlScript Summer of Code Contributor",
    "Amazon ML School Selected",
    "PwC AI Launchpad Trainee",
    "Stanford Supervised Machine Learning",
    "Naukri Campus Young Turks 99.95 Percentile",
    "NPTEL Topper",
    "IIT Indore Research Intern",
    "IIT Indore MUN Winner",
    "Aryajyani Contest Winner",
    "Be Visioness Scholar",
];

export const ExtracurricularsSection = () => {
    return (
        <section id="extracurriculars" className="py-24 px-4 relative bg-secondary/10">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Extracurriculars & <span className="text-primary">Achievements</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className="bg-card p-6 rounded-xl shadow-sm border border-border/50 hover:border-primary/50 transition-all duration-300 flex items-center gap-4 hover:shadow-md hover:-translate-y-1"
                        >
                            <div className="p-2 rounded-full bg-primary/10 shrink-0">
                                <Award className="h-5 w-5 text-primary" />
                            </div>
                            <p className="font-medium text-sm md:text-base leading-snug">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
