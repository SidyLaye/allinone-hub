import { Blocks, Globe, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Blocks,
    title: "Unified Platform",
    description: "All your tools in one place, seamlessly integrated for maximum productivity.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed and performance, ensuring you never have to wait.",
  },
  {
    icon: Lock,
    title: "Secure by Design",
    description: "Enterprise-grade security protecting your data at every level.",
  },
  {
    icon: Globe,
    title: "Always Available",
    description: "99.9% uptime guarantee with global infrastructure.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-gradient">AllInOne</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're building the future of integrated solutions with a focus on simplicity and power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
