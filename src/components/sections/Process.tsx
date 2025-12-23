import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and target audience.",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "Develop a comprehensive roadmap tailored to achieve your objectives.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Create stunning visuals and intuitive user experiences that captivate.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Build robust, scalable solutions using cutting-edge technologies.",
  },
  {
    icon: Rocket,
    title: "Launch & Growth",
    description: "Deploy, monitor, and continuously optimize for maximum impact.",
  },
];

const Process = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures every project is delivered with excellence.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Icon Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-card border-2 border-primary flex items-center justify-center glow-effect">
                  <step.icon size={24} className="text-primary" />
                </div>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-medium">
                  0{index + 1}
                </span>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
