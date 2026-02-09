import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I am a third year Computer Science student at Acropolis Institute
              of Technology and Research with a strong foundation in full stack
              development and growing expertise in AI and Machine Learning.
            </p>
            <p className="text-muted-foreground">
              My journey into technology began with problem solving and
              experimentation, and over time evolved into a passion for building
              real world products. I have worked on consumer facing
              applications, intelligent job platforms, and AI based systems that
              analyze motion and generate meaningful insights.
            </p>

            <p className="text-muted-foreground">
              Beyond code, I am deeply involved in technical communities,
              leadership roles, and initiatives that empower women in tech. I
              enjoy debates, organizing events, mentoring, and working in
              collaborative environments where learning is continuous and impact
              is measurable.
            </p>
            <p className="text-muted-foreground">
              I see myself not just as a developer, but as a builder, leader,
              and problem solver who wants to create meaningful digital
              experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/123q3wvGD8eqc3UgYH2lwaABgN_sRbCe3/view"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
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
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and scalable applications using React, Node.js, Express, and databases like MongoDB and PostgreSQL.
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
                  <h4 className="font-semibold text-lg">AI and Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Working with Python, TensorFlow, and OpenCV to build intelligent models and data driven applications.
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
                  <h4 className="font-semibold text-lg">Projects and Leadership</h4>
                  <p className="text-muted-foreground">
                    Developed projects like JobGenius and Tech Horizon while actively participating in ACM, IEEE, and tech communities.
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
