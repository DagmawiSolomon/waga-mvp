import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import { Montserrat, Open_Sans } from 'next/font/google'
import { header_font } from './fonts'
import Features from './features-1'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
});

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});
const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full relative">
   
      <HeroHeader />
      <main className="overflow-hidden">
        <div aria-hidden className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32"
            ></AnimatedGroup>

            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#link"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0"
                    >
                      <rect width="16" height="16" rx="2" fill="#0052FF" />
                    </svg>
                    <span className="text-foreground text-sm">Now Live on Base Testnet</span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
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
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.2}
                  as="p"
                  className={`mx-auto mt-6 mb-0 pb-0 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem] ${montserrat.className}`}
                >
                  OnChain Coffee
                </TextEffect>
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.2}
                  as="p"
                  className={`mx-auto mt-0 pt-0 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl xl:text-[5.25rem] ${montserrat.className}`}
                >
                  OffChain Impact
                </TextEffect>

                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg "
                >
                  Brewing a New Era of Coffee with Blockchain & Web3 Technology.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div key={1} className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                    <Button asChild size="lg" className="rounded-xl px-5 text-base">
                      <Link href="#link">
                        <span className="text-nowrap">Get Started</span>
                      </Link>
                    </Button>
                  </div>
                  <Button key={2} asChild size="lg" variant="ghost" className="h-10.5 rounded-xl px-5">
                    <Link href="#link">
                      <span className="text-nowrap">Whitepaper</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
          </div>
         
        </section>
      </main>
       <section className="py-12 md:py-20 isolate">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
              
                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className={`text-5xl font-bold ${header_font.className}`}>24</div>
                        <p>Smart Contracts Deployed</p>
                    </div>
                    <div className="space-y-4">
                        <div className={`text-5xl font-bold ${header_font.className}`}>0</div>
                        <p>Coffee Batches Tracked</p>
                    </div>
                    <div className="space-y-4">
                        <div className={`text-5xl font-bold ${header_font.className}`}>0%</div>
                        <p>Verificate Rate</p>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
  )
}
