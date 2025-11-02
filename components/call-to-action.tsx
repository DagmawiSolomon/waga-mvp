import { Button } from "@/components/ui/button"
import Link from "next/link"
import { header_font } from "./fonts"
import FooterSection from "./footer"


export default function CallToAction() {
  return (
   
    <section className="relative min-h-screen w-full overflow-hidden " >

 
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:py-20 lg:py-32 bg-secondary/5 rounded-2xl" style={{
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // subtle base color
    backgroundImage: `
      repeating-linear-gradient(
        0deg,
        rgba(0,0,0,0.02),
        rgba(0,0,0,0.02) 1px,
        transparent 1px,
        transparent 2px
      )
    `,
  }}
>
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
      <FooterSection /> 
    </section>
    
  )
}
