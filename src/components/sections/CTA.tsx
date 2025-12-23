import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6">
            <Zap size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground">Ready to Grow?</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing Together</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Transform your digital presence and accelerate your business growth. 
            Schedule a free consultation today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="glow" size="lg" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="outline-glow" size="lg" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
