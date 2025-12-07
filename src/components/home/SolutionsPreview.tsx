import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Rocket, Shield, Zap, BarChart3, Wallet, Calendar, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: BookOpen,
    title: "Knowledge",
    description: "Discover everything, learn anything. 300+ articles on tech, science, health, history, recipes, and more.",
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
    description: "Enterprise-grade security solutions to protect your data.",
    status: "coming" as const,
    href: "/solutions",
  },
  {
    icon: Cpu,
    title: "AI Tools",
    description: "AI-powered productivity tools for content generation and analysis.",
    status: "coming" as const,
    href: "/solutions",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Powerful insights and data visualization for smart decisions.",
    status: "coming" as const,
    href: "/solutions",
  },
  {
    icon: Wallet,
    title: "Finance",
    description: "Personal and business finance management made simple.",
    status: "coming" as const,
    href: "/solutions",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Smart scheduling and time management for busy teams.",
    status: "coming" as const,
    href: "/solutions",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "One-click deployment solutions for your applications.",
    status: "coming" as const,
    href: "/solutions",
  },
];

export function SolutionsPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Discover our growing suite of tools designed to help you work smarter, not harder.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`group relative glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover-lift animate-fade-in-up`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                {solution.status === "available" ? (
                  <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium bg-primary/20 text-primary rounded-full">
                    Available
                  </span>
                ) : (
                  <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium bg-muted text-muted-foreground rounded-full">
                    Soon
                  </span>
                )}
              </div>

              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                {solution.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 line-clamp-2">
                {solution.description}
              </p>

              {/* Link */}
              {solution.external ? (
                <a
                  href={solution.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-sm text-primary font-medium hover:gap-2 sm:hover:gap-3 transition-all"
                >
                  Get Started <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              ) : (
                <Link
                  to={solution.href}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-sm text-muted-foreground font-medium"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8 md:mt-12">
          <Button variant="outline" size="lg" className="text-sm sm:text-base" asChild>
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
