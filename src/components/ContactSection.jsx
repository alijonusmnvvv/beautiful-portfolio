import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span>Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have questions or want to work together? Feel free to reach out via
          email or connect on social media. I'm always open to discussing new
          projects, collaborations, or opportunities to contribute.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-18">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="mt-15 flex flex-col items-center space-y-8">
              <div className="grid grid-cols-[40px_1fr] items-center min-w-[400px]">
                <div className="-ml-2 p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:alijonusmnvvv@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    alijonusmnvvv@gmail.com
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-[40px_1fr] items-center min-w-[400px]">
                <div className="-ml-2 p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+491727864217"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +49 (172) 786-4217
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-[40px_1fr] items-center min-w-[400px]">
                <div className="-ml-2 p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Berlin, Germany
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/alijon-usmonov-466846309/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>
                <a href="https://x.com/alijonusmnvvv" target="_blank" rel="noreferrer">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/_.al1jon._/" target="_blank" rel="noreferrer">
                  <Instagram />
                </a>
                <a href="mailto:alijonusmnvvv@gmail.com?subject=Contact%20from%20portfolio" aria-label="Send email" target="_blank" rel="noreferrer">
                  <Mail />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name:"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email:"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none h-14 overflow-y-auto"
                    placeholder="Hello, I would like to discuss..."
                />

              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
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
