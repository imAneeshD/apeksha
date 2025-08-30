import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import projectMobile from "@/assets/project-mobile.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import portfolioBg from "@/assets/portfolio-bg.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A modern e-commerce mobile application with seamless user experience, intuitive navigation, and beautiful product showcases.",
      image: projectMobile,
      tags: ["UI Design", "Mobile", "E-commerce", "Figma"],
      link: "#",
      github: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Clean and comprehensive analytics dashboard for data visualization with real-time updates and interactive charts.",
      image: projectDashboard,
      tags: ["Web Design", "Dashboard", "Analytics", "React"],
      link: "#",
      github: "#"
    },
    {
      title: "Design System",
      description: "Complete design system with components, guidelines, and documentation for consistent product experiences.",
      image: portfolioBg,
      tags: ["Design System", "Components", "Documentation"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={portfolioBg} 
          alt="Portfolio background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A selection of projects that showcase my approach to solving design challenges 
              and creating meaningful user experiences.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-4 bg-card border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button variant="default" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <Button variant="cta" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;