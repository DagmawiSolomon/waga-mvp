import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroHeader } from "@/components/header"
import { Montserrat, Open_Sans } from "next/font/google"
import { ArrowRight } from "lucide-react"
import { Globe } from "@/components/ui/globe"
import Features from "./features-1"
import HowItWorks from "./how-it-works"
import CallToAction from "./call-to-action"
import FooterSection from "./footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
})

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden" style={{ backgroundColor: `#0a1004` }}>
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `
          radial-gradient(circle at 50% 100%, #0aca6a 0%, transparent 50%),
          radial-gradient(circle at 50% 100%, #0e8147 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, #205332 0%, transparent 80%)
        `,
          opacity: 0.25,
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)' opacity='0.25'/%3E%3C/svg%3E")`,
          backgroundSize: "400px 400px",
          animation: "grain 8s steps(10) infinite",
        }}
      />
      <HeroHeader />
      <main className="overflow-hidden">
        <div aria-hidden className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(150,91%,42%,.08)_0,hsla(150,91%,42%,.02)_50%,hsla(150,91%,42%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(150,91%,42%,.06)_0,hsla(150,91%,42%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(150,91%,42%,.04)_0,hsla(150,91%,42%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-10 md:pt-36">
            <div aria-hidden className="absolute inset-0 -z-10 size-full bg-secondary/30" />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <Link
                  href="#link"
                  className="hover:bg-secondary/30  dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                >
                  <span className="text-foreground text-sm">🎉 Now Live on Base Testnet</span>
                  <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                  <div className="bg-secondary/50 group-hover:bg-secondary size-6 overflow-hidden rounded-full duration-500">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                    </div>
                  </div>
                </Link>

                <h1
                  className={`mx-auto mt-6 mb-0 pb-0 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-10 xl:text-[5.25rem] text-foreground ${montserrat.className} animate-fade-in-up`}
                  style={{
                    animation: "fadeInUp 0.8s ease-out 0.1s both",
                  }}
                >
                  OnChain Coffee
                </h1>
                <h2
                  className={`mx-auto mt-0 pt-0 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl xl:text-[5.25rem] text-foreground ${montserrat.className}`}
                  style={{
                    animation: "fadeInUp 0.8s ease-out 0.2s both",
                  }}
                >
                  OffChain Impact
                </h2>

                <p
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg text-foreground"
                  style={{
                    animation: "fadeInUp 0.8s ease-out 0.3s both",
                  }}
                >
                  Brewing a New Era of Coffee with Blockchain & Web3 Technology.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                  <Button asChild size="lg" className="bg-secondary text-foreground">
                    <Link href="#link">
                      <span className="text-nowrap">Get Started</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="bg-secondary/30 hover:bg-secondary/80 text-foreground"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Whitepaper</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
       
           <Features />
            <HowItWorks/> 
         <CallToAction />
        
        </section> 
      </main>
    </div>
  )
}
