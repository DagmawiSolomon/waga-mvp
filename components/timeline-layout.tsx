import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from "@/components/timeline"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { body_font } from "./fonts"

type TimelineItemType = {
  title: string
  description: string
  link: string
}

const timelineData: TimelineItemType[] = [
  {
    
    title: "Farm Level",
    description:
      "Cooperatives create green coffee bean batches (60kg) with origin certification and quality documentation",
    link:"#"
  },
  {
    title: "Processing Level",
    description: "Roasters create roasted coffee bean batches (60kg) with roasting profiles and flavor documentation",
    link:"#"
  },
  {
    title: "Retail Level",
    description: "Processors create consumer-ready coffee batches (250g/500g) with ZK privacy protection",
    link:"#"
  },
  {
    title: "Distribution Level",
    description: "Distributors request verified batches and redeem tokens for physical coffee delivery",
    link:"#"
  },
]

export const TimelineLayout = () => {
  return (
    <Timeline className="mt-8">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} index={index}>
          <TimelineHeader index={index}>
            <TimelineTime>Step {index + 1}</TimelineTime>
            <TimelineTitle index={index} className={body_font.className}>{item.title}</TimelineTitle>
            {item.description && <TimelineDescription index={index}>{item.description}</TimelineDescription>}
            <Link href={item.link} className="flex gap-1 text-sm py-3 items-center hover:underline">
            <span>Explore</span>
            <ArrowRight className="size-4"/>
            </Link>
          </TimelineHeader>
          
        </TimelineItem>
      ))}
    </Timeline>
  )
}
