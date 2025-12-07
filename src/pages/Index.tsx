import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { Features } from "@/components/home/Features";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <SolutionsPreview />
      <Features />
      <CTA />
    </Layout>
  );
};

export default Index;
