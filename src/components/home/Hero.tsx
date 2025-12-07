import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";

export function Hero() {
  const { resolvedTheme } = useTheme();

  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      {/* Animated orbs - smaller on mobile */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-200" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in-up">
            <div className="relative">
              <img 
                src={resolvedTheme === "dark" ? logoDark : logoLight} 
                alt="AllInOne" 
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 animate-pulse-glow rounded-full"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass mb-6 sm:mb-8 animate-fade-in-up animation-delay-100">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm text-muted-foreground">Your unified platform</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up animation-delay-200 px-2">
            Everything You Need,{" "}
            <span className="text-gradient">All In One</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-300 px-4">
            A powerful suite of solutions designed to streamline your workflow. 
            From knowledge management to productivity tools — we've got you covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-400 px-4">
            <Button variant="hero" size="lg" className="sm:text-base md:text-lg" asChild>
              <Link to="/solutions">
                Explore Solutions
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="sm:text-base md:text-lg" asChild>
              <a href="https://knowledge.allinone.ovh/" target="_blank" rel="noopener noreferrer">
                Try Knowledge
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
