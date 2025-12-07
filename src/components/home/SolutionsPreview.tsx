import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Rocket, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: BookOpen,
    title: "Knowledge",
    description: "Centralized knowledge base for your team. Organize, search, and share information effortlessly.",
    status: "available" as const,
    href: "https://knowledge.allinone.ovh/",
    external: true,
  },
  {
    icon: Zap,
    title: "Automate",
    description: "Streamline repetitive tasks with powerful automation workflows.",
    status: "coming" as const,
    href: "/solutions",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Enterprise-grade security solutions to protect your data and infrastructure.",
    status: "coming" as const,
    href: "/solutions",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "One-click deployment solutions for your applications and services.",
    status: "coming" as const,
    href: "/solutions",
  },
];

export function SolutionsPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our growing suite of tools designed to help you work smarter, not harder.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`group relative glass rounded-2xl p-8 hover-lift animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                {solution.status === "available" ? (
                  <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                    Available
                  </span>
                ) : (
                  <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {solution.description}
              </p>

              {/* Link */}
              {solution.external ? (
                <a
                  href={solution.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  to={solution.href}
                  className="inline-flex items-center gap-2 text-muted-foreground font-medium"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/solutions">
              View All Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
