import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Globe, 
  Smartphone, 
  Code, 
  Palette, 
  Share2,
  ArrowRight,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    subtitle: "Drive Traffic & Conversions",
    description: "Comprehensive digital marketing solutions including SEO, PPC, performance marketing, and analytics to maximize your ROI.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Performance Marketing",
      "Analytics & Reporting",
      "Conversion Rate Optimization",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    subtitle: "Modern & Scalable Websites",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    features: [
      "Custom Website Design",
      "E-commerce Solutions",
      "Web Application Development",
      "CMS Integration",
      "Performance Optimization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "iOS & Android Apps",
    description: "Native and cross-platform mobile applications that provide seamless experiences across all devices.",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Solutions",
      "App Store Optimization",
      "Maintenance & Support",
    ],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    subtitle: "Tailored Business Solutions",
    description: "Bespoke software solutions designed to automate processes and solve unique business challenges.",
    features: [
      "Enterprise Software",
      "API Development & Integration",
      "Cloud Solutions",
      "Automation Tools",
      "Legacy System Modernization",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    subtitle: "Beautiful & Intuitive Designs",
    description: "User-centered design that creates memorable experiences and drives engagement and conversions.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "Design Systems",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    subtitle: "Build Your Online Presence",
    description: "Strategic social media management that builds brand awareness and engages your target audience.",
    features: [
      "Content Strategy & Creation",
      "Community Management",
      "Influencer Marketing",
      "Social Media Advertising",
      "Analytics & Reporting",
    ],
  },
];

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-6">
              Solutions That <span className="gradient-text">Drive Growth</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive digital services designed to transform your business 
              and accelerate your growth in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4">
                    <service.icon size={28} className="text-primary-foreground" />
                  </div>
                  <span className="text-primary text-sm font-medium block mb-2">
                    {service.subtitle}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="text-primary flex-shrink-0" size={18} />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline-glow" asChild>
                    <Link to="/contact">
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-card to-muted border border-border p-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                    <service.icon size={120} className="text-primary/20" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="p-4 rounded-xl bg-card/80 backdrop-blur border border-border">
                        <p className="text-sm font-medium text-foreground">{service.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">Transform your business</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <Button variant="glow" size="lg" asChild>
              <Link to="/contact">
                Get a Free Consultation
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

export default ServicesPage;
