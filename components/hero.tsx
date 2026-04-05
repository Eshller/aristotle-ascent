import { LinkButton } from "./link-button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,67,0.08)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Credibility badges */}
          <div className="animate-fade-in mb-8 flex flex-wrap items-center justify-center gap-3">
            <Badge
              variant="secondary"
              className="gap-1.5 border-navy-700 bg-navy-800/80 px-3 py-1.5 text-gold-400"
            >
              <Award className="h-3.5 w-3.5" />
              Expert-Led Counselling
            </Badge>
            <Badge
              variant="secondary"
              className="gap-1.5 border-navy-700 bg-navy-800/80 px-3 py-1.5 text-gold-400"
            >
              <Users className="h-3.5 w-3.5" />
              500+ Students Guided
            </Badge>
            <Badge
              variant="secondary"
              className="gap-1.5 border-navy-700 bg-navy-800/80 px-3 py-1.5 text-gold-400"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              95% Success Rate
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your Path to{" "}
            <span className="text-gold-500">Academic Excellence</span>{" "}
            Starts Here
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animation-delay-200 mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Premium education counselling and consulting. We guide ambitious students
            through every step of their journey to the world&apos;s top universities.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton
              href="#contact"
              size="lg"
              className="bg-gold-500 px-8 text-base font-semibold text-navy-950 hover:bg-gold-400"
            >
              Book Free Consultation
            </LinkButton>
            <LinkButton
              href="#services"
              variant="outline"
              size="lg"
              className="border-navy-600 px-8 text-base text-foreground hover:bg-navy-800 hover:text-gold-400"
            >
              Explore Our Services
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
