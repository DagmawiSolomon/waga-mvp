"use client"

import { Card } from "@/components/ui/card"

interface StatItem {
  value: string
  label: string
  description?: string
}

const stats: StatItem[] = [
  {
    value: "24",
    label: "Smart Contracts Deployed",
    description: "Production-ready deployments",
  },
  {
    value: "0",
    label: "Coffee Batches Tracked",
    description: "Supply chain verification",
  },
  {
    value: "0%",
    label: "Verification Rate",
    description: "System completion status",
  },
]

export function StatsGrid() {
  return (
    <div className="mx-auto max-w-4xl px-6 isolate">
      {/* 2x2 grid layout */}
      <div className="grid grid-cols-2 grid-rows-2 gap-6 auto-rows-[1fr]">
        {/* Top left */}
        <Card className="bg-secondary/10 border-secondary/50 hover:border-purple-500/50 transition-colors p-10 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="text-5xl md:text-6xl font-bold text-white">{stats[0].value}</div>
            <h3 className="text-lg md:text-lg  text-white/70">{stats[0].label}</h3>
          </div>
        </Card>

        {/* Right tall card (content bottom-aligned) */}
        <Card className="row-span-2 bg-secondary/10 border-secondary/50 hover:border-purple-500/50 transition-colors p-10 flex flex-col justify-end">
          <div className="space-y-3">
            <div className="text-5xl md:text-6xl font-bold text-white">{stats[2].value}</div>
            <h3 className="text-lg md:text-lg text-white/70">{stats[2].label}</h3>
          </div>
        </Card>

        {/* Bottom left */}
        <Card className="bg-secondary/10 border-secondary/50 hover:border-purple-500/50 transition-colors p-10 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="text-5xl md:text-6xl font-bold text-white">{stats[1].value}</div>
            <h3 className="text-md md:text-lg  text-white/70">{stats[1].label}</h3>
          </div>
        </Card>
      </div>
    </div>
  )
}
