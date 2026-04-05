import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <CTASection />
      <ContactForm />
    </>
  );
}
