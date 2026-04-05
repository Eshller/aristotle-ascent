import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-navy-950 focus:outline-none"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
