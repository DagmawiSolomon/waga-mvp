import { header_font } from "./fonts"
import { TimelineLayout } from "@/components/timeline-layout";



export default function HowItWorks() {

  return (
      <section className="py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
              <div className="text-center">
                    <h2 className={`text-balance text-4xl font-semibold lg:text-5xl ${header_font.className}`}>Complete Coffee Ecosystem</h2>
                    <p className="mt-4">  From production to consumption, every step is verified and transparent through our decentralized platform.</p>
                </div>
                <div className="@min-4xl:max-w-full  mx-auto mt-8 max-w-sm md:mt-16">
                   <TimelineLayout/>
                </div>  
            </div>
    </section>
  )
}
