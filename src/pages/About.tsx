import { Layout } from "@/components/layout/Layout";
import { Target, Users, Lightbulb, Heart } from "lucide-react";
import logoDark from "@/assets/logo-dark.svg";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're focused on building tools that genuinely help people work better and achieve more.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Every feature we build starts with understanding our users' real needs and challenges.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and approaches to solve problems in better ways.",
  },
  {
    icon: Heart,
    title: "Quality First",
    description: "We take pride in our craft and strive for excellence in everything we create.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img src={logoDark} alt="AllInOne" className="h-20 w-20" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">AllInOne</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're building a unified platform where powerful solutions come together 
              to help teams and individuals achieve more.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AllInOne started with a simple observation: modern teams use dozens of 
                  disconnected tools, spending more time switching contexts than actually 
                  getting work done.
                </p>
                <p>
                  We set out to build something different — a unified platform where 
                  every tool works seamlessly together. Starting with Knowledge, our 
                  intelligent knowledge management solution, we're building an ecosystem 
                  of powerful, interconnected tools.
                </p>
                <p>
                  Our vision is a world where technology empowers rather than overwhelms, 
                  where teams can focus on what matters most without the friction of 
                  juggling multiple platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass rounded-2xl p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Journey
            </h2>
            <p className="text-muted-foreground mb-6">
              We're just getting started. Be part of the AllInOne community and help 
              shape the future of integrated solutions.
            </p>
            <a
              href="https://knowledge.allinone.ovh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Try Knowledge Today →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
