import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A fully-featured e-commerce platform with seamless checkout and inventory management.",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: "FinTech Mobile App",
    category: "App Development",
    description: "Mobile banking application with secure transactions and real-time analytics.",
    tags: ["React Native", "Firebase", "Plaid"],
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Comprehensive analytics dashboard for a B2B SaaS platform.",
    tags: ["Figma", "React", "D3.js"],
  },
  {
    title: "Healthcare Portal",
    category: "Custom Software",
    description: "Patient management system with appointment scheduling and telemedicine features.",
    tags: ["Vue.js", "Python", "PostgreSQL"],
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Property listing and virtual tour platform with advanced search capabilities.",
    tags: ["Next.js", "Three.js", "Mapbox"],
  },
  {
    title: "Fitness Tracking App",
    category: "App Development",
    description: "Health and fitness app with workout plans, nutrition tracking, and social features.",
    tags: ["Flutter", "Go", "MongoDB"],
  },
];

const industries = [
  "E-commerce",
  "FinTech",
  "Healthcare",
  "Real Estate",
  "Education",
  "Entertainment",
];

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Work
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-6">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of successful projects across various industries 
              and see how we've helped businesses achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Tags */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all"
              >
                {industry}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-all duration-500"
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/20">
                      {project.title.split(" ")[0]}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <ExternalLink size={20} className="text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Have a Project in <span className="text-primary">Mind?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can bring your vision to life.
            </p>
            <Button variant="glow" size="lg" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;
