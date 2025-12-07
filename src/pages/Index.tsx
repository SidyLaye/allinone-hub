import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { Features } from "@/components/home/Features";
import { CTA } from "@/components/home/CTA";
import SEO from "@/components/SEO";

const Index = () => {
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'AllInOne - Your Unified Platform',
    description: 'AllInOne is your unified platform with 16+ powerful solutions including Knowledge with 300+ articles, automation, security, and more.',
    url: 'https://allinone.ovh',
    mainEntity: {
      '@type': 'SoftwareApplication',
      name: 'AllInOne Platform',
      applicationCategory: 'Productivity',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
  };

  return (
    <Layout>
      <SEO
        title="AllInOne - Your Unified Platform for 16+ Powerful Solutions"
        description="AllInOne unifies 16+ powerful tools: Knowledge base with 300+ articles, automation, security, cloud storage, team collaboration, and AI tools. Start free today."
        keywords="AllInOne, unified platform, knowledge management, productivity tools, automation, cloud storage, team collaboration, AI tools, SaaS"
        canonicalUrl="/"
        structuredData={homeStructuredData}
      />
      <Hero />
      <SolutionsPreview />
      <Features />
      <CTA />
    </Layout>
  );
};

export default Index;
