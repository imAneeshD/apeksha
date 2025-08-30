-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  tags TEXT[] DEFAULT '{}',
  project_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for projects (public read access)
CREATE POLICY "Anyone can view projects" 
ON public.projects 
FOR SELECT 
USING (true);

-- Create policies for contact messages (insert only)
CREATE POLICY "Anyone can submit contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

-- Create trigger for projects updated_at
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample projects
INSERT INTO public.projects (title, description, image_url, tags, project_url, github_url, featured) VALUES
('E-Commerce Mobile App', 'A modern e-commerce mobile application with seamless user experience, intuitive navigation, and beautiful product showcases.', '/src/assets/project-mobile.jpg', ARRAY['UI Design', 'Mobile', 'E-commerce', 'Figma'], '#', '#', true),
('Analytics Dashboard', 'Clean and comprehensive analytics dashboard for data visualization with real-time updates and interactive charts.', '/src/assets/project-dashboard.jpg', ARRAY['Web Design', 'Dashboard', 'Analytics', 'React'], '#', '#', true),
('Design System', 'Complete design system with components, guidelines, and documentation for consistent product experiences.', '/src/assets/portfolio-bg.jpg', ARRAY['Design System', 'Components', 'Documentation'], '#', '#', true),
('Banking Mobile App', 'Secure and intuitive banking application with modern UI/UX patterns and seamless user flows.', '/src/assets/project-mobile.jpg', ARRAY['Mobile', 'Banking', 'Security', 'React Native'], '#', '#', false),
('Social Media Platform', 'Modern social platform with real-time messaging, media sharing, and community features.', '/src/assets/project-dashboard.jpg', ARRAY['Social Media', 'Real-time', 'Community', 'Node.js'], '#', '#', false),
('E-learning Platform', 'Interactive learning management system with video streaming, progress tracking, and assessments.', '/src/assets/portfolio-bg.jpg', ARRAY['Education', 'Video', 'LMS', 'Vue.js'], '#', '#', false);