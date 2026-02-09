import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Text Content */}
          <div className="flex-1 text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in block">Hi, I am</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1 block mt-2">
                Prisha Sharma
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
              Hi, I am Prisha Sharma, a professional Full Stack Developer,
              creative UI UX designer, and an enthusiastic learner in the world
              of AI ML, with strong fundamentals in both frontend and backend
              technologies. I love building seamless digital experiences that
              are both functional and visually engaging.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 flex justify-center md:justify-end opacity-0 animate-fade-in-delay-2">
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-[0_0_20px_rgba(139,92,246,0.5)]">
              <img
                src="/profile2.jpeg"
                alt="Prisha Sharma"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.style.backgroundColor = '#1a1a1a';
                  e.target.parentNode.innerHTML = '<div class="w-full h-full flex items-center justify-center text-primary font-bold text-xl">PS</div>';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

