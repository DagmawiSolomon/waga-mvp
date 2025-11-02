import { Button } from "@/components/ui/button"
import Link from "next/link"
import { header_font } from "./fonts"

export default function CallToAction() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Subtle Dashed Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-40 dark:opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(231,229,228,0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(231,229,228,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 0%, #000 60%, transparent 95%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 0%, #000 60%, transparent 95%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:py-20 lg:py-32">
        <div className="text-center">
          <h2
            className={`text-balance text-4xl font-semibold lg:text-5xl ${header_font.className}`}
          >
            Ready to Transform the Coffee Value Chain?
          </h2>
          <p className="mt-4 text-white">
            Join the future of coffee supply chain management with decentralized technology.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary text-foreground">
              <Link href="/">
                <span>Explore Portals</span>
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="bg-secondary/30 hover:bg-secondary/80 text-foreground"
            >
              <Link href="/">
                <span>Whitepaper</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
