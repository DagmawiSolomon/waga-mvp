import { Button } from "@/components/ui/button"
import Link from "next/link"
import { header_font } from "./fonts"

export default function CallToAction() {
  return (
    <section className="relative min-h-screen w-full bg-[#f8fafc] py-16">
      {/* <div
        className="absolute inset-0 z-0"
        style={{
      backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
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
            radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
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
            radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
      `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}

      /> */}

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:py-20 lg:py-32">
        <div className="text-center">
          <h2 className={`text-balance text-4xl font-semibold lg:text-5xl ${header_font.className}`}>
            Ready to Transform the Coffee Value Chain?
          </h2>
          <p className="mt-4">Join the future of coffee supply chain management with decentralized technology.</p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">
                <span>Explore Portals</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
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
