import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Code, Users, Lightbulb } from "lucide-react";

const About = () => {
  const skills = [
    "Figma", "Adobe XD", "Sketch", "Prototyping", "User Research",
    "React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"
  ];

  const expertise = [
    {
      icon: Palette,
      title: "Visual Design",
      description: "Creating beautiful, modern interfaces that captivate and engage users while maintaining brand consistency."
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive, performant web applications with modern technologies and best practices."
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Conducting user research and designing intuitive experiences that solve real problems."
    },
    {
      icon: Lightbulb,
      title: "Product Strategy",
      description: "Collaborating with teams to define product vision and create solutions that drive business goals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over 5 years of experience in digital design and development, I bridge the gap 
              between beautiful design and functional code. I believe great products are born from 
              the intersection of user needs, business goals, and technical possibilities.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {expertise.map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;