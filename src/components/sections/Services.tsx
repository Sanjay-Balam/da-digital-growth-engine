import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Globe, 
  Smartphone, 
  Code, 
  Palette, 
  Share2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "SEO, PPC, and performance marketing strategies that drive real results and measurable growth.",
    color: "from-primary to-primary/50",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
    color: "from-secondary to-secondary/50",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android that users love.",
    color: "from-neon-pink to-neon-pink/50",
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions designed to automate and streamline your business operations.",
    color: "from-primary to-secondary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that create memorable experiences and drive conversions.",
    color: "from-secondary to-neon-pink",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic social media presence that builds brand awareness and engages your audience.",
    color: "from-neon-pink to-primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Services That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From strategy to execution, we provide comprehensive digital solutions 
            to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                style={{ backgroundImage: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))` }} 
              />
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4`}>
                <service.icon size={24} className="text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
