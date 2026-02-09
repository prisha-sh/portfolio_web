import { Users, Presentation, Calendar, Heart, HandHeart, Smile } from "lucide-react";

const leadershipRoles = [
    {
        role: "Machine Learning Lead",
        organization: "ACM Student Chapter",
        description: "Led ML initiatives, organized workshops, and conducted technical sessions for 200+ students. Mentored juniors in Python and ML.",
        icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
        role: "Conference Organizer",
        organization: "National Level IEEE Conference",
        description: "Coordinated a two-day national conference with 300 research paper presentations, speakers, and logistics.",
        icon: <Presentation className="h-6 w-6 text-primary" />,
    },
    {
        role: "Hackathon Organizer",
        organization: "Prayatna Hackathon",
        description: "Managed a nationwide hackathon with 350 participants, handling logistics, judging, and prize distribution.",
        icon: <Calendar className="h-6 w-6 text-primary" />,
    },
];

const impactRoles = [
    {
        role: "Camp Lead",
        organization: "Menstrual Awareness Camp",
        description: "Led community awareness camp, distributing 300+ sanitary pads to rural women.",
        icon: <Heart className="h-6 w-6 text-primary" />,
    },
    {
        role: "Intern",
        organization: "Smile India Foundation",
        description: "Contributed to social initiatives and community support programs.",
        icon: <Smile className="h-6 w-6 text-primary" />,
    },
    {
        role: "Volunteer",
        organization: "HelpAge India NGO",
        description: "Volunteered for elderly care and support activities.",
        icon: <HandHeart className="h-6 w-6 text-primary" />,
    },
];

export const LeadershipSection = () => {
    return (
        <section id="leadership" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    Leadership & <span className="text-primary">Impact</span>
                </h2>

                {/* Leadership Subsection */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 border-l-4 border-primary pl-4">
                        Leadership
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {leadershipRoles.map((role, index) => (
                            <div
                                key={index}
                                className="bg-card p-6 rounded-lg shadow-sm border border-secondary hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 w-fit">
                                        {role.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">{role.role}</h3>
                                        <p className="text-primary text-sm font-medium mb-3">
                                            {role.organization}
                                        </p>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {role.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact Subsection */}
                <div>
                    <h3 className="text-2xl font-semibold mb-8 border-l-4 border-primary pl-4">
                        Impact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {impactRoles.map((role, index) => (
                            <div
                                key={index}
                                className="bg-card p-6 rounded-lg shadow-sm border border-secondary hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 w-fit">
                                        {role.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">{role.role}</h3>
                                        <p className="text-primary text-sm font-medium mb-3">
                                            {role.organization}
                                        </p>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {role.description}
                                        </p>
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
