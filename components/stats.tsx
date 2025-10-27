import { Montserrat } from "next/font/google";
import { header_font } from './fonts'

export default function StatsSection() {
    return (
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
    )
}
