import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Instagram,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let’s create something amazing together
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Have a project in mind or want to discuss potential opportunities? I am always open to new collaborations and conversations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:prishasharma3179@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    prishasharma3179@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919589942773"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    9589942773
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Indore, Madhya Pradesh
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border/50 flex flex-col items-center">
              <h4 className="font-medium mb-4 text-lg text-center">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://github.com/prish-sh"
                  target="_blank"
                  className="p-3 bg-secondary rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/prisha-sharma"
                  target="_blank"
                  className="p-3 bg-secondary rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="p-3 bg-secondary rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="p-3 bg-secondary rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
            <p className="text-muted-foreground mb-6">I usually respond within 24 hours</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I would like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
