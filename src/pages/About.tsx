import { motion } from "framer-motion";
import { Target, Eye, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import agencyTeamImage from "@/assets/agency-team.jpg";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is designed with measurable outcomes in mind.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We partner with you, not just for you.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver nothing but the highest quality in everything we do.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "Staying ahead with cutting-edge technologies and creative solutions.",
  },
];

const whyChooseUs = [
  "Fresh perspective with modern technologies",
  "Dedicated team of passionate experts",
  "24/7 support and maintenance",
  "Transparent pricing, no hidden costs",
  "Agile methodology for faster delivery",
  "End-to-end digital solutions",
];

const teamMembers = [
  {
    name: "Akshay",
    role: "Marketing & Creative Head",
    description: "Akshay heads the digital marketing division, handling social media management, video editing, and performance marketing strategies. His creative vision and data-driven approach help businesses build strong online presence and engagement.",
  },
  {
    name: "Venkat",
    role: "Full-Stack Developer",
    description: "Venkat specializes in building robust web and mobile applications. His expertise in modern technologies ensures our clients get scalable, high-performance digital solutions.",
  },
  {
    name: "Sanjay",
    role: "Full-Stack Developer",
    description: "Sanjay specializes in building robust web and mobile applications. His expertise in modern technologies ensures our clients get scalable, high-performance digital solutions.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-6">
              We Are <span className="text-primary">DA Digital</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A full-service digital agency dedicated to helping businesses thrive 
              in the digital age through innovative solutions and strategic thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
                A Fresh Start in <span className="text-primary">2025</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  DA Digital Growth Agency was founded in 2025 by three passionate individuals—
                  <span className="text-foreground font-medium">Akshay, Venkat, and Sanjay</span>—
                  with a shared vision: to help businesses thrive in the digital era through 
                  innovative, result-driven solutions.
                </p>
                <p>
                  Our team brings together the perfect blend of creativity and technical expertise. 
                  <span className="text-foreground font-medium"> Akshay</span> leads our marketing 
                  and creative division, managing social media, video production, and digital 
                  marketing campaigns that capture attention and drive engagement.
                </p>
                <p>
                  On the development front, <span className="text-foreground font-medium">Venkat and Sanjay</span> form 
                  our powerhouse dev team. Together, they build cutting-edge web applications, 
                  mobile apps, and custom software solutions that empower businesses to scale 
                  and succeed in today's competitive landscape.
                </p>
                <p>
                  Though we're a young agency, our combined skills and relentless dedication 
                  make us the ideal partner for startups, entrepreneurs, and growing businesses 
                  looking for a team that truly cares about their success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-border">
                <img 
                  src={agencyTeamImage} 
                  alt="DA Digital Growth Agency - Modern tech workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-card border border-border p-4 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-primary">2025</span>
                <p className="text-xs text-muted-foreground text-center">Founded</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Meet The Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              The <span className="text-primary">Founders</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{member.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                <p className="text-primary text-sm text-center mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground text-center">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower startups and growing businesses with affordable, high-quality 
                digital solutions. We believe every business deserves access to expert 
                marketing, stunning designs, and powerful technology—regardless of size or budget.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Eye className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the go-to digital partner for ambitious businesses, known for 
                our fresh ideas, transparent approach, and genuine commitment to helping 
                our clients succeed in the digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              What <span className="text-primary">Drives Us</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30" id="why-choose-us">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
                The <span className="text-primary">DA Advantage</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                When you partner with DA Digital, you're choosing a team that's 
                genuinely invested in your success. Here's what sets us apart:
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 rounded-full border-2 border-primary/20 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-2 border-primary/30 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">DA</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to <span className="text-primary">Work Together?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help transform your business.
            </p>
            <Button variant="glow" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
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

export default About;
