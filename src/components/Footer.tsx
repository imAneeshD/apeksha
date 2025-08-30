import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://imapeksha.github.io/Portfolio/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/apeksha-d-uiux/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:apekshad90@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Apeksha Dembala
              </div>
              <p className="text-muted-foreground max-w-xs">
                Creating digital experiences that inspire and engage users through thoughtful design and development.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <div className="space-y-2">
                {['About', 'Portfolio', 'Contact'].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Connect</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground">apekshad90@gmail.com</p>
                <p className="text-muted-foreground">+91 6360405023</p>
                <div className="flex gap-3 pt-2">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© {currentYear} Apeksha Dembala. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of coffee.</span>
            </div>
            
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
            >
              Back to top ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;