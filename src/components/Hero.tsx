import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern workspace" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Alex Chen
              </h1>
              <h2 className="text-2xl md:text-3xl text-foreground/80 font-light">
                UI/UX Developer & Digital Designer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I craft digital experiences that delight users and drive business growth. 
              Specializing in modern web design, mobile interfaces, and user-centered solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="group"
              >
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
                <Mail className="w-4 h-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-float"></div>
              <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full opacity-30 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-primary"
        >
          <ArrowDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;