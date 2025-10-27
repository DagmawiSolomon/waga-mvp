import CallToAction from "@/components/call-to-action"
import Features from "@/components/features-1"
import FooterSection from "@/components/footer"
import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import StatsSection from "@/components/stats"

export default function Home() {
  return (
      <div className="relative z-10">
        <HeroSection />
        <StatsSection />
        <Features />
        <HowItWorks />
        <CallToAction />
        <FooterSection />
      </div>
  )
}
