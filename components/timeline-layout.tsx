"use client"

import { Timeline, TimelineItem, TimelineTitle, TimelineDescription, TimelineHeader } from "@/components/timeline"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"

type TimelineItemType = {
  title: string
  description?: string
}

const timelineData: TimelineItemType[] = [
  {
    title: "Farm Level",
    description:
      "Cooperatives create green coffee bean batches (60kg) with origin certification and quality documentation",
  },
  {
    title: "Processing Level",
    description: "Roasters create roasted coffee bean batches (60kg) with roasting profiles and flavor documentation",
  },
  {
    title: "Retail Level",
    description: "Processors create consumer-ready coffee batches (250g/500g) with ZK privacy protection",
  },
  {
    title: "Distribution Level",
    description: "Distributors request verified batches and redeem tokens for physical coffee delivery",
  },
  {
    title: "Management",
    description: "Admin portal for WAGA staff to verify, manage, and oversee the entire coffee ecosystem",
  },
  {
    title: "Public Access",
    description: "Browse and explore verified coffee batches with transparent quality and origin information",
  },
]

export const TimelineLayout = () => {
  const [inViewIndices, setInViewIndices] = React.useState<Set<number>>(new Set())
  const itemRefs = React.useRef<(HTMLDivElement | null)[]>([])

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setInViewIndices((prev) => {
              const newSet = new Set(prev)
              if (entry.isIntersecting) {
                newSet.add(index)
              } else {
                newSet.delete(index)
              }
              return newSet
            })
          }
        })
      },
      { threshold: 0.5 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <Timeline className="mt-8">
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          index={index}
          ref={(el) => {
            itemRefs.current[index] = el
          }}
          isInView={inViewIndices.has(index)}
        >
          <TimelineHeader index={index} isInView={inViewIndices.has(index)}>
            <TimelineTitle index={index}>{item.title}</TimelineTitle>
            {item.description && <TimelineDescription index={index}>{item.description}</TimelineDescription>}
            <Link
              href="#"
              className="flex items-center gap-1 mt-3 text-primary hover:gap-2 transition-all duration-300 underline"
            >
              Explore <ArrowRight className="size-4" />
            </Link>
          </TimelineHeader>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
