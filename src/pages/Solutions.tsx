import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Cloud, Database, MessageSquare, Rocket, Shield, Zap, BarChart3, Wallet, Calendar, FileText, Users, Globe, Lock, Cpu, Camera, Mail } from "lucide-react";
import SEO from "@/components/SEO";

const solutions = [
  {
    icon: BookOpen,
    title: "Knowledge",
    description: "Discover everything, learn anything. Your ultimate knowledge platform with 300+ articles covering tech, science, health, history, recipes, and more — all beautifully organized.",
    status: "available" as const,
    href: "https://knowledge.allinone.ovh/",
    features: ["300+ Articles", "12 Categories", "Daily Updates", "Smart Search"],
  },
  {
    icon: Zap,
    title: "Automate",
    description: "Streamline repetitive tasks with powerful automation workflows. Connect your favorite tools and let automation do the heavy lifting.",
    status: "coming" as const,
    features: ["Visual Workflow Builder", "200+ Integrations", "Webhooks", "Scheduled Tasks"],
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Enterprise-grade security solutions to protect your data and infrastructure. Advanced threat detection and compliance tools.",
    status: "coming" as const,
    features: ["Threat Detection", "Compliance Reports", "SSO Integration", "Audit Logs"],
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "One-click deployment solutions for your applications and services. From staging to production in seconds.",
    status: "coming" as const,
    features: ["One-Click Deploy", "Auto Scaling", "Rollback Support", "CI/CD Integration"],
  },
  {
    icon: Database,
    title: "Store",
    description: "Scalable cloud storage for all your data needs. Secure, fast, and reliable storage infrastructure.",
    status: "coming" as const,
    features: ["Unlimited Storage", "CDN Delivery", "Versioning", "Access Control"],
  },
  {
    icon: MessageSquare,
    title: "Connect",
    description: "Real-time communication tools for your team. Chat, video, and collaboration all in one place.",
    status: "coming" as const,
    features: ["Team Chat", "Video Calls", "Screen Sharing", "File Sharing"],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Powerful insights and data visualization. Track metrics, generate reports, and make data-driven decisions.",
    status: "coming" as const,
    features: ["Real-time Dashboards", "Custom Reports", "Data Export", "Team Insights"],
  },
  {
    icon: Wallet,
    title: "Finance",
    description: "Personal and business finance management. Track expenses, manage budgets, and plan for the future.",
    status: "coming" as const,
    features: ["Expense Tracking", "Budget Planning", "Invoice Management", "Financial Reports"],
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Smart scheduling and time management. Coordinate meetings, set reminders, and stay organized.",
    status: "coming" as const,
    features: ["Smart Calendar", "Meeting Scheduler", "Time Tracking", "Reminders"],
  },
  {
    icon: FileText,
    title: "Docs",
    description: "Collaborative document creation and management. Write, edit, and share documents with your team.",
    status: "coming" as const,
    features: ["Rich Editor", "Real-time Collab", "Templates", "Version History"],
  },
  {
    icon: Users,
    title: "Teams",
    description: "Team management and collaboration platform. Organize projects, assign tasks, and track progress.",
    status: "coming" as const,
    features: ["Project Boards", "Task Management", "Team Roles", "Activity Feed"],
  },
  {
    icon: Globe,
    title: "Translate",
    description: "AI-powered translation and localization. Break language barriers with accurate, context-aware translations.",
    status: "coming" as const,
    features: ["100+ Languages", "AI Translation", "Document Translation", "API Access"],
  },
  {
    icon: Lock,
    title: "Vault",
    description: "Secure password and credentials management. Store, share, and manage sensitive information safely.",
    status: "coming" as const,
    features: ["Encrypted Storage", "Password Generator", "Secure Sharing", "2FA Support"],
  },
  {
    icon: Cpu,
    title: "AI Tools",
    description: "Suite of AI-powered productivity tools. Generate content, analyze data, and automate creative tasks.",
    status: "coming" as const,
    features: ["Text Generation", "Image Creation", "Code Assistant", "Data Analysis"],
  },
  {
    icon: Camera,
    title: "Media",
    description: "Photo and video management platform. Store, organize, edit, and share your media collection.",
    status: "coming" as const,
    features: ["Cloud Storage", "Auto Organization", "Basic Editing", "Easy Sharing"],
  },
  {
    icon: Mail,
    title: "Mail",
    description: "Professional email hosting and management. Custom domains, powerful filters, and seamless integration.",
    status: "coming" as const,
    features: ["Custom Domains", "Smart Filters", "Calendar Sync", "Mobile Apps"],
  },
];

const Solutions = () => {
  const solutionsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'AllInOne Solutions',
    description: '16+ powerful solutions including Knowledge, Automation, Security, and more',
    itemListElement: solutions.map((solution, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: solution.title,
        description: solution.description,
        applicationCategory: 'Productivity',
      },
    })),
  };

  return (
    <Layout>
      <SEO
        title="Our Solutions - 16+ Powerful Tools | AllInOne Platform"
        description="Explore AllInOne's 16+ solutions: Knowledge base with 300+ articles, Automation, Security, Deploy, Storage, Analytics, Finance, AI Tools, and more. All working seamlessly together."
        keywords="AllInOne solutions, knowledge management, automation tools, cloud security, deployment, storage, analytics, finance tools, AI productivity"
        canonicalUrl="/solutions"
        structuredData={solutionsStructuredData}
      />
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <header className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A growing ecosystem of powerful tools designed to work together seamlessly. 
              Start with what you need, expand as you grow.
            </p>
          </header>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`group glass rounded-2xl p-8 hover-lift animate-fade-in-up ${
                  solution.status === "available" ? "ring-1 ring-primary/30" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  {solution.status === "available" ? (
                    <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                      Available Now
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {solution.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {solution.status === "available" && solution.href && (
                  <Button variant="hero" asChild>
                    <a href={solution.href} target="_blank" rel="noopener noreferrer">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <Cloud className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              More Solutions Coming Soon
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              We're constantly building new tools to help you work smarter. 
              Stay tuned for exciting updates and new releases.
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">
                Get Notified
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
