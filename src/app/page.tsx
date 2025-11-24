import { Comparison } from "@/components/declarai/comparison";
import { Faq } from "@/components/declarai/faq";
import { Footer } from "@/components/declarai/footer";
import { Header } from "@/components/declarai/header";
import { Hero } from "@/components/declarai/hero";
import { HowItWorks } from "@/components/declarai/how-it-works";
import { Pricing } from "@/components/declarai/pricing";
import { Roadmap } from "@/components/declarai/roadmap";
import { Team } from "@/components/declarai/team";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Comparison />
        <Roadmap />
        <Pricing />
        <Team />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
